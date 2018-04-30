const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'), //This is the absolule path to where you want to output
        filename: 'bundle.js'
    }
}