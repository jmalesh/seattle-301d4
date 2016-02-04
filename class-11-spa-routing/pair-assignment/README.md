# Pair Assignment for Class 11 - Routing and Web Requests

At the heart of every web app is the Web Request-Response Cycle. Pay close attention to how your app is creating and responding to requests. With client-side routing and the History API, we can add a layer of abstraction on top of the traditional routing.

**Ensure you run the blog with `node server.js` from the `starter-code` directory, not the `live-server` command.**

The URLs that your app can respond to maps to your apps capabilities. Consider what public routes your app should have. Use page.js to expose those as navigable URLs. Then setup controllers to handle those URLs, all on the client side.

We are now building a true Single-Page App, so clicking links within the app should no longer start a whole new request to the web server. Work through these user stories to convert the blog to SPA-style.

See a [working deployed version](https://cf-mvc-blog--class11.aerobatic.io/) of the app as a target reference.

## User Stories: MVP
 1. As a developer, I want an articleController, so that I can group together actions related to the article resource.
  - Move the functionality from the last script tag in index.html into the articlesController.js file.
  - When the `/` route is requested, only the #articles section should be visible to the user.
 1. As a developer, I want a routing file, so that I have a central place to define what URLs my app can handle.
  - Look for the TODO items in `routes.js`. Use the `page.js` features to tell your app how to handle the `/` route and the `/about` route.
 1. As an reader, I want to view the article index, so that I can read all the articles.
  - Ensure that visiting the `/` route triggers the behavior of loading all the articles and initializing the index page view.
 1. As a reader, I want to view '/about', so that I can learn more about the brilliant dev who created this site.
  - Fill in the contents of `aboutController.js`, so the `#about` section is revealed when the about index action is triggered.
  - Ensure the function is linked to a route, so visitors to `/about` see your info, and not the blog posts.

## User Stories: Stretch goals
 1. As an admin, I want the url for my stats page to be part of my SPA, so that it works like the other "pages" of my app.
  - Where should the admin content go? You probably need to move a section out of admin.html into index.html.
  - Add a controller and a route so that `/admin` triggers the proper rendering of the stats section.


## Technical Requirements and Grading Rubric
 - Ensure your code passes ESLint.
 - Create a single place where your app's URLs are connected to actions to handle the URLs.
 - Encapsulate each behavior of your app within an appropriate layer of MVC abstraction.
