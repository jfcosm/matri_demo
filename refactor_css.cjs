const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'components');
const appFile = path.join(__dirname, 'App.tsx');
let files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx')).map(f => path.join(dir, f));
files.push(appFile);

for (const p of files) {
    let content = fs.readFileSync(p, 'utf-8');

    // Replace Primary Colors
    content = content.replace(/#8fa189/g, 'var(--color-primary)');
    content = content.replace(/#7a8c75/g, 'var(--color-primary)'); // Hover primary

    // Replace Background Colors
    content = content.replace(/#fdfcfb/g, 'var(--color-bg)');
    content = content.replace(/#f4f6f3/g, 'var(--color-bg)');

    // Replace Base Text Color explicit Hex
    content = content.replace(/#4a4a4a/g, 'var(--color-text)');

    // Replace Tailwind Grays with text base and opacity for hierarchy
    content = content.replace(/text-gray-900/g, 'text-[var(--color-text)] opacity-100');
    content = content.replace(/text-gray-800/g, 'text-[var(--color-text)] opacity-90');
    content = content.replace(/text-gray-700/g, 'text-[var(--color-text)] opacity-80');
    content = content.replace(/text-gray-600/g, 'text-[var(--color-text)] opacity-70');
    content = content.replace(/text-gray-500/g, 'text-[var(--color-text)] opacity-60');
    content = content.replace(/text-gray-400/g, 'text-[var(--color-text)] opacity-50');
    content = content.replace(/text-gray-300/g, 'text-[var(--color-text)] opacity-40');
    content = content.replace(/text-gray-200/g, 'text-[var(--color-text)] opacity-30');

    // Replace background grays (usually for cards or inputs) with background color or white with opacity
    content = content.replace(/bg-gray-50/g, 'bg-white/10 border-[var(--color-text)] border-opacity-10');
    content = content.replace(/bg-gray-100/g, 'bg-white/20');
    content = content.replace(/bg-gray-900/g, 'bg-[var(--color-primary)] text-white'); // Generic dark buttons

    // Replace border grays
    content = content.replace(/border-gray-200/g, 'border-[var(--color-text)] border-opacity-20');
    content = content.replace(/border-gray-100/g, 'border-[var(--color-text)] border-opacity-10');

    fs.writeFileSync(p, content);
}

console.log('Successfully refactored CSS classes across ' + files.length + ' files.');
