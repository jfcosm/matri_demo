import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const codes = ['arn', 'gn', 'qu'];
const codeMap = { 'zh-CN': 'zh' };

const esFile = fs.readFileSync(path.join(__dirname, 'es.ts'), 'utf-8');

async function translate(text, target) {
    const query = encodeURIComponent(text);
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=es&tl=${target}&dt=t&q=${query}`;

    for (let attempt = 0; attempt < 3; attempt++) {
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 8000);
            const res = await fetch(url, { signal: controller.signal });
            clearTimeout(timeoutId);

            if (!res.ok) {
                if (res.status === 400) throw new Error('NOT_SUPPORTED');
                throw new Error(`HTTP ${res.status}`);
            }
            const data = await res.json();

            let translatedText = '';
            if (data && data[0]) {
                data[0].forEach(item => {
                    if (item[0]) translatedText += item[0];
                });
            }
            return translatedText || text;
        } catch (e) {
            if (e.message === 'NOT_SUPPORTED') return `[${target.toUpperCase()}] ${text}`;
            await new Promise(r => setTimeout(r, 2000 + attempt * 1000));
        }
    }
    return `[${target.toUpperCase()}] ${text}`; // Return prefixed on failure
}

async function run() {
    console.log('Starting fast translations...');
    const regex = /'([a-zA-Z0-9_.-]+)':\s*'([^']*)'/g;

    const dict = {};
    let match;
    while ((match = regex.exec(esFile)) !== null) {
        dict[match[1]] = match[2];
    }

    for (const targetLang of codes) {
        console.log(`Translating to ${targetLang}...`);
        const exportName = codeMap[targetLang] || targetLang;
        let content = `import { TranslationDictionary } from './index';\n\nexport const ${exportName}: TranslationDictionary = {\n`;

        const entries = Object.entries(dict);
        const batchSize = 10;
        let count = 0;

        for (let i = 0; i < entries.length; i += batchSize) {
            const batch = entries.slice(i, i + batchSize);

            const results = await Promise.all(batch.map(async ([key, value]) => {
                if (value.startsWith('http') || !isNaN(Date.parse(value)) || !isNaN(Number(value)) || value.includes('HRS')) {
                    return `  '${key}': '${value.replace(/'/g, "\\'")}',\n`;
                } else {
                    const translated = await translate(value, targetLang);
                    const safeStr = translated.replace(/'/g, "\\'");
                    return `  '${key}': '${safeStr}',\n`;
                }
            }));

            content += results.join('');
            count += batchSize;
            console.log(`  Progress: ${Math.min(count, entries.length)} / ${entries.length}`);

            await new Promise(r => setTimeout(r, 500)); // small delay between batches
        }

        content += `};\n`;
        fs.writeFileSync(path.join(__dirname, `${exportName}.ts`), content);
        console.log(`Finished ${exportName}.ts`);
        await new Promise(r => setTimeout(r, 1000));
    }
    console.log('Done mapping all languages!');
}

run();
