// vue.config.js
module.exports = {
  // Set publicPath to handle GitHub Pages deployment
  // In development, this will be '/'
  // In production (when deployed to GitHub Pages), this will be '/[repository-name]/'
  publicPath: process.env.NODE_ENV === 'production'
    ? '/portfolio/' // Replace 'portfolio' with your GitHub repository name
    : '/',
  
  // Output directory for build
  outputDir: 'dist',
  
  // Use modern mode for better browser compatibility
  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    }
  },
  
  // CSS configuration
  css: {
    sourceMap: process.env.NODE_ENV !== 'production',
    loaderOptions: {
      css: {
        // Enable CSS Modules
        modules: {
          auto: true
        }
      }
    }
  }
}

