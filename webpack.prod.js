const path = require('path');

module.exports = {
    entry: {
        leopaysjs_api: './src/eosjs-api.ts',
        leopaysjs_jsonrpc: './src/rpc-web.ts',
        leopaysjs_jssig: './src/eosjs-jssig.ts',
        leopaysjs_numeric: './src/eosjs-numeric.ts',
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        configFile: 'tsconfig.web.json'
                    }
                },
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: x => x.chunk.name.replace('_', '-') + '.js',
        library: '[name]',
        path: path.resolve(__dirname, 'dist-web'),
    }
};
