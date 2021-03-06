const webpack = require('webpack')
const path = require('path')
const autoprefixer = require('autoprefixer');
const config = require('../config')

module.exports = {
    devtool: 'eval',
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8081',
        'webpack/hot/only-dev-server',
        './ui/aquatics_common/theme/tachyons.min.css',
        './ui/aquatics_common/theme/antd.min.css',
        './ui/aquatics_common/theme/smooth-scrollbar.css',
        './ui/aquatics_common/index.js'
    ],
    output: {
        publicPath: `http://${config.webPackHost}:${config.webPackDevServPort}/static/`,
        path: path.join(__dirname, 'static'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: ['transform-runtime']
                    }
                }
            }, 
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }, 
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'style-loader' }, 
                    {
                        loader: 'css-loader',
                        options: {
                            module: true,
                            localIdentName: 'bangkok___[local]___[hash:base64:5]'
                        }
                    }, 
                    {
                        loader: 'sass-loader',
                        options: {
                            outputStyle: 'expanded',
                            sourceMap: true
                        }
                    }, 
                    { loader: 'postcss-loader' }
                ]
            }, 
            {
                test: /\.(eot|woff|woff2|ttf)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            limit: 200000
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {limit: 200000 }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('dev')
            }
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [autoprefixer()]
            }
        })
    ],
    devServer: {
        port: config.webPackDevServPort,
        hot: true,
        inline: false,
        historyApiFallback: true,
        headers: { "Access-Control-Allow-Origin": "*" },
        proxy: {
            '/api/*': {
                target: 'http://127.0.0.1:5000'
            }
        }
    }
}