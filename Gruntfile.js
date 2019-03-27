const tempDir = 'grunt-temp/';

module.exports = function(grunt) {
  grunt.initConfig({
    clean: {
      src: [tempDir],
    },
    svgmin: {
      options: {
        plugins: [
          {
            removeComments: true,
          },
        ],
      },
      default: {
        files: [
          {
            expand: true,
            src: ['src/globals/icons/*.svg'],
            flatten: true,
            dest: tempDir,
          },
        ],
      },
    },
    svgstore: {
      options: {
        prefix: 'icon-', // This will prefix each ID
        symbol: {
          preserveAspectRatio: 'xMidYMid',
        },
        formatting: {
          indent_size: 2,
          end_with_newline: true,
        },
      },
      default: {
        files: {
          'src/static/iconsprite.svg': [`${tempDir}*.svg`],
        },
      },
      demo: {
        options: {
          includedemo: true, // Create html page with all icons
        },
        files: {
          'src/static/iconsprite.svg': ['src/globals/icons/*.svg'],
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-svgmin');
  grunt.loadNpmTasks('grunt-svgstore');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('svg-demo-page', ['svgstore:demo', 'default']);

  grunt.registerTask('default', ['svgmin', 'svgstore:default', 'clean']);
};
