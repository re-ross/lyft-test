const express = require("express");
const PORT = process.env.PORT || 4000;

const app = express();
app.use(express.json());

const cutToString = (string) => {
  let cutString = "";
  const characters = string.split("");
  for (let i = 2; i < characters.length; i += 3) {
    cutString += characters[i];
  }
  return { return_string: cutString };
};

app.post("/test", (req, res) => {
  const { string_to_cut } = req.body;

  if (string_to_cut && typeof string_to_cut === "string") {
    res.status(200).send(cutToString(string_to_cut));
  } else {
    res.status(400).send("Please provide a string!");
  }
});

app.listen(PORT, () => console.log(`App is running on ${PORT}`));
