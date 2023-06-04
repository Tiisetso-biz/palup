# Palup App

## Introduction
Palup is a social media web application that can be used to socialise. It is intended for anyone who would like to socialise on the internet. Primary users for this web application is people who need to socialise. This web application, in essence, pushes the idea of socialisation. Palup originates from the phrasal verb 'pal up', now conjoined to become palup. Web applications similar to Palup is Facebook, or Twitter, etc. 

## Functional requirements

- User Registration: The web app should allow users to sign up and create an account.
- User Authentication: Users should be able to securely log in to their accounts.
- Post Creation: Users should be able to add new posts with details such as poster's name, description, profile picture (if any), likes  and comments.
- Post Deletion: Users should be able to delete posts they no longer need.
- Post Editing: Users should be able to modify the details of existing posts.
- Post Comment: Users should be able to comment on others' posts.
- Post Like: Users should have be able to like others' posts.

## Non-Functional Requirements:

- Security: The web app should implement appropriate security measures, such as encryption of user data and secure authentication.
- Performance: The app should be responsive and perform efficiently, even with a large number of posts and users.
- Usability: The user interface should be intuitive and easy to navigate. All functional requirements should be easy to perform and image paths should be handled approriately.
- Scalability: The app should be able to handle a growing number of users and posts without significant performance degradation.
- Accessibility: The web app should comply with accessibility standards, making it usable by people with disabilities. 
<br><br>


## Wireframe: 
<img src="./palup_wireframes.svg">
<br><br>

## User Stories:

- As a user, I want to sign up for an account, so I can access the Palup web app.
- As a user, I want to log in to my account securely, so I can manage my profile and see other people's posts.
- As a user, I want to add new posts with relevant details.
- As a user, I want to like and comment to posts just so there could be interaction in the web app.
- As a user, I want to easily edit and update existing posts when there are changes or new information.

<br>

---

## How to get the app up and running:
- Instructions to installation are as follows:
- This will install all the node_modules for backend and frontend and start the application, open terminal:

```bash
  cd client
  npm install
  npm start

  cd  ..
  npm install
  npm start
```
<br>

## To test the app:
```bash
  cd frontend
  npm test
```

## How to use the app:
Register and log into the app. From there, one make posts and add other users as friends, see their profile, etc. NB: Database has been fed some dummy data for demonstration purposes.

## To modify MongoDB URI:
 Update your environment variables and set the necessary database URI.
<br>

## To ensure security: 
- Helmet was used in the Express app.
- Bcrypt was used for password hashing.
<br>

## There were no API keys used in the app.
## There were no third-party APIs used in the app.
## How the app has been deployed: 

- Both client and server side deployed to https://render.com. They have been deployed separately because client side is Static pages and server side is Web services.
- Here's the link to the client: https://mern-palup-app.onrender.com/.
