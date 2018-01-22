const xml2json = require('xml2json');
const fs = require('fs');
const path = require('path');
const xmlPath = path.join(__dirname, '/data.xml');
const jsonPath = path.join(__dirname, '/result.json');

getXml(xmlPath)
.then(parseXml2Json)
.then(writeJsonData)
.then((data)=>{
  if (data.err) {
    console.log(data.err);
  }
  console.log('Successfully Converted the data.');
});

function getXml (filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath,'utf-8', (err, content) => {
      if (err) {
        resolve({err});
        return;
      }
      resolve({err: null, content});
    });
  });
}

function parseXml2Json (data) {
  return new Promise((resolve, reject) => {
    if (data.err) {
      resolve(data);
      return;
    }
    const jsonData = xml2json.toJson(data.content);
    resolve({err: null, jsonData});
  });
}

function writeJsonData (data) {
  return new Promise((resolve, reject) => {
    if (data.err) {
      resolve(data);
      return;
    }
    fs.writeFile(jsonPath, data.jsonData, (err) => {
      if (err) {
        resolve({err});
      }
      resolve({err: null});
    })
  });
}
