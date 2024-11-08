import { readFileSync, readdirSync, statSync, writeFileSync } from 'fs';
import { join, relative } from 'path';

function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = readdirSync(dirPath);

  files.forEach(function(file) {
    if (statSync(join(dirPath, file)).isDirectory()) {
      arrayOfFiles = getAllFiles(join(dirPath, file), arrayOfFiles);
    } else {
      arrayOfFiles.push(join(dirPath, file));
    }
  });

  return arrayOfFiles;
}

const projectDir = '.';
const allFiles = getAllFiles(projectDir);

let output = '';

allFiles.forEach(file => {
  const relativePath = relative(projectDir, file);
  if (!relativePath.startsWith('node_modules') && !relativePath.startsWith('.git')) {
    output += `\n--- ${relativePath} ---\n\n`;
    try {
      const content = readFileSync(file, 'utf8');
      output += content + '\n';
    } catch (err) {
      output += `Error reading file: ${err}\n`;
    }
  }
});

writeFileSync('application_contents.txt', output);
console.log('Application contents have been written to application_contents.txt');