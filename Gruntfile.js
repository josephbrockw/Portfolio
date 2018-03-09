module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    gpkg: grunt.file.readJSON('package.json'),

    uglify: {
      build: {
        src: 'js/custom/*.js', // input
        dest: 'js/build/app.min.js' // output
      }
    },

    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'compressed'
        },
        files: {                         // Dictionary of files
          'CSS/build/main.css': 'CSS/scss/init.scss'       // 'destination': 'source'
        }
      }
    },

    watch: {
      scripts: {
        files: ['JS/custom/*.js'],
        tasks: ['uglify'],
        options: {
          spawn: false,
        },
      },

      sass: {
        files: 'CSS/scss//*.scss',
        tasks: ['sass'],
        options: {
          livereload: true,
        },
      }
    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  //grunt.registerTask('default', ['uglify', 'sass']);
  grunt.registerTask('default', ['watch']);
};
