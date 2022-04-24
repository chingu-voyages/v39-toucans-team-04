const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/app.jsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'assets/[hash][ext][query]'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|ttf|otf)$/i,
                type: 'asset/resource'
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        hot: true
    },
    plugins: [new HtmlWebpackPlugin({template: path.join(__dirname, "src", "index.html")})]
}