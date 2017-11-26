import path from 'path';

export default { // exports an object
  debug: true,
  devtool: 'inline-source-map', // lots of dev tools
  noInfo: false, // displays list of files that it is bundling
  entry: [
    path.resolve(__dirname, 'src/index') // __dirname magic global in Node and path package to get the full path
  ],
  target: 'web', // could set it to "node" if not for the browser or "electron"
  output: { // where it creates the dev bundle that it serves from memory
    path: path.resolve(__dirname, 'src'), // __dirname magic global in Node and path package to get the full path
    publicPath: '/',
    filename: 'bundle.js' // what we call the bundle
  },
  plugins: [],
  module: {
    loaders: [ // how to handle different file types [other syntax types too]
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']}, // how to do js
      {test: /\.css$/, loaders: ['style','css']} // how to do css
    ]
  }
}
