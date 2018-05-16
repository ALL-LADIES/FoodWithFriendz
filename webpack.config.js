var webpack= require ('webpack');
const path = require('path');

module.exports = {
    entry: {
      app: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { 
                test: /\.jsx?$/, 
                loader: 'babel-loader', 
                exclude: /node_modules/ 
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        hot: true
    },
    plugins: [
      new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
    ]
};