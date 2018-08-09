module.exports = function(grunt) {
  grunt.initConfig({
    svgstore: {
      options: {
        prefix: 'icon-', // This will prefix each ID
        formatting: {
          indent_size: 2,
          end_with_newline: true,
        },
        emptyFills: true, // Remove fill colors so it can be set by the components.
      },
      default: {
        files: {
          'src/static/iconsprite.svg': ['src/globals/icons/*.svg'],
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
    dom_munger: {
      options: {
        update: { selector: 'path', attribute: 'fill', value: 'inherit' },
      },
      files: {
        src: 'src/static/iconsprite.svg',
      },
    },
  });

  grunt.loadNpmTasks('grunt-svgstore');
  grunt.loadNpmTasks('grunt-dom-munger');

  grunt.registerTask('svg-demo-page', ['svgstore:demo']);

  grunt.registerTask('default', ['svgstore:default', 'dom_munger']);
};
