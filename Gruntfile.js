'use strict'

var ngrok = require('ngrok');

module.exports = function(grunt) {

  // Load grunt tasks
  require('load-grunt-tasks')(grunt);

  // Grunt configuration
  grunt.initConfig({
    pagespeed: {
      options: {
        nokey: true,
        locale: "en_GB",
        threshold: 40
      },
      local: {
        options: {
          strategy: "desktop"
        }
      },
      mobile: {
        options: {
          strategy: "mobile"
        }
      }
    },

    exec: {
      resize_images: {
        cmd: function() {
          var command = 'gm convert ';
          var resize_medium = '-resize 720x540 ';
          var resize_small = '-resize 100x75 ';

          var commands = [];

          // volt.jpg is resized proportionately.
          commands.push(command +
            resize_medium + ' views/images_src/pizzeria.jpg views/images/pizzeria_medium.jpg');
          commands.push(command +
            resize_small + ' views/images_src/pizzeria.jpg views/images/pizzeria_small.jpg');

          return commands.join(' && ');
        }
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['views/images'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['views/images']
        },
      },
    },

    /* Copy the "fixed" images that don't go through processing into the images/directory */
    copy: {
      dev: {
        files: [{
          expand: true,
          cwd: 'views/images_src',
          src: 'pizza.png',
          dest: 'views/images/'
        }]
      },
    }
  });

  // Register customer task for ngrok
  grunt.registerTask('psi-ngrok', 'Run pagespeed with ngrok', function() {
    var done = this.async();
    var port = 9292;

    ngrok.connect(port, function(err, url) {
      if (err !== null) {
        grunt.fail.fatal(err);
        return done();
      }
      grunt.config.set('pagespeed.options.url', url);
      grunt.task.run('pagespeed');
      done();
    });
  });

  // Register default tasks
  grunt.loadNpmTasks('grunt-exec');
  grunt.registerTask('resize-images', ['exec:resize_images']);
  grunt.registerTask('default', ['clean', 'copy', 'resize-images', 'psi-ngrok']);
}
