/* --------------------------------
Server/API for Countries App Version 4

DB Fiddle Link: https://www.db-fiddle.com/f/3emK8kvTvDu5M3L3op9yGa/8
----------------------------------*/

/*----------------------------------
Boilerplate Code to Set Up Server
----------------------------------*/
import express from "express";
import pg from "pg";
import config from "./config.js";

const db = new pg.Pool({
    connectionString: config.databaseUrl, //credential to access the database. Keep this part private in the gitignore file section
    ssl: true //use SSL encryption when connecting to the database
    });

const app = express()

app.use(express.json());

const port = 3000;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}!`);
    });
/*----------------------------------
Helper Functions
----------------------------------*/
/*
These helper functions are all dynamically made and use an async and await feature in order for the function to not progress further unless the db.query has been collected and placed into the 'data' variable for its value
*/

//Helps the endpoint get all suggestions
async function getAllSuggestions() {
    const data = await db.query("SELECT * FROM suggestions");
    return data.rows;
}

//Helps the endpoint get suggestions by category
async function getSuggestionsByCategory(category) {
    const data = await db.query("SELECT * FROM suggestions WHERE category = ($1)", [category]);
    return data.rows;
}

//Helps the endpoint to add a suggestion
async function addOneSuggestion(feedback_title, category, feedback_detail) {
    const data = await db.query("INSERT INTO suggestions (feedback_title, category, feedback_detail) VALUES ($1, $2, $3) RETURNING *", [feedback_title, category, feedback_detail]);
    return data.rows[0];
}

//Helps the endpoint to find all the counts
async function countEveryCategory() {
    const data = await db.query("SELECT COUNT(*) AS all_categories_counted FROM suggestions")
    return data.rows;
}

//Helps the endpoint to find the count for specific categories
async function countSpecificCategory(category) {
    const data = await db.query("SELECT COUNT(*) AS category_count FROM suggestions WHERE category = ($1)", [category]);
    return data.rows[0];
}

/*----------------------------------
API Endpoints
----------------------------------*/

//Gets all suggestions the user wants to see/the homescreen start shows all
app.get("/get-all-suggestions", async (req, res) => {
    const suggestions = await getAllSuggestions();
    res.json(suggestions);
});

//Updates the page for the user to show the type of category the user decides they want to see
app.get("/get-suggestions-by-category/:category", async (req, res) => {
    const { category } = req.params;  
    const theCategory = await getSuggestionsByCategory(category);
    res.json(theCategory);
});

//Adds one suggestion a user writes
app.post("/add-one-suggestion", async (req, res) => {
    const { feedback_title, category, feedback_detail } = req.body;
    const newSuggestion = await addOneSuggestion(feedback_title, category, feedback_detail);
    res.json(newSuggestion);
});

app.get("/count-all-categories", async (req, res) => {
    const totalCategories = await countEveryCategory();
    res.json(totalCategories);
});

app.get("/count/:specific/catgeory", async (req, res) => {
    const { specific } = req.params;  
    const specificCategory = await countSpecificCategory(specific);
    res.json(specificCategory);
});