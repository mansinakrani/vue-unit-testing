module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  // transform: {
  //   "^.+\\.(js|jsx)?$": "babel-jest",
  // },
  // transformIgnorePatterns: ["/node_modules/(?!axios)"],
  // transform: {
  //   "^.+\\.vue$": "vue-jest",
  // }, => Guves ERROR :- Validation Error:

  //   Module vue-jest in the transform option was not found.
  //   <rootDir> is: /home/mansinakrani/Documents/unit testing/unit-testing-real-world-demo

  // Configuration Documentation:
  // https://jestjs.io/docs/configuration
  // moduleFileExtensions: ["js", "jsx", "json", "vue"],
  // transform: {
  //   "^.+\\.vue$": "vue-jest",
  //   ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
  //     "jest-transform-stub",
  //   "^.+\\.(js|jsx)?$": "babel-jest",
  // },
  // moduleNameMapper: {
  //   "^@/(.*)$": "<rootDir>/src/$1",
  // },
  // snapshotSerializers: ["jest-serializer-vue"],
  // testMatch: [
  //   "<rootDir>/(tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))",
  // ],
  // transformIgnorePatterns: ["<rootDir>/node_modules/"],
};
