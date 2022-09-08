const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: './src/assets/js/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'assets/js/main.js',
    },
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: [
                {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                        ['@babel/preset-env',{ 'targets': '> 0.25%, not dead'}],
                    ],
                    },
                },
                ],
            },

            {
                test: /\.(css|sass|scss)/,
                use: [
                    {
                    loader: MiniCssExtractPlugin.loader,
                },
                    {
                        loader: 'css-loader',
                        // options: {
                        //     sourceMap: true,
                        // }
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
            {
                test: /\.(svg|png|jpg)/,
                type: 'asset/resource',
                generator: {
                    filename: './assets/img/[name][ext]'
                },
                use: [
                    // {
                    //     loader: 'file-loader',
                    //     options: {
                    //         esModule: false,
                    //         name: 'assets/img/[name].[ext]',
                    //     },
                    // },
                ],
            },
            {
                test: /\.pug/,
                use: [
                    {
                        loader: 'html-loader',
                    },
                    {
                        loader: 'pug-html-loader',
                        options: {
                            pretty: true,
                        },
                    },
                ],
            },
      ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'assets/css/main.css',
        }),
        new HtmlWebpackPlugin({
            template: './src/assets/templates/index.pug',
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/assets/templates/access.pug',
            filename: 'access.html',
                }),
        new CleanWebpackPlugin(),
    ],
}
