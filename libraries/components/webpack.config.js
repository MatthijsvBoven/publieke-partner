module.exports = {
  target: 'web',
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx'],
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        exclude: [/node_modules/],
        use: {
          loader: 'babel-loader',
          options: {
            rootMode: 'upward',
            plugins: [
              ['@babel/plugin-proposal-decorators', { legacy: true }],
              '@babel/plugin-proposal-export-namespace-from',
              '@babel/plugin-proposal-export-default-from',
              '@babel/plugin-proposal-function-sent',
              '@babel/plugin-proposal-numeric-separator',
              '@babel/plugin-proposal-optional-chaining',
              '@babel/plugin-proposal-throw-expressions',
              ['@babel/plugin-proposal-class-properties', { loose: false }],
              '@babel/plugin-proposal-json-strings',
              '@babel/plugin-proposal-unicode-property-regex',
              '@babel/plugin-transform-runtime',
            ],
          },
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
}
