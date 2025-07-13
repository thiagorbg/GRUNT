module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: { /*seção onde o desenvolvedor irá atuar*/
                files: {
                    'dev/styles/main.css': 'src/styles/main.less'
                }
            },
            production: {  /*seção final onde o usuario ira usar*/
                options: {
                    compress: true,
                },
                files:{
                    'dist/styles/main.css':'src/styles/**/*.less'
                }
            }
        },
        watch: { /*observa as alteraçãoes onde eu faço sem precisar compilar no prompt*/
            less: {
                files: ['src/styles/**/*.less'],
                tasks: ['less:development']
            }
        },
        uglify: {
            target: {
                files: {
                    'dist/scripts/main.min.js' : 'src/scripts/main.js'
                }
            }
        }
    })
    
    grunt.loadNpmTasks('grunt-contrib-less'); // Onde eu chamo o plugins
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    

    // Register tasks
    grunt.registerTask('default', ['watch']); // onde eu faço as tarefas
    grunt.registerTask('build', ['less:production', 'uglify']);
}


