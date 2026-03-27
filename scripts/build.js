const fs = require('fs');
const path = require('path');

const srcDir = __dirname;
const distDir = path.join(srcDir, '..', 'dist');

const files = [
  'index.html',
  'styles.css',
  'script.js',
  'data.js'
];

const dirs = ['assets'];

// Clean dist
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true });
}
fs.mkdirSync(distDir, { recursive: true });

// Copy files
files.forEach(file => {
  const src = path.join(srcDir, '..', file);
  const dest = path.join(distDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`Copied: ${file}`);
  }
});

// Copy directories
dirs.forEach(dir => {
  const srcDirPath = path.join(srcDir, '..', dir);
  const destDirPath = path.join(distDir, dir);
  if (fs.existsSync(srcDirPath)) {
    copyDir(srcDirPath, destDirPath);
    console.log(`Copied: ${dir}/`);
  }
});

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  fs.readdirSync(src).forEach(item => {
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);
    if (fs.statSync(srcPath).isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

console.log('Build complete: dist/');
