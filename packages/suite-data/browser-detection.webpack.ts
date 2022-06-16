import path from 'path';

module.exports = {
    target: 'browserslist',
    mode: 'production',
    entry: path.resolve(__dirname, './src/browser-detection/index.ts'),
    output: {
        path: path.resolve(__dirname, 'files/browser-detection'),
        filename: 'index.js',
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    devtool: 'nosources-source-map',
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-typescript'],
                    },
                },
            },
            {
                // target css file to ensure unique id for <style> tag
                include: path.resolve(__dirname, 'src', 'browser-detection', 'styles.css'),
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            attributes: { id: 'browser-detection-style' },
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[name]__[local]',
                            },
                        },
                    },
                    'postcss-loader',
                ],
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                type: 'asset/resource',
            },
        ],
    },
    performance: {
        hints: false,
    },
};
