import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

const jokes = [
  {
    id: 1,
    title: "Why don't scientists trust atoms?",
    joke: "Because they make up everything!",
  },
  {
    id: 2,
    title: "What do you get when you cross a snowman and a vampire?",
    joke: "Frostbite!",
  },
  {
    id: 3,
    title: "Why did the scarecrow win an award?",
    joke: "Because he was outstanding in his field!",
  },
  {
    id: 4,
    title: "Why don't programmers like nature?",
    joke: "It has too many bugs.",
  },
  {
    id: 5,
    title: "How does a penguin build its house?",
    joke: "Igloos it together.",
  },
  {
    id: 6,
    title: "Why did the math book look sad?",
    joke: "Because it had too many problems.",
  },
  {
    id: 7,
    title: "What do you call fake spaghetti?",
    joke: "An impasta!",
  },
  {
    id: 8,
    title: "Why was the broom late?",
    joke: "It swept in.",
  },
  {
    id: 9,
    title: "What do you call cheese that isn't yours?",
    joke: "Nacho cheese!",
  },
  {
    id: 10,
    title: "Why can't you give Elsa a balloon?",
    joke: "Because she will let it go.",
  },
];

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/jokes", (req, res) => {
  res.json(jokes);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
