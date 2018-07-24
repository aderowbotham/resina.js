var closurePath = "closure_compiler";  // must match local path of PARENT directory of 'build' folder, which contains the compiler.jar file

module.exports = function(grunt) {
  // Do grunt-related things in here

  // load all grunt tasks
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

  grunt.loadNpmTasks("grunt-closure-compiler");

  grunt.initConfig({

    "closure-compiler": {
      frontend: {
        closurePath: closurePath,
        js: [ "resina.js" ],
        jsOutputFile: "resina-min.js",
        maxBuffer: 500,
        noreport: true,
        options: {
          compilation_level: "SIMPLE_OPTIMIZATIONS"  // options are WHITESPACE_ONLY, SIMPLE_OPTIMIZATIONS, ADVANCED_OPTIMIZATIONS
          // language_in: "ECMASCRIPT5_STRICT"
        }
      }
    },

    watch: {
      /* watch and see if our javascript files change, or new packages are installed */
      js: {
        files: ["resina.js"],
        tasks: ["closure-compiler:frontend"]
      },

    }

  });

  // required default task
  grunt.registerTask("default", "watch");

};
