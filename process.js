const readline = require('readline');
const keypress = require('keypress');
const { setIndex, options } = require('./options')
const executeCommand = require('./executeCommand')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// process.stdout.write(`\x1B[?25l`);
process.on('exit', () => process.stdout.write('\x1B[?25h\n'));

keypress(process.stdin);
process.stdin.setRawMode(true);

process.stdin.on('keypress', (_, key) => {
    if (!key) return
    if (key.name === 'tab') setIndex((options.index + 1) % 3)
    else if (key.name === 'return') {
        rl.close();
        executeCommand(options.selected)
    }
});