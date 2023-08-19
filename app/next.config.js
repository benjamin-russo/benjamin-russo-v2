const nextConfig = {
  webpackDevMiddleware: (config) => {
    // Watch for changes in the /app folder inside the container
    config.watchOptions = {
      poll: 1000, // Check for changes every 1 second
      ignored: /node_modules/,
    };
    return config;
  },
};

module.exports = nextConfig;
