# Product Feedback App

## 👋 Welcome!

Imagine you are starting out as a freelance full-stack developer. You've just been hired by your first new client: a startup that is building a new product. The startup is generically named _My Company_.

# 📝 ac-backend-product-feedback-app

## 📌 Project Description & Purpose

This project is `ac-backend-product-feedback-app`

## 🚀 Live Site

Check out the app: https://xaviers-product-feedback-app.netlify.app/

## ✨ Features with 🖼️ Screenshots

This is what you can do on the app:

You:

Can add feedback to the website an see your feedback

You can organize what you'd like to see on the website

You can see how many of the suggestions in a specific category is visible

You can cancel your suggestion before handing it in and go back to the home page if you change your mind

## 🛠️ Tech Stack

**Frontend**

- **Languages:** Javascript, CSS, HTML
- **Framework:** React JS
- **Deployment:** Netlify

**Server/API**

- **Languages:** JavaScript
- **Framework:** Express
- **Deployment:** Render

**Database**

- **Languages:** SQL
- **Deployment:** Neon, Postgress

## 🔹 API Documentation

These are the API endpoints I built:

1. /get-all-suggestions
2. /get-suggestions-by-category/:category
3. /add-one-suggestion
4. /count-all-categories
5. /count/:specific/catgeory

Learn more about the API endpoints here: _**[insert link to API documentation]**_

## 🗄️ Database Schema

Here’s the SQL I used to create my tables:

This makes a table for tthe suggestions to be saved!

```sql
CREATE TABLE suggestions (
  id SERIAL PRIMARY KEY,
  feedback_title VARCHAR NOT NULL,
  category VARCHAR NOT NULL,
  feedback_detail VARCHAR NOT NULL
);
```

## 💭 Reflections

What I learned:
Is that it's important to work on the things you find the most difficult in order to complete a project faster. BE is something that I'm less adpet with compared to CSS for me, which is why I worked on it first!

**What I'm proud of:**
I'm most proud of the fact that although it took me a about a little over a week to complete the BE for the Product Feedback App, I had completed it- even more so, I was able to complete the FE in 2 days!

**What challenged me:**

**Future ideas for how I'd continue building this project:**

1. Adding the suggestions users have
2. Adding an upvote button
3. Adding a sort feature

## 🙌 Credits & Shoutouts

- Thanks to **Instructor Arianna** for **API Bug-fixing and Guidance with the site instructions**
- Thanks to **TA Bakari** for **Trouble-shooting**
- Thanks to **TA Makeba** for **Trouble-shooting**
