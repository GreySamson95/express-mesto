const fsPromises = require('fs').promises;

function getDataInfo(filePath) {
  return fsPromises.readFile(filePath, { encoding: 'utf8' })
    .then((data) => JSON.parse(data))
    // eslint-disable-next-line no-console
    .catch((err) => console.log(err));
}

module.exports = getDataInfo;
