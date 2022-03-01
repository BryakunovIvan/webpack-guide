const path = require('path');

module.exports = {
    mode: 'development',
    devtool: false,
    entry:  path.resolve(__dirname, "./index.js"),
    output: {
        path: path.resolve(__dirname, "./dist"), 
        filename: "[name].js", 
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["css-loader", "postcss-loader"],
          },
        ],
    },
}