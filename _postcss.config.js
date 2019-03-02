module.exports = {
  plugins:
    NODE_ENV === "development"
      ? {}
      : [require("autoprefixer"), require("cssnano")]
};
