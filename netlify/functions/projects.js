const fs = require('fs').promises; 
const path = require('path');

exports.handler = async function(event, context) {
    const filePath = path.join(__dirname, '..', '..', '/projects.json');
    console.log(filePath);
    try {
        await fs.access(filePath);
        const data = await fs.readFile(filePath, 'utf8'); 
        console.log(data);
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
