const path = require('path');
const { MyExampleWebpackPlugin } = require('./plugin');

module.exports = {
    mode: 'development',
    devtool: false,
    entry:  path.resolve(__dirname, "./index.js"),
    output: {
        path: path.resolve(__dirname, "./dist"), 
        filename: "[name].js", 
    },
    plugins: [
        new MyExampleWebpackPlugin(),
    ]
}