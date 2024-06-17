const Joke = require("../models/joke");
const { Sequelize } = require("sequelize");

exports.createJoke = async (req, res) => {
  const { question, punchline } = req.body;
  try {
    const joke = await Joke.create({
      question,
      punchline,
    });
    res.status(201).json(joke);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getJokes = async (req, res) => {
  try {
    const jokes = await Joke.findAll();
    res.status(200).json(jokes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getJokeById = async (req, res) => {
  const { id } = req.params;
  try {
    const joke = await Joke.findByPk(id);
    if (!joke) {
      return res.status(404).json({ message: "Joke not found" });
    }
    res.status(200).json(joke);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getRandomJoke = async (req, res) => {
  try {
    const randomJoke = await Joke.findOne({
      order: Sequelize.literal("RANDOM()"),
    });

    if (!randomJoke) {
      return res.status(404).json({ message: "Joke not found" });
    }

    res.status(200).json(randomJoke);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
