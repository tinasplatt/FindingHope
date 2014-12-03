module.exports = function(grunt) {
	// Project configuration.
	var siteDir = grunt.option("dir") || "app";
	console.log("siteDir: %s", siteDir);
	grunt.initConfig({
		siteDir: siteDir, 
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
