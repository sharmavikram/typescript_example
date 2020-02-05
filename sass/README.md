1. How to install SASS
    npm install -g sass

2. How to compile sass
    sass e1.scss output.css
<br>
3. compile sass in watch mode
    sass e1.scss output.css --watch
<br>
4. Compile and compressed sass(removed space and new line)
    sass e1.scss output.css --watch --style compressed
<br>
5. Compile and watch css all folder 
    sass --watch sass:css
<br>
6. Remove source map
    sass --watch --no-source-map sass:css     