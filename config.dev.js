const path = require('path');

module.exports = {
    mode:"development",
    entry:"./src/App.js",

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
    
    devServer: {
        // contentBase:path.join(__dirname,'dist'),
        static: {
            directory: path.join(__dirname, 'dist')
        },
        compress: true,
        port: 3000
    }
}