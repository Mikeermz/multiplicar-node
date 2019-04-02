const opts = {
  base: {
    demand: true,
    alias: 'b'
  },
  limite: {
    alias: 'l',
    default: 10
  }
};
const argv = require('yargs')
                    .command('listar','Print in console tables', opts)
                    .command('crear','Save file to tables', opts)
                    .help()
                    .argv

module.exports = { argv }
