module.exports = function(grunt){

    grunt.initConfig({
    	transport :  {
    		dest : {
	    		options : {
	    			paths : ["./app/scripts"]
	    		},
	            files: [{
	                cwd: './app/scripts',
	                src: '**/*.js',
	                expand : true,
	                dest: 'tmp'
	            }]
	        } 
    	},
    	concat : {
    		dest : {
    			options : {
    				paths : ["./tmp"],
    				include : "all"
    			},
    			files : [{
    				cwd : './tmp',
    				src : "page/*.js",
    				expand : true,
    				dest : "dist"
    			}]
    		}
    	},
    	clean : {
    		dest : ["tmp"]
    	},
    	uglify : {
		    options: {
		      mangle: {
		        except: ['require', 'exports',"module"]
		      }
		    },
		    dest: {
		      files: {
		        'dist/page/example1.js': ['dist/page/example1.js']
		      }
		    }
    	}
    });

    grunt.loadNpmTasks('grunt-cmd-transport');
    grunt.loadNpmTasks('grunt-cmd-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.registerTask('build', ['transport' 
    	, 'concat'
    	, 'uglify'
    	, 'clean'
    ]);
    
}