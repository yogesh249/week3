const fs = require('fs');

const path = require('path');
const filePath = path.resolve(__dirname, 'sample.txt');

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        if (err.code === 'ENOENT') {
            console.error('File not found:', filePath);
        } else if (err.code === 'EACCES') {
            console.error('Permission denied:', filePath);
        } else {
            console.error('Error reading file:', err);
        }
    } else {
        console.log('File contents:', data);
    }
});


fs.writeFile('output.txt', 'This is some sample data.', (err) => {
    if (err) {
    console.error('Error writing file:', err);
    } else {
    console.log('Data written to output.txt');
    }
    });


    const os = require('os');


const hostname = os.hostname();
const platform = os.platform();
const cpus = os.cpus();

// Logging the information to the console
console.log('Hostname:', hostname);
console.log('Platform:', platform);
console.log('CPU Cores:', cpus.length);

// Writing the information to a file
const fileInfo = `
Hostname: ${hostname}
Platform: ${platform}
CPU Cores: ${cpus.length}
`;

fs.writeFile('os_info.txt', fileInfo, (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }
  console.log('Information written to os_info.txt file.');
});