const fs = require('fs');

const breedDetailsFromFile = (breed, callback) => {
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    if (!error) callback(data);
  });
};

module.exports = breedDetailsFromFile;