class MyExampleWebpackPlugin {
    apply(compiler) {
        compiler.hooks.emit.tapAsync(
            'MyExampleWebpackPlugin',
            (compilation) => {
                console.log('Мы в вебпаке');
                console.log(compilation.getAssets())
            }
        );

        compiler.hooks.thisCompilation.tap('MyExampleWebpackPlugin',() => {console.log('thisCompilation')})

        compiler.hooks.environment.tap('MyExampleWebpackPlugin', () => {console.log('environment phase' )})
    }
  }

module.exports = {MyExampleWebpackPlugin};