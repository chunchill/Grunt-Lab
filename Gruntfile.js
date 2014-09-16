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
        },

        watch: {
            scripts: {
                files: ['src/lib/**/*.js'],
                tasks: ['jshint:all']
            }
        }
    });

    grunt.event.on('watch', function(action, filepath, target) {
        grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
    });

    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-jshint');
     grunt.loadNpmTasks('grunt-contrib-watch');
    //grunt.registerTask('default', ['imagemin']);
    //grunt.registerTask('default', ['less']);
    //grunt.registerTask('default', ['jshint']);
    grunt.registerTask('default', ['watch']);
};