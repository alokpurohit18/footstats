const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/data_scraping",
    createProxyMiddleware({
      target: "http://127.0.0.1:5000/",
    })
  );
  app.use(
    "/player_details",
    createProxyMiddleware({
      target: "http://127.0.0.1:5000/",
    })
  );
  app.use(
    "/league_details",
    createProxyMiddleware({
      target: "http://127.0.0.1:5000/",
    })
  );
};
