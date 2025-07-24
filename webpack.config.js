import path from 'node:path';
import CopyWebpackPlugin from 'copy-webpack-plugin';

const pdfjsDistPath = path.dirname(require.resolve('pdfjs-dist/package.json'));
const cMapsDir = path.join(pdfjsDistPath, 'cmaps');
const standardFontsDir = path.join(path.dirname(require.resolve('pdfjs-dist/package.json')), 'standard_fonts');

module.exports = {
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
      new CopyWebpackPlugin({
     patterns: [
       {
         from: cMapsDir,
         to: 'cmaps/'
       },
       {
         from: standardFontsDir,
         to: 'standard_fonts/'
       },
     ],
   }),
  ]
};


