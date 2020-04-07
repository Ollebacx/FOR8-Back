# FOR8 - Backend

## Introduction

## Directory Structure

## Setup

### Install & Update Dependencies
The first time you start the server you may want to make sure you have the dependencies installed, in the right versions. To do so, just go to the terminal and type:

```
$ npm install
```
### Install StandardJS Linter
[StandardJS](https://standardjs.com/) is a JavaScript style guide, linter, and formatter.

#### VSCode Extension
You may want to install [VSCode Extension](https://marketplace.visualstudio.com/items?itemName=chenxsan.vscode-standardjs)

> VSCODE `SETTINGS.JSON`:
```
  "javascript.validate.enable": false,
  "standard.enable": true,
  "standard.run": "onType",
  "standard.autoFixOnSave": false,
  "standard.usePackageJson": true
```

*Make sure you don't have duplicate rules!*

### Environment Variables

The next setup step is to create an `Environment Variable` file `.env` in this folder. We have provided a `.env.example` for you with a sample configuration for both **development** and **production** environments.

Make your own copy_
```
$ cp .env.example .env
```

And customize the sample params to your needs

- mongoURL: "mongodb://localhost/",
- mongoDBName: 'example',
- apiKeys : "fakeapikey",
- port : 5000

## Start local Server

You can start your server anytime with:

```
$ npm run dev
```

You should see something like:
```
Starting up http-server, serving ./
Available on:
  http://127.0.0.1:8080
  http://192.168.43.142:8080
Hit CTRL-C to stop the server
```
## USBAT - User Should Be Able To…
---
- Create an account by adding email, password & name
- Login using email & password
- Modify personal info
---
- See a workout list to do
- See the workout exercises
- Add a workout for today
- Start / Stop / Reset the workout
- See single exercises
---

### USBAT - Crazy stuffs:
Should be awesome that an user could be able to...

- Create personal workouts by adding single exercices


## Data Model

### **User**

| KEY       | TYPE     | 
| --------- | -------- | 
| _id       | ObjectId | 
| username  | String   | 
| password  | String   | 
| email     | String   | 

### **Exercise**

| KEY           | TYPE     | 
| ------------- | -------- | 
| _id           | ObjectId | 
| name          | String   | 
| description   | Number   | 
| category      | String   | 
| photoURL      | String   | 

### **Workout_default**

| KEY            | TYPE                   |
| -------------- | ---------------------- |
| _id            | ObjectId               |
| name           | String                 |
| session        | Array [ Exercise._id ] |
| photoURL       | String                 |

### **Workout**

| KEY          | TYPE                    | 
| ------------ | ----------------------- | 
| _id          | ObjectId                | 
| user         | user._id                | 
| rounds       | Num                     | 
| status       | Boolean                 | 
| createdAt    | Date                    | 
| doneAt       | Date                    | 
| name         | String                  | 
| session      | Array [ Exercise._id ]  | 


## Api routes

Please note that all routes in this API should be called with the `/api` prefix before the endpoint:

```
POST http://localhost:3000/api/auth/signup
```
##### NOTE:  All these endpoints below require a `token` to be sent within the HTTP Headers.

### Authentication endpoints

METHOD | URL                | What does it do
-------|--------------------|---------------------------------
POST   | `auth/signup`      | Create a new account
POST   | `auth/login`       | Authenticates a user


### User endpoints

GET    | `me/profile`            | Get info from User
PUT    | `me/profile`            | Modify User info
DELETE | `me/profile`            | Delete user account


### Exercise endpoints

METHOD | URL                    | What does it do
-------|------------------------|---------------------------------
GET    | `exercises`            | Get All Exercise
GET    | `exercises/:exerciseId`| Get One Exercise


### Workout_default endpoints

METHOD | URL                    | What does it do
-------|------------------------|---------------------------------
GET    | `workouts`             | Get All Workouts
GET    | `workouts/:workoutId`  | Get One Workout


### Workout endpoints

METHOD | URL                     | What does it do
-------|-------------------------|---------------------------------
GET    | `me/workouts`           | Get User's Workouts (unstarted/done)
GET    | `me/workouts/:workoutId`| Return my Workout

POST   | `me/workouts/:workoutId`| Add Workout_default to User_workout (unstarted)
POST   | `me/workout/create`     | Add peronal Workout to User_workout (unstarted)

PUT    | `me/workouts/:workoutId`| Modify User's Workout (Done, Date)
DELETE | `me/workouts/:workoutId`| Delete User's Workout from User_workout



Happy coding!
