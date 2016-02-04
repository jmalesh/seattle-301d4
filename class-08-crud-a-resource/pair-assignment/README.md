# SQL and Resource CRUD

The starter code is all set for you and a pair to dive it, and get it working! Open up the [production deployment](https://cf-mvc-blog--class08.aerobatic.io/) of the working version, and play around in the console.

## User Stories: MVP
 - As a developer, I want article data to persist with SQL, so that I can store more, faster and have more query flexibility.

This means you'll want to be able to do full CRUD on articles in the database. You'll have to use SQL to make a table for articles (and clear out the table for troubleshooting), with a class-level method attached to the constructor function (because it does not apply to any single instance). Then teach each article instance how to write or update itself to the database, or delete itself, via instance methods (available for use as needed in the code).

Crucially, you'll need to trace through the app logic, and all those callback functions to determine WHEN is the right time to load data, or convert JSON.

Look through the TODOs, which signify areas of the code with varying levels of completeness, and focus initially on writing correct SQL. Practice in the web inspector.

There is no portfolio assignment.

## User Stories: Stretch Goals
 - As an author, I want to load an existing article in the editor with a special URL (editor/articles.html?id=42), so that I can see each component in a form.
 - As an author, I want to save and export my edits to existing articles, so that my changes persist.
 - As an author, I want an admin mode with an edit link on each article (index.html?admin=password).
 - As an author, I want to have draft posts, so that I can save my writing without publishing.

## Technical Requirements and Grading Rubric
 - Keep your code linted, as you work. Clean up all concerns before submitting.
 - Continue to make good use of SMACSS principles.
 - Utilize webSQL (the via provided `webDB` wrapper) to load and store articles information
 - Import the data into WebSQL from your JSON source.
