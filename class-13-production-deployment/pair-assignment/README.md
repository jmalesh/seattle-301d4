# Pair Assignment for Class 13 -  Production Deployment

Ready to share what you've made with the world? Yes!

Then you need to push your code to a web server accessible to the whole Internet. This is your "production environment".

We'll be using Heroku as our production server. Heroku is a "Platform as a Service": your code is plugged in to pre-configured servers, which are started up for the world to access.

## User Stories: MVP
 1. As a site owner, I want my site running on a robust hosting platform, so that I don't have to hire a sysadmin.
  - Create a new Heroku app for deployment.
 1. As a developer, I want my app to run in a development environment that matches production, so that I can reduce bugs related to infrastructure surprises.
  - Start your app with `node server.js`
  - TODO: Refactor your AJAX request to proxy your GitHub API calls through the server
 1. As a developer, I want my secret tokens accessed only through environment variables, so that I can keep them secure.
  - Set the proper env vars on your local system.

## User Stories: Stretch Goals
 1. As a site owner, I want [blog.my-own-domain-name.io] hooked up to my Heroku app, so that I don't have to explain to people how to spell "myblog.herokuapp.com" over the phone.

## Technical Requirements and Grading Rubric
 - Ensure your code passes ESLint
 - DO NOT create your Heroku app with a default name. If you do accidentally, rename it. Or blow it away, and start again.
 - Link to your live site in your README, for whichever repo you deploy.
