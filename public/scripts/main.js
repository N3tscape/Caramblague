const baseURL = "http://localhost:3000/api";

const jokeContainer = document.getElementById("jokeContainer");
const jokeQuestion = document.getElementById("jokeQuestion");
const jokePunchline = document.getElementById("jokePunchline");
const getJokeBtn = document.getElementById("getJokeBtn");

const getRandomJoke = async () => {
  try {
    const response = await fetch(`${baseURL}/blagues/random`);
    if (!response.ok) {
      throw new Error("Échec de la recherche d'une blague");
    }
    const joke = await response.json();
    jokeQuestion.textContent = `${joke.question}`;
    jokePunchline.textContent = `${joke.punchline}`;
  } catch (error) {
    console.error("Error fetching joke:", error);
    jokeQuestion.textContent =
      "Échec de l'extraction de la blague. Veuillez réessayer plus tard.";
  }
};

getJokeBtn.addEventListener("click", getRandomJoke);

getRandomJoke();
