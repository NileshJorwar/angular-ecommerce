# Run angular app
- ng serve --open (opens on port 4200)
- ng serve (just runs app but you have to manually hit the endpoint)
- ng serve --port 4400 --open (runs app directly on browser on port 4400)
# E-Commerece Release 2.0
- Actual Shopping cart building using template 
- Needs to download the bootstrap npm install bootstrap and @fortawesome/fontawesome-free because template has bootstrap and fontawesome contents 
- Make sure to check the Node Modules and package.json for added dependencies
- Check angular.json for adding Global Styles, no need to manually reference styles in components and add the entries for the bootstrap and font awesome in angular.json
- To avoid Caching issues in index.html, use query unique query pattern 
``
<link rel="icon" type="image/x-icon" href="favicon.ico?v=2">
``