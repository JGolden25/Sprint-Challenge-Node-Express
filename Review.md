# Review Questions

## What is Node.js?
Node Js is a runtime environment that allows us to use JS on the backend

## What is Express?
Express is a framework that helps organize node web applications also its very light weight.

## Mention two parts of Express that you learned about this week.
We learned about middleware and routing/routers

## What is Middleware?
Middleware functions or software that has access to both homies req(uest) and res(ponse) as well as the next function. Next when invoked will execute the following middleware function.

## What is a Resource?
The app.resource() method returns a new Resource object, which can be used to further map pathnames, nest resources, and more.

## What can the API return to help clients know if a request was successful?
usually a 200(OK) 201(created) or 202(Accepted) are responses for successful requests

## How can we partition our application into sub-applications?
I've been using the function method as Luis described it, separating the different functions like middleware and routes into different files
## What is express.json() and why do we need it?
configures our server to use JSON