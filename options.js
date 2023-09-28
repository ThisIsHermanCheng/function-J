const options = {
    list: [],
    index: 0,
    selected: ''
}

function setOptions(newValue) {
    options.list = newValue;
    displayOptions();
}

function setIndex(newValue) {
    options.index = newValue;
    displayOptions();
}

function displayOptions() {
    options.selected = options.list[options.index];

    process.stdout.clearLine();
    process.stdout.cursorTo(0);

    for (let i = 0; i < options.list.length; i++) {

        i === options.index ?
            process.stdout.write(`\x1b[42m${options.list[i]}\x1b[0m`)
            : process.stdout.write(options.list[i]);

        if (i < options.list.length - 1) {
            process.stdout.write('  |  ');
        }
    }
}


module.exports = {
    options,
    setOptions,
    setIndex,
}