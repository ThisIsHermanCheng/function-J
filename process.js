const readline = require('readline');
const keypress = require('keypress');
const { setIndex, options } = require('./options')
const executeCommand = require('./executeCommand')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

process.stdout.write(`\x1B[?25l`);
process.on('exit', () => process.stdout.write('\x1B[?25h\n'));

keypress(process.stdin);
process.stdin.setRawMode(true);

let inputting = false

process.stdin.on('keypress', (_, key) => {
    if (!key) return
    if (key.name === 'tab') setIndex((options.index + 1) % 3)
    else if (key.name === 'return') {

        if (inputting) return

        const regex = /\{([^}]+)\}/g;
        const matches = [];
        let match;
        while ((match = regex.exec(options.selected)) !== null) {
            matches.push(match[1]);
        }

        if (matches.length == 0) {
            rl.close();
            executeCommand(options.selected)
            inputting = false
        } else {
            console.log("-------------------------------------------------------")
            console.log("Please input the following values")

            inputting = true
            currentIndex = 0

            function askQuestion() {
                rl.question(matches[currentIndex] + ': ', (answer) => {
                    options.selected = options.selected.replace(`{${matches[currentIndex]}}`, answer)
                    currentIndex++;
                    if (currentIndex < matches.length) {
                        askQuestion();
                    } else {
                        executeCommand(options.selected)
                        rl.close();
                    }
                });
            }


            askQuestion();

        }


    }
});

