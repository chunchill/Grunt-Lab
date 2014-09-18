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
        //Jshint tasks
        jshint: {
            all: ['Gruntfile.js', 'src/lib/**/*.js']
        },
        //Watch tasks
        watch: {
            scripts: {
                files: ['src/lib/**/*.js', 'www/*.html'],
                tasks: ['jshint:all'],
                options: {
                    livereload: true,
                }
            }
        },

        //Concat tasks
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['src/lib/app/module1.js', 'src/lib/app/module2.js'],
                dest: 'dist/lib/module.js'
            }
        },

        //Connect tasks
        connect: {
            server: {
                options: {
                    //port: 9001,
                    base: 'www',
                    keepalive: true,
                    livereload: true,
                    /*
                    middleware: [

                        function myMiddleware(req, res, next) {
                            res.end('Hello, Jasper!');
                        }
                    ],*/
                    open: {
                        target: 'http://localhost:8000/index.html', // target url to open
                        //appName: 'index.html', // name of the app that opens, ie: open, start, xdg-open
                        callback: function() {

                        } // called when the app has opened
                    }
                }
            }
        },

        //Clean up tasks
        clean: {
            build: {
                src: ["cleanupFolder/*.*"]
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
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-clean');

    //grunt.registerTask('default', ['imagemin']);
    //grunt.registerTask('default', ['less']);
    //grunt.registerTask('default', ['jshint']);
    //grunt.registerTask('default', ['watch']);
    //grunt.registerTask('default', ['concat']);
    //grunt.registerTask('default', ['watch']);
    grunt.registerTask('default', ['clean']);
};