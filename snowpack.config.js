/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    sw: '/',
    src: '/dist'
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    ["snowpack-plugin-baseurl-handler", {
      exts: ['.html', '.js', '.jsx', '.css', '.json'],
      baseUrl: "/afs-feladatok"
    }]
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    {src: "/assets/offline.html", dest: "/assets/offline.html"},
    {match: "routes", src: ".*", dest: "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
  },
};
