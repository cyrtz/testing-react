const path = require('path');
module.exports = {
    entry: {
        index: './src/index.js',
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve('./build'),
    },
    // --------- 新增以下內容 -----------
    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/, //不編譯的檔案
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'],
                    },
                },
            },
        ],
    },
};