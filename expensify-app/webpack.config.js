const path = require('path');

module.exports = {
    entry: './src/playground/redux-expensify.js',
    output: {
        path: path.join(__dirname, 'public'), // This is the absolule path to where you want to output
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,  // $ symbol means 'files that end with this eg .js or .css'
            exclude: /node_modules/
        },
        {
            test: /\.s?css$/, // ? makes the s optional, so it will support css & scss files
            use: [ // 'use' allows for the use of an array of loaders
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true // Tells the devserver that we are using clientside routing, and for all 404 routes it should fallback to index.html
    }
}