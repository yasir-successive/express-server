# <p align="center">MERN
###  Introduction</p>
The MERN stack consists of MongoDB, Express, React / Redux, and Node.js. Given the popularity of React on the frontend and of Node.js on the backend, the MERN stack is one of the most popular stack of technologies for building a modern single-page application.

In this post, we will build a todo application that utilizes a RESTful api which we will also build in the course of this tutorial. I assume you have little knowledge about javascript(es6), reactjs and nodejs. Since we will be using node and npm, you need to install them to your computer, you should also have your favorite code editor already installed.
## Mongo
MongoDB is an open-source document database that provides high performance, high availability, and automatic scaling.
The advantages of using documents are:

+ Documents (i.e. objects) correspond to native data types in many programming languages.
+ Embedded documents and arrays reduce need for expensive joins.
+ Dynamic schema supports fluent polymorphism.
### Key Features
##### High Performance
MongoDB provides high performance data persistence. In particular,

+ Support for embedded data models reduces I/O activity on database system.
+ Indexes support faster queries and can include keys from embedded documents and arrays.
##### Rich Query Language
MongoDB supports a rich query language to support read and write operations (CRUD) as well as:

+ Data Aggregation
+ Text Search and Geospatial Queries.
##### Horizontal Scalability
MongoDB provides horizontal scalability as part of its core functionality:

+ Sharding distributes data across a cluster of machines.
+ Starting in 3.4, MongoDB supports creating zones of data based on the shard key. In a balanced cluster, MongoDB directs reads and writes covered by a zone only to those shards inside the zone. See the Zones manual page for more information.
### Express
ExpressJS is a web application framework that provides you with a simple API to build
websites, web apps and back ends. With ExpressJS, you need not worry about low level
protocols, processes, etc
#####Why Express?
Unlike its competitors like Rails and Django, which have an opinionated way of building
applications, Express has no "best way" to do something. It is very flexible and pluggable.
#####How theApp Works?
The first line imports Express in our file, we have access to it through the variable Express.
We use it to create an application and assign it to var app.
#####app.get(route, callback)
This function tells what to do when a get request at the given route is called. The callback
function has 2 parameters, request(req) and response(res). The request object(req)
represents the HTTP request and has properties for the request query string, parameters,
body, HTTP headers, etc. Similarly, the response object represents the HTTP response that
the Express app sends when it receives an HTTP request.
#####res.send()
This function takes an object as input and it sends this to the requesting client. Here we are
sending the string "Hello World!".
#####app.listen(port, [host], [backlog], [callback]])
This function binds and listens for connections on the specified host and port. Port is the only
required parameter here.

### REACT
React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.

People come to React from different backgrounds and with different learning styles. Whether you prefer a more theoretical or a practical approach, we hope you’ll find this section helpful.

If you prefer to learn by doing, start with our practical tutorial.
If you prefer to learn concepts step by step, start with our guide to main concepts.
Like any unfamiliar technology, React does have a learning curve. With practice and some patience, you will get the hang of it.
### NODE.JS
The modern web application has really come a long way over the years with the introduction of many popular frameworks such as bootstrap, Angular JS, etc. All of these frameworks are based on the popular JavaScript framework.

But when it came to developing server based applications there was just kind of a void, and this is where Node.js came into the picture.

Node.js is also based on the JavaScript framework, but it is used for developing server-based applications. While going through the entire tutorial, we will look into Node.js in detail and how we can use it to develop server based applications.








