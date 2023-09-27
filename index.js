#!/usr/bin/env node

require('./process')
const ask = require('./ask')
const { setOptions } = require('./options')

const question = process.argv.slice(2).join(" ");
ask(question).then(response => {
    setOptions(response || [])
})

