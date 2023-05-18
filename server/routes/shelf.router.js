const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware')


/**
 * Get all of the items on the shelf
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  pool.query(`SELECT * FROM "item";`)
    .then(dbRes => {
      res.send(dbRes.rows);
    }).catch(dbErr => {
      console.log("Error connecting/Getting to DB:", dbErr);
    })
});

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', rejectUnauthenticated, (req, res) => {
  const thingName = req.body.name
  const imgURL = req.body.image
  const userId = req.user.id
  // console.log(req.body);
  // need to extract req.body information ===> it's the item we want to add to the DB
  // need to make a SQL query to INSERT that item INTO the "item" table
  const sqlValues = [thingName, imgURL, userId]
  const sqlQuery = `INSERT INTO item (description, image_url, user_id)
    VALUES ($1, $2, $3);
  `
  pool.query(sqlQuery, sqlValues)
    .then(dbRes => {
      console.log("Successfully created item!", dbRes);
      res.sendStatus(201)
    }).catch(dbErr => {
      console.log("Error connecting/Posting to DB:", dbErr);
    })
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', rejectUnauthenticated, (req, res) => {
  // endpoint functionality
});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', rejectUnauthenticated, (req, res) => {
  // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  // endpoint functionality
});

module.exports = router;
