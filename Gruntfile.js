/*global module:false*/
// files:["site/**/*.js", "site/**/*.css", "site/**/*.html"],
// tasks: ["default"],
// options: {
// 	spawn: false,
//  livereload: 35729
//}
module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		siteDir: "app", 
		watch: {
			livereload:{
				options:{
					livereload:"<%= connect.options.livereload %>"
				},
				files:[
					"<%=siteDir %>/**/*.js",
					"<%=siteDir %>/**/*.css",
					"<%=siteDir %>/**/*.html",
					"<%=siteDir %>/**/*.{png,jpg,jpeg,gif,webp,svg}"
				]
			}
		},
		connect:{
			options:{
				port:3000,
				hostname:"localhost",
				livereload: 35729
			},
			server:{
				options:{
					base:'<%=siteDir %>'
				}
			},
			livereload:{
				options:{
					base:'<%=siteDir %>',
					open:true
				}
			}
		}
	});


	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.registerTask('default', [
		'connect:livereload',
		'watch'
	]);
};
