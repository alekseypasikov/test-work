module.exports = {
    // Настройки для разработки
    dev: {
        options: {
            outputStyle: 'nested',
            sourceMap: true
        },
        files: [{
            expand: true,
            cwd: 'sass',
            src: ['*.sass'],
            dest: 'dist/css',
            ext: '.min.css'
        }]
    },
    // Настройки для продакшна
    prod: {
        options: {
            outputStyle: 'compressed',
            sourceMap: false
        },
        files: [{
            expand: true,
            cwd: 'sass',
            src: ['*.sass'],
            dest: 'dist/css',
            ext: '.min.css'
        }]
    }
};