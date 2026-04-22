const fs = require('fs');
const path = require('path');

function replaceWhite(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            replaceWhite(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            content = content.replace(/bg-white /g, 'bg-brand-surface ');
            content = content.replace(/bg-white\//g, 'bg-brand-surface/');
            content = content.replace(/"bg-white"/g, '"bg-brand-surface"');
            fs.writeFileSync(fullPath, content);
        }
    }
}
replaceWhite(path.join(__dirname, 'src'));
console.log('Replaced bg-white instances.');
