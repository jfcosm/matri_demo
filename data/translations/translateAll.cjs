const fs = require('fs');
const path = require('path');
const https = require('https');

const codes = ['en', 'fr', 'it', 'de', 'pt', 'ja', 'zh-CN', 'ko', 'nl', 'hi', 'gu', 'ta', 'arn', 'gn', 'qu'];

const codeMap = {
    'zh-CN': 'zh'
};

const esFile = fs.readFileSync(path.join(__dirname, 'es.ts'), 'utf-8');

async function translate(text, target) {
    return new Promise((resolve) => {
        const query = encodeURIComponent(text);
        const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=es&tl=${target}&dt=t&q=${query}`;

        https.get(url, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    const parsed = JSON.parse(data);
                    let translatedText = '';
                    if (parsed && parsed[0]) {
                        parsed[0].forEach(item => {
                            if (item[0]) translatedText += item[0];
                        });
                    }
                    resolve(translatedText || text);
                } catch (e) {
                    resolve(text);
                }
            });
        }).on('error', () => {
            resolve(text);
        });
    });
}

async function run() {
    console.log('Starting translations...');
    const regex = /'([a-zA-Z0-9_.-]+)':\s*'([^']*)'/g;

    // parse the esFile into a dictionary
    const dict = {};
    let match;
    while ((match = regex.exec(esFile)) !== null) {
        dict[match[1]] = match[2];
    }

    for (const targetLang of codes) {
        console.log(`Translating to ${targetLang}...`);
        const exportName = codeMap[targetLang] || targetLang;
        let content = `import { TranslationDictionary } from './index';\n\nexport const ${exportName}: TranslationDictionary = {\n`;

        for (const [key, value] of Object.entries(dict)) {
            if (value.startsWith('http') || !isNaN(Date.parse(value)) || !isNaN(Number(value)) || value.includes('HRS')) {
                content += `  '${key}': '${value.replace(/'/g, "\\'")}',\n`;
            } else {
                const translated = await translate(value, targetLang);
                // Escape single quotes inside translated string
                const safeStr = translated.replace(/'/g, "\\'");
                content += `  '${key}': '${safeStr}',\n`;
            }
        }

        content += `};\n`;
        fs.writeFileSync(path.join(__dirname, `${exportName}.ts`), content);
        console.log(`Finished ${exportName}.ts`);

        // Sleep to avoid rate limits
        await new Promise(r => setTimeout(r, 1000));
    }
    console.log('Done mapping all languages!');
}

run();
