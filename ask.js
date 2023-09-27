async function ask(question) {
    try {
        const response = await fetch(`https://functionj.com/api/v1/ask?question=${question}`);
        if (!response.ok) {
            if (response.status === 404) console.log('Resource not found')
            else if (response.status === 400) console.log('Please retry');
            else console.log('\x1b[31m%s\x1b[0m', response.statusText);
            return false
        } else {
            return await response.json();
        }
    } catch (error) {
        console.error('\x1b[31m%s\x1b[0m', 'An error occurred:', error);
    }
}

module.exports = ask
