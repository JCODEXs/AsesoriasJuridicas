const nodeExternals = require('webpack-node-externals');

module.exports = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = [
        {
          canvas: 'canvas', // Exclude canvas
        },
        nodeExternals({
          allowlist: [/\.(?!(?:jsx?|json)$).{1,5}$/i], // Only bundle files that are not .js, .jsx, or .json
        }),
      ];
    }

    // Add a rule for .node files
    config.module.rules.push({
      test: /\.node$/,
      use: 'node-loader',
    });

    return config;
  },
};
// const nodeExternals = require("webpack-node-externals");

// module.exports = {
//   reactStrictMode: true,
//   webpack: (config, { isServer }) => {
//     //     if (isServer) {
//     //       config.externals = [
//     //         {
//     //           canvas: 'canvas', // Exclude canvas
//     //           'next/font/google/target.css': 'next/font/google/target.css', // Exclude next/font
//     //         },
//     //         nodeExternals({
//     //           allowlist: [/\.(?!(?:jsx?|json)$).{1,5}$/i], // Only bundle files that are not .js, .jsx, or .json
//     //         }),
//     //       ];
//     //     }

//     // Add a rule for .node files
//     config.module.rules.push({
//       test: /\.node$/,
//       use: "node-loader", // or 'file-loader' if you prefer
//     });

    // Add a rule for .jsx files
    //     config.module.rules.push({
    //       test: /\.jsx?$/,
    //       exclude: /node_modules/,
    //       use: {
    //         loader: 'babel-loader',
    //         options: {
    //           presets: ['@babel/preset-react'],
    //         },
    //       },
    //     });

    return config;
  },
};
