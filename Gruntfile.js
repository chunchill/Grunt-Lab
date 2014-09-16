module.exports = function(grunt) {
    var mozjpeg = require('imagemin-mozjpeg');

    grunt.initConfig({

        //ImageMin Tasks
        imagemin: { // Task
            dynamic: { // Another target
                files: [{
                    expand: true, // Enable dynamic expansion
                    cwd: 'src/img/', // Src matches are relative to this path
                    src: ['**/*.{png,jpg,gif}'], // Actual patterns to match
                    dest: 'dist/img/' // Destination path prefix
                }]
            }
        },
        //LESS tasks
        less: {
            development: {
                options: {
                    paths: ["dist/css"]
                },
                files: {
                    "dist/css/bootstrap.css": "src/less/bootstrap.less"
                }
            }
        },
        //Jshint
        jshint: {
            all: ['Gruntfile.js', 'src/lib/**/*.js']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    //grunt.registerTask('default', ['imagemin']);
    //grunt.registerTask('default', ['less']);
    grunt.registerTask('default', ['jshint']);
};