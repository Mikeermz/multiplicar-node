// required 
const { argv } = require('./config/yargs');
const colors = require('colors');
const { saveFile, showTableInConsole } = require('./multiplicar/multiplicar');

const comando = argv._[0];

switch (comando) {
  case 'listar':
  showTableInConsole(argv.base, argv.limite)
            .then( file => console.log(`Se muestra la tabla del ${argv.base} hasta ${argv.limite}`).green)
            .catch(error => console.log(error))
    break;
  case 'crear':
    saveFile(argv.base, argv.limite)
            .then( file => console.log(`Se creo el arvhivo ${file.green}`))
            .catch(error => console.log(error))
    break;
  default:
    console.log("Comando no reconocido");
    break;
}

