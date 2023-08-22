module.exports = {
  coverageDirectory: "./artifacts/coverage",
  setupFilesAfterEnv: ["./config/setupTests.js"],
  testEnvironment: "node",
  testPathIgnorePatterns: ["./artifacts/", "./node_modules/"],
};
