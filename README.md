# News Explorer Backend

This is the back end for the News Explorer application. It's a server responsible for handling http requests from my-app in final_front-end as well manipulating a database.

# Domain Name
https://NewsExplorer.twilightparadox.com
https://www.NewsExplorer.twilightparadox.com

# Technologies Used

Here are the technologies that are used to make up the application:

This is a Node.js app using Express.js framework
Mongoose is used to interact with a MongoDB database
pm2 process manager is used to keep app running continuously
nginx for port configuration/redirecting requests
Express.js is responsible for creating the sever, creating routes, listening for http requests, & then routing those requests appropriately.

Database & Mapper
MongoDB is used in conjunction with a mapper called Mongoose that's used to interact with MongoDB since Javascript is incapable of interacting with documents on its own. In this app Mongoose is used to define the shape of the documents that get stored in MongoDB via Mongoose.Schema(). Models in Mongoose are used to create, cast, store, delete, & query data.

Validation
Validator.js is used to verify that certain properties in the schemas, avatar & imageUrl, are valid URLs. A 400 status code is sent if either of the two aren't legitimate with the message 'You must enter a valid URL'

Hot Reload
SE Project Express uses nodemon to enable hot reloading, or the ability for the server to refresh itself whenever source code is changed.

## Running the Project

`npm run start` — to launch the server

`npm run dev` — to launch the server with the hot reload feature
