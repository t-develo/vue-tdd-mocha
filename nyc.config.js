module.exports = {
    include: ['src/**/*.js', 'src/**/*.vue'],
    extension: ['.js', '.vue'],
    exclude: ['**/*.spec.js'],
    instrument: false,
    sourceMap: false,
    reporter: ['text', 'html', 'lcov'],
};
