const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = {  
  entry: './index.js',    
  output: {
    filename: 'bundle.js'    
  },
  plugins: [    
    new LodashModuleReplacementPlugin()
  ]  
};
