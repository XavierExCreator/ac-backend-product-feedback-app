# 📘 Product Feedback API Documentation

Base URL: `http://localhost:3000`

## Overview

| Resource      | Method | Endpoint                     | Description                                                                                    |
| ------------- | ------ | ---------------------------- | ---------------------------------------------------------------------------------------------- |
| `suggestions` | GET    | /get-all-suggestions         | This has the url show all the suggestions when the user clicks on a specific button            |
| `suggestions` | GET    | /get-suggestions-by-category | When the user clicks a button to view specific categories this url shows it                    |
| `suggestions` | GET    | /count-all-categories        | This counts all the categories total                                                           |
| `suggestions` | GET    | /count/:specific/catgeory    | This only counts a specific category the user wants to see for suggesitons                     |
| `suggestions` | POST   | /add-one-suggestion          | When the user wants to add a suggestion, it posts the request body in order to save in the api |

---

### 🔹 GET `/get-all-suggestions`

**Description:** Shows all of the suggestions added by users

**Example Request URL:**

```[link]
http://localhost:3000/get-all-suggestions
```

**Example Response:**

```json
[
  {
    "id": 1,
    "feedback_title": "Dark-mode",
    "category": "Feature",
    "feedback_detail": "You should add a dark-mode for users like me who strain with sites that are bright"
  },
  {
    "id": 2,
    "feedback_title": "Mouse movement",
    "category": "UI",
    "feedback_detail": "I like the idea of adding a mouse that while it moves it sparkles"
  },
  {
    "id": 3,
    "feedback_title": "Loading Screen",
    "category": "UI",
    "feedback_detail": "You should add a loading screen for when the information isnt there yet- I get really confused that my site is glitching out"
  },
  {
    "id": 4,
    "feedback_title": "Loading Screen",
    "category": "UI",
    "feedback_detail": "You should add a loading screen for when the information isnt there yet- I get really confused that my site is glitching out"
  }
]
```

---

### 🔹 GET `/get-suggestions-by-category/:category`

**Description:** Allows the user to specifically have each category be called of choice

**Example Request URL:**

```
http://localhost:3000/get-suggestions-by-category/UI
```

**Example Response:**

```json
[
  {
    "id": 2,
    "feedback_title": "Mouse movement",
    "category": "UI",
    "feedback_detail": "I like the idea of adding a mouse that while it moves it sparkles"
  },
  {
    "id": 3,
    "feedback_title": "Loading Screen",
    "category": "UI",
    "feedback_detail": "You should add a loading screen for when the information isnt there yet- I get really confused that my site is glitching out"
  }
]
```

---

### 🔹 GET `/count-all-categorie`

**Description:** Shows all of the suggestions added by users

**Example Request URL:**

```[link]
http://localhost:3000/count-all-categorie
```

**Example Response:**

```json

```

---

### 🔹 GET `/count/:specific/catgeory`

**Description:** Shows a specific count toal for the category

**Example Request URL:**

```[link]
http://localhost:3000/count/:specific/catgeory
```

**Example Response:**

```json

```

---

### 🔹 POST `/add-one-suggestion`

**Description:** Adds a new suggestion the user wants

**Example Request URL:**

```
http://localhost:3000/add-one-suggestion
```

**Example Request Body:**

```json
{
  "feedback_title": "Mouse movement",
  "category": "UI",
  "feedback_detail": "I like the idea of adding a mouse that while it moves it sparkles"
}
```

**Example Response:**

```json
//Returns the data to verify it's been added
{
  "id": 5,
  "feedback_title": "Mouse movement",
  "category": "UI",
  "feedback_detail": "I like the idea of adding a mouse that while it moves it sparkles"
}
```

---
