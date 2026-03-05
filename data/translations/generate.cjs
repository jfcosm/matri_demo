const fs = require('fs');
const path = require('path');

const codes = ['en', 'fr', 'it', 'de', 'pt', 'ja', 'zh', 'ko', 'nl', 'hi', 'gu', 'ta', 'arn', 'gn', 'qu'];

const esFile = fs.readFileSync(path.join(__dirname, 'es.ts'), 'utf-8');

// Simple regex to match key-value pairs in the es.ts object
const regex = /'([^']+)': '([^']+)'/g;

codes.forEach(code => {
    let content = `import { TranslationDictionary } from './index';\n\nexport const ${code}: TranslationDictionary = {\n`;

    let match;
    // Reset regex index
    const regexClone = new RegExp(regex);
    while ((match = regexClone.exec(esFile)) !== null) {
        const key = match[1];
        const value = match[2];

        // Don't prefix things like dates, numbers, or URLs
        if (value.startsWith('http') || !isNaN(Date.parse(value)) || !isNaN(Number(value))) {
            content += `  '${key}': '${value}',\n`;
        } else {
            content += `  '${key}': '[${code.toUpperCase()}] ${value}',\n`;
        }
    }

    content += `};\n`;

    fs.writeFileSync(path.join(__dirname, `${code}.ts`), content);
});

console.log('Translations generated successfully.');
