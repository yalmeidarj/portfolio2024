const withNextIntl = require("next-intl/plugin")();

module.exports = withNextIntl({
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  //     remotePatterns: [
  //       {
  //         protocol: 'https',
  //         hostname: 'avatars.githubusercontent.com', 
  //         port: "",
  //         path: '/.*',
  //       }
  //   ]
  // },

});
