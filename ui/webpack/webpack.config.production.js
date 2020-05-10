const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const extractSass = new ExtractTextPlugin('./css/aquatics.min.css')

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: {
        index: './ui/aquatic_common/index.js',
        vendors: [
			'react',
            'react-dom',
            'react-cookie',
            'react-router-redux',            
            'react-redux',

            'react-router',
            'react-router-dom',
            'history',

            'redux',
            'redux-api-middleware',
            'redux-thunk',
            'redux-logger',
            'lodash',
            'moment',
            'antd'
        ]
    },
    
    output: {
        path: path.join(__dirname, 'aquatics_asset'),
        filename: 'aquatics.min.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            'es2015',
                            'stage-0',
                            'react'
                        ],
                        plugins: ['transform-runtime']
                    }
                }
            }, 
            {
                test: /\.css$/,                
                use: ['style-loader', 'css-loader']
            }, 
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: extractSass.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                module: true,
                                localIdentName: '[local]___[hash:base64:5]'
                            }
                        },
                        'sass-loader',
						'postcss-loader'
					]
                })
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
                use: [{
                    loader: 'url-loader',
                    options: {
						outputPath: 'images/',
                        limit: 200000
                    }
                }]
            }
        ]
    },

    plugins: [
        extractSass,
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendors', 'antd'], 
            filename: '[name].min.js',
            minChunks: Infinity
        }),
        new webpack.ProvidePlugin({
            "React": "react",
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false,
            postcss: {
                sourceMap: true,
                plugins: () => [autoprefixer],
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new UglifyJsPlugin()
    ]
}