const path = require('path');

module.exports = {
    entry: './src/index.js',
    watch: true,
    test: /\.(png|jpg)$/,
    loader: 'url-loader',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    }
};