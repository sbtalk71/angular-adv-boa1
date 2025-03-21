const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  library:{type:'module'},
  remotes: {
    products: "http://localhost:4201/remoteEntry.js", 
    orders  : "http://localhost:4202/remoteEntry.js", 
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
