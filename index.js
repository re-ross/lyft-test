const express = require("express");
const PORT = process.env.PORT || 4000;

const app = express();
app.use(express.json());

const cutString = (string) => {
  let returnedString = "";
  const characters = string.split("");
  for (let i = 2; i < characters.length; i += 3) {
    returnedString += characters[i];
  }
  return returnedString;
};

app.listen(PORT, () => console.log(`App is running on ${PORT}`));
