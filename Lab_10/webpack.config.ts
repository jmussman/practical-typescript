import path from 'path';
import webpack, { Configuration } from 'webpack';
import * as webpackDevServer from 'webpack-dev-server';

const config: Configuration = {

    entry: './src/equipmentManager.ts',
    mode: 'development',
    context: __dirname,
    devtool: 'source-map',
    target: 'web',
    module: {
        rules: [
            {
                test: /\.(ts|js)?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-typescript']
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
        fallback: {
            assert: require.resolve('assert-browserify'),
            console: require.resolve('console-browserify'),
            util: require.resolve('util')
        }
    },
    plugins: [
        new webpack.ProvidePlugin({ process: 'process/browser', Buffer: [ 'buffer', 'Buffer' ] })
    ],
    output: {
        path: path.resolve(__dirname, 'dist/assets/script/'),
        publicPath: '/assets/script/',
        filename: 'equipment-manager-bundle.js',
    },
    devServer: {
        static: path.join(__dirname, 'dist'),
        compress: true,
        port: 3080
    }
};

export default config;