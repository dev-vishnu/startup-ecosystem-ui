const withLess = require( "@zeit/next-less" );

module.exports =() => {
	if ( typeof require !== "undefined" ) {
		require.extensions[".less"] = file => {};
	}


	return withLess( {
		lessLoaderOptions: {
			javascriptEnabled: true
			// modifyVars: themeVariables // make your antd custom effective
		}
	} );
	// webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
	//   if( !isServer ){
	//     config.optimization = {
	//       splitChunks: {
	//         chunks: "all",
	//         name: "vendors"
	//       }
	//     }
	//   }
	//   config.module.rules.push(
	//     {
	//       test: /\.less$/,
	//       use: [
	//         {
	//           loader: require.resolve( "less-loader" ),
	//           options: {
	//             // modifyVars: themeVariables,
	//             javascriptEnabled: true
	//           }
	//         }
	//       ]
	//     }
	//   )
	//   return config
	// }
};