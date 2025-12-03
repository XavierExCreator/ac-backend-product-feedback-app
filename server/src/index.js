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
async function getAllSuggestions() {
    const data = await db.query("SELECT * FROM suggestions");
    return data.rows;
}

async function getSuggestionsByCategory(category) {
    const data = await db.query("SELECT * FROM suggestions WHERE category = ($1)", [category]);
    return data.rows;
}

async function addOneSuggestion(feedback_title, category, feedback_detail) {
    const data = await db.query("INSERT INTO suggestions (feedback_title, category, feedback_detail) VALUES ($1, $2, $3) RETURNING *", [feedback_title, category, feedback_detail]);
    return data.rows;
}

/*----------------------------------
API Endpoints
----------------------------------*/

//Check for completion also check on Postman
//Is this completed?
//
app.get("/get-all-suggestions", async (req, res) => {
    const suggestions = await getAllSuggestions();
    res.json(suggestions);
});

//Check for completion also check on Postman
//Is this completed?
//
app.get("/get-suggestions-by-category", async (req, res) => {
    const category = await getSuggestionsByCategory(category);
    res.json(category);
});

//Check for completion also check on Postman
//Is this completed?
//
app.post("/add-one-suggestion", async (req, res) => {
    const { feedback_title, category, feedback_detail } = req.body;
    const newSuggestion = await addOneSuggestion(feedback_title, category, feedback_detail);
    res.json(newSuggestion);
});