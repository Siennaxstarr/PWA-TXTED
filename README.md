Text Editor Web Application

User Story
As a developer, I want to create notes or code snippets with or without an internet connection so that I can reliably retrieve them for later use.

Acceptance Criteria
When I open my application in my editor, I should see a client-server folder structure.
When I run npm run start from the root directory, my application should start up the backend and serve the client.
When I run the text editor application from my terminal, my JavaScript files should be bundled using webpack.
When I run my webpack plugins, I should have a generated HTML file, service worker, and a manifest file.
When I use next-gen JavaScript in my application, the text editor should still function in the browser without errors.
When I open the text editor, IndexedDB should immediately create a database storage.
When I enter content and subsequently click off of the DOM window, the content in the text editor should be saved with IndexedDB.
When I reopen the text editor after closing it, the content in the text editor should be retrieved from IndexedDB.
When I click on the Install button, I should download my web application as an icon on my desktop.
When I load my web application, I should have a registered service worker using workbox.
When I register a service worker, my static assets should be precached upon loading along with subsequent pages and static assets.
When I deploy to Render, I should have proper build scripts for a webpack application.

Features
Client-server folder structure.
Bundling of JavaScript files using webpack.
Generation of HTML file, service worker, and manifest file.
Support for next-gen JavaScript.
Immediate creation of IndexedDB storage upon opening the text editor.
Content saving and retrieval using IndexedDB.
Installable as a desktop application.
Registered service worker for offline capabilities.
Precaching of static assets.
Proper build scripts for deployment to Render.


Technologies Used
JavaScript
IndexedDB
Webpack
Workbox
