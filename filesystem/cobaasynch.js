const fs = require('fs');

const readFileCallback = (error, data) => {
  if(error){
    console.log('error woy');
    return;
  }

  console.log(data);
}

fs.readFile('todo.txt', 'utf-8', readFileCallback);

// cd filesystem
// node cobaasynch.js