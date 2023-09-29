const { exec } = require('child_process');

function executeCommand(command) {
    console.log(`-------------------------------------------------------\n`);
    exec(`bash -c '${command}'`, (error, stdout, _) => {
        if (error) return console.log('\x1b[31m%s\x1b[0m', error.stack);
        console.log(`${stdout}`);
    });
}

module.exports = executeCommand