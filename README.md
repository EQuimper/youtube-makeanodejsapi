# Make a NodeJS rest api

## Why do this tutorial

I was searching a long time ago about how to make my own boilerplate for nodejs. I hate when I take something from someone else and don't know what happen.

I create this tutorial for helping people to make their own rest api and maybe use it as your boilerplate

## Features

This rest api gonna be for a Medium like website. This is a simple blog place where people can follow author and create a post. People can like the post and get notification when a user they follow create a new one.

- Authentication local + jwt
- User can create a post
- User can delete is own post and update it
- User can follow an other one
- User get notification on following new post
- User can like a post
- User can see all the post they like

## Tech use

I use the latest feature of javascript. ES6 + ES7, we compile with the help of babel and webpack v2.

---

### Part 1, Setup the tools

#### Video

[Link](https://youtu.be/UL66bwInJHY)

#### To add

- editorconfig
- express
- eslint
- babel
- webpack 2

---

### Part 2, Setup of the middlewares and mongodb

#### Video

[Link](https://youtu.be/PuY3w1VY0z8)

- Add mongoose, body-parser, morgan, compression, helmet
- Setup config folder
- Setup constants

---

### Part 3, Users creation

#### Video

[Link](https://youtu.be/i5yb_HRWbeg)

- Create the user model, controller and routes
- Install robomongo, postman
- Add joi for validation with express-validation

---

### Part 4, Add bcrypt and passport

#### Video

[Link](https://youtu.be/iBnLWrw3NpY)

- Add rimraf and clean dist on webpack build
- Crypt the user password
- Create the localStrategy with passport
- Can log a user

---

### Part 5, Add passport-jwt and send less information about the user

#### Video

[Link](https://youtu.be/fVq3VFjASqY)

- Create a secret password for the jwt
- Add passport-jwt and create the strategy
- Add jsonswebtoken library
- How can I send less info to the front end ? Like I don't want to send the password

---

### Part 6, Creation of a post

#### Video

[Link](https://youtu.be/3zfPrFy9ZQY)

- Create the post model
- Add the user id as the author
- Resolve error I did with joi

---

### Part 7, Get a post by his id

#### Video

[Link](https://youtu.be/jOtsq343AgM)

- Create the controller, route
- Add http-status library
- Populate User
- User toAuthJSON vs toJSON

---

### Part 8, Get all posts with a list statics method

#### Video

[Link](https://youtu.be/PKkaVz6aMws)

- Talk about the repos
- Create the controller
- Create a list statics method on post

---

### Part 9, Update a post if author of it

#### Video

[Link](https://youtu.be/GUlbkmxhg_k)

- Create the route and controller
- Create a validation field

---

### Part 10, Delete a post if author of it

#### Video

[Link](https://youtu.be/0lrzX_nWvAA)

- Create the route and controller
- Show the authorization work
- Add prettier and show the magic :)

---

### Part 11, User can favorite a post if auth + increment the favoriteCount

#### Video

[Link](https://youtu.be/VeNWdciXVQ0)

- Create model methods for both user and post
- Add the increment/decrement statics on post

### Part 12, Send if favorite or not with post for help the life of the front-end

#### Video

[Link](https://youtu.be/tuftcAdw8yc)

- Make route auth
- Make user method
- Make post controller work with the favorite