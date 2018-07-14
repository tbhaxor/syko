module.exports = function (grunt) { // a grunt module
	grunt.loadNpmTasks("grunt-ts");  // grunt plugin to load as task

	// initial config for grunt
	grunt.initConfig({ // each property of this object corresponds to a task that grunt will perform
		ts: { // task for ts
			main: {
				src: ["**/ts/*.ts", "!node_modules/**"],  // argument that tsc takes and turn into JS
				dest: "js/", // the destinatin folder where our compiled JS will be saved
				root: "./",
				outDir: "js/"
			}

		}

	});

	// registring the grunt task
	grunt.registerTask("default", ["ts"]) // the array contains all the key of grunt.initConfig keys
}
