# week4.day1.firebase

## Instructions
1. Use command line to create a new project folder called “firebase”
   - Create your typical website directory layout, including a “index.html” and “createBlog.html” file
2. You will be creating your own blogging website, where users can create and view blogs
3. Specifications:
   - Both web pages should be responsive and properly viewable on a mobile device
     - The target device is Galaxy S5 (360x640)
   - “index.html” should simply display the contents of all of the blogs in your database
   - “createBlog.html” should contain a form the user can fill in and submit to add a blog to your firebase database
     - Hint: it’s usually a good idea to redirect the user to the newly made post at “index.html” - it would be nice to have the newest blogs appear at the top!
   - The website must be properly hosted on GitHub
4. Your website is dependent on the database. Before you even begin wireframing the site...layout what your database should look like (this is also known as the schema)!
   - What pieces of information are necessary to make a simple blog (title, content, username, etc)?
   - What pieces of information are nice to have or are part of something unique about your blogging site?
   - Keep in mind, once the database is set up, you really shouldn’t be changing its schema.
5. Wireframe both websites and break down what each group member is responsible for
   - You do NOT need your instructor's approval here, however, it’s beneficial to you to ask for their advice and input.
6. We’re almost done near the end of the SI! So for this particular project, I want to see GREAT looking projects that are also functional.
7. Enjoy creating!

## Extra Credit
- Give the user the ability to also update and destroy blog posts
   - You can learn more about CRUD here - https://www.codecademy.com/articles/what-is-crud
- On the “index.html” page, allow the user to filter blogs by a keyword
   - Try to use string matching with **regular expressions** to do this : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match

## Helpful Resources
- [Firebase API Documentation](https://firebase.google.com/docs/reference/js/firebase.database)
