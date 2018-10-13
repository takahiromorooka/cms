const path = require('path')

module.exports = [
    {
        entry: {
            'topics/edit': './src/entries/topics/edit.js',
            'topics/new': './src/entries/topics/new.js'
        },
        output: {
            path: path.resolve('../app/assets/javascripts/webpack'),
            filename: '[name].js'
        },
        module: {
            rules: [
                {
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['react', 'es2015', 'stage-2']
                    }
                }
            ]
        },
        resolve: {
            extensions: ['.js', '.jsx']
        }
    }
]
