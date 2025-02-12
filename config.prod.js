const path = require('path');

module.exports = {
    mode:"production",
    entry:"./src/App.js",
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"main.js"
    },

    // loader
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
}