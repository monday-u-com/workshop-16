# Welcome to the workshop 16

## Topic
Today we are going to build real test case for the youtube website using Cypress!

##Preps
1. execute ```npm install```
2. execute ```npm run cypress:open```
3. in the opened cypress window run the example test '1-getting-started' which is provided by Cypress
4. Open "cypress/integration/2-youtube-exercise" folder, here is our empty test cases are
5. Implement these test cases and see how youtube app is getting tested by you!
   1. page was loaded and can see youtube logo and at least one video in the list
   2. search for "Harry Potter vs star wars" movie with 33M views
   3. open video and check that it has author block and views are more than 33M
   4. BONUS: click share button and check that share url is https://youtu.be/9N5KyjM5v0c
   5. BONUS: Come up with at least 3 problems that you see in the tests you wrote and how would you solve them