# mongoHW# All the News That's Fit to Scrape
 
 
 Overview:

In the late 90s and early 2000s, developers began to explore database options that allowed their web applications to handle unstructured data to meet the growing and ever-changing demands of users and address the limitations of the relational model. While these alternative databases existed for decades prior, they didn’t receive the label NoSQL until this time period.  

The structure of a NoSQL database is something other than a table. There are several different types of NoSQL databases, such as key-value and graph. MongoDB, a document-oriented NoSQL database. MongoDB documents correspond to a row, or record, in SQL, but unlike rows, documents are analogous to JSON objects. You can see why MongoDB is a popular choice for Node.js developers! 

Rather than object-relational mapping, we will implement object-_document_ mapping, or ODM, with Mongoose.js. 

Created a web app that lets users view and leave comments on the latest news. Flexing our Mongoose and Cheerio muscles to scrape news from another site.('The New York Times')
Whenever a user visits the site, the app will scrape stories from a news outlet and display them for the user. Each scraped article will be saved to a database. The app will scrape and display the following information for each article:

     * Headline - the title of the article

     * Summary - a short summary of the article

     * URL - the url to the original article

    
   Users will be able to leave comments on the articles displayed and revisit them later. The comments are saved to the database as well and associated with their articles. Users can delete comments left on articles. All stored comments are visible to every user.




 Ran `npm init`. and installed and saved these npm packages:

   1. express

   2. express-handlebars

   3. mongoose

   4. cheerio

   5. axios




