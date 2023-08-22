module.exports = {
  coverageDirectory: "./artifacts/coverage",
  setupFilesAfterEnv: ["./config/setupTests.js"],
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["./artifacts/", "./node_modules/"],
};
