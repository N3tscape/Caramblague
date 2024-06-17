const express = require("express");
const router = express.Router();
const jokeController = require("../controllers/jokeController");

/**
 * @swagger
 * components:
 *  schemas:
 *    Joke:
 *      type: object
 *      required:
 *        - question
 *        - punchline
 *      properties:
 *        id:
 *          type: integer
 *          description: The auto-generated id of the joke
 *        question:
 *          type: string
 *          description: The question of the joke
 *        punchline:
 *          type: string
 *          description: The punchline of the joke
 *      example:
 *        id: 1
 *        question: "Why did the chicken cross the road?"
 *        punchline: "To get to the other side!"
 */

/**
 * @swagger
 * tags:
 *   name: Caramblague
 *   description: API for managing jokes
 */

/**
 * @swagger
 * /api/blagues:
 *  post:
 *    summary: Create a new joke
 *    tags: [Caramblague]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Joke'
 *    responses:
 *      201:
 *        description: The joke was successfully created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Joke'
 *      500:
 *        description: Some error happened
 */
router.post("/blagues", jokeController.createJoke);

/**
 * @swagger
 * /api/blagues:
 *  get:
 *    summary: Get all jokes
 *    tags: [Caramblague]
 *    responses:
 *      200:
 *        description: The list of all jokes
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Joke'
 *      500:
 *        description: Some error happened
 */
router.get("/blagues", jokeController.getJokes);

/**
 * @swagger
 * /api/blagues/random:
 *  get:
 *    summary: Get random joke
 *    tags: [Caramblague]
 *    responses:
 *      200:
 *        description: The random joke
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Joke'
 *      500:
 *        description: Some error happened
 */
router.get("/blagues/random", jokeController.getRandomJoke);

/**
 * @swagger
 * /api/blagues/{id}:
 *  get:
 *    summary: Get joke by id
 *    tags: [Caramblague]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: The joke id
 *    responses:
 *      200:
 *        description: The joke description by id
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Joke'
 *      404:
 *        description: The joke was not found
 *      500:
 *        description: Some error happened
 */
router.get("/blagues/:id", jokeController.getJokeById);

module.exports = router;
