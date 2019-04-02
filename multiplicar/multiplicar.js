const fs = require("fs");

const showTableInConsole = (base, limite) =>{
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject(`El valor ${base} no es un numero`);
      return;
    }
    if (!Number(limite)) {
      reject(`El valor ${limite} no es un numero`);
      return;
    }
    for (let i = 0; i <= limite; i++) {
      console.log(`${base} * ${i} = ${base * i}\n`);
    }
  })
};

const saveFile = (base, limite) =>{
  return new Promise((resolve, reject) =>{
    if (!Number(base)) {
      reject(`El valor ${base} no es un numero`);
      return;
    }
    if (!Number(limite)) {
      reject(`El valor ${limite} no es un numero`);
      return;
    }
    let data = '';
    for (let i = 0; i <= limite; i++) {
      data += (`${base} * ${i} = ${base * i}\n`);
    }
    
    fs.writeFile(`tables/table-${base}-al-${limite}.txt`, data, (err) => {
      if (err) reject(err)
      else resolve(`The file table-${base}-al-${limite} has been saved!`);
    });
  });
}

module.exports = { 
  saveFile,
  showTableInConsole 
};
