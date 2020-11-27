module.exports = function(grunt) {

grunt.initConfig({

 pkg: grunt.file.readJSON('package.json'),

 webfont: {

  icons: {

   src: 'icons/*.svg',

   dest: 'build/fonts',

   options: {

           engine: 'node',

           types: 'eot,woff2,woff,ttf,svg',

           font: 'my-web-font',

           hashes: false,

           autoHint: false,

           optimize: false,

           //round: 0,

           //fontHeight: 1024,

           normalize: true

   }

  }

 },

 svg2png: {

       // fallback: {

       //   options: {

       //     subdir: "png"

       //   },

       //   files: [{

       //     expand: true,

       //     cwd: "icons/",

       //     src: ["**/*.svg"]

       //   }]

       // },

       retina: {

         options: {

           scale: 2.0,

           subdir: "png_2x",

         },

         files: [{

           expand: true,

           cwd: "icons/",

           src: ["**/*.svg"]

         }]

       }

     }

});



grunt.loadNpmTasks('grunt-webfont');

grunt.loadNpmTasks('grunt-svg2png');



grunt.registerTask('default', ['webfont','svg2png']);



};



__
