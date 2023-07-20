module.exports = {
    preset: '@vue/cli-plugin-unit-jest',
    collectCoverage: true,
    collectCoverageFrom: ['src/components/**/*.{vue,js}'],
    coverageProvider: "v8",
    coverageDirectory: "coverageReport",
    coverageReporters: ['html','clover', 'json', 'lcov', ['text', {skipFull: false}]],
    coveragePathIgnorePatterns:[],
    transformIgnorePatterns: [
    ]
  }
  