// netlify/functions/projects.js
const fs = require('fs').promises; // Using promises version of fs

exports.handler = async function(event, context) {
    try {
        const data = await fs.readFile('./projects.json', 'utf8'); 
        return {
            statusCode: 200,
            body: data
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: 'An error occurred while reading the file.'
        };
    }
};
