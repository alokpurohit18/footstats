const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  //access point 1 and its proxy for flask server
  app.use(
    "/data_scraping",
    createProxyMiddleware({
      target: "http://127.0.0.1:5000/",
    })
  );

  //access point 2 and its proxy for flask server
  app.use(
    "/player_details",
    createProxyMiddleware({
      target: "http://127.0.0.1:5000/",
    })
  );

  //access point 3 and its proxy for flask server
  //currently disabled for faster server response
  /*app.use(
    "/league_details",
    createProxyMiddleware({
      target: "http://127.0.0.1:5000/",
    })
  );*/

  //access point 4 and its proxy for flask server
  app.use(
    "/player_similarity_prediction",
    createProxyMiddleware({
      target: "http://127.0.0.1:5000/",
    })
  );
};
