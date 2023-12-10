const fs = require('fs');
const {resolve} = require('path');

const writeableStream = fs.createWriteStream('./stream/output.txt');
const readableStream = fs.createReadStream(resolve(__dirname, 'input.txt'), {
  highWaterMark: 15
});

readableStream.on('readable', () => {
  try {
    writeableStream.write(`${readableStream.read()}\n`);
    // process.stdout.write(`${readableStream.read()}\n`);
  } catch (error) {
    console.log('Error oy');
  }
});

readableStream.on('end', () => {
  writeableStream.end(null);
});