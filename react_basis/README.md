Working on react basis using the [source](https://metanit.com/web/react/1.1.php)

Until the [page](https://metanit.com/web/react/1.3.php)

If you want to add JSX-file in your project you should wrap your JSX-content into script-tag.
And define the type of content as '**text-babel**'.
However, it is necessary to include babel-compiler to your project.

If you want to include external JSX-file to your html-file you have to 
create web-server because babel uses AJAX-requests to read external files.
So, you have to run **npm init**. And run a simple web-server with command
**node app.js**.

But, it is not a good practice to include jsx-files to your root html-file.
So, we include 'main.js' file which will be created from jsx. How to create js-file from
current index.jsx. Use babel, of course. Let install babel-package to your application.
Copy package.json and run command `yarn`. Then, run command
`npx babel index.jsx --out-file main.js` to create js-file from index.jsx