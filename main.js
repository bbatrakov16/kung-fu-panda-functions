// Kung Fu Panda Character Look Up

// Event Listener
document.getElementById("search").addEventListener("click", searchClicked);

// Event Function
function searchClicked() {
  // Get Input Value (what character to look for?)
  let name = document.getElementById("input-name").value;
  name = name.toLowerCase();

  // Test Input Variable and update the page
  if (name === "po" || name === "dragon warrior") {
    chooseCharacter("Po", "po", "Buddy, I am the Dragon Warrior.");
  } else if (name === "tigress" || name === "master tigress") {
    chooseCharacter("Master Tigress", "tigress", "That was pretty hardcore!");
  } else if (name === "mantis" || name === "master mantis") {
    chooseCharacter("Master Mantis", "mantis", "Fear the bug!");
  } else if (name === "monkey" || name === "master monkey") {
    chooseCharacter("Master Monkey", "monkey", "We should hang out.");
  } else if (name === "crane" || name === "master crane") {
    chooseCharacter(
      "Master Crane",
      "crane",
      "You can chain my body, but you will never chain my warrior spirit!"
    );
  } else if (name === "viper" || name === "master viper") {
    chooseCharacter("Master Viper", "viper", "I don't need to bite to fight!");
  } else if (name === "shifu" || name === "master shifu") {
    chooseCharacter("Master Shifu", "shifu", "There is now a Level Zero.");
  } else if (name === "ping" || name === "mr. ping") {
    chooseCharacter(
      "Mr. Ping",
      "mr-ping",
      "We are noodle folk, broth runs through our veins!"
    );
  } else if (name === "boss wolf" || name === "wolf") {
    chooseCharacter(
      "Boss Wolf",
      "boss-wolf",
      "Guess nobody told you: If you mess with the wolf, you get the fangs!"
    );
  } else if (
    name === "croc" ||
    name === "crocodile" ||
    name === "master croc"
  ) {
    chooseCharacter("Master Croc", "croc", "Vengeance is served!");
  } else if (name === "kai" || name === "master kai") {
    chooseCharacter(
      "Master Kai",
      "kai",
      "Almost makes me want to spare your life"
    );
  } else if (name === "oogway" || name === "master oogway") {
    chooseCharacter(
      "Master Oogway",
      "oogway",
      "Yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called the present"
    );
  } else if (
    name === "shen" ||
    name === "lord shen" ||
    name === "master shen" ||
    name === "peacock"
  ) {
    chooseCharacter("Lord Shen", "shen", "China will be mine!");
  } else if (name === "soothsayer" || name === "old witch") {
    chooseCharacter(
      "Soothsayer",
      "soothsayer",
      "Your story may not have such a happy beginning, but that doesn't make you who you are."
    );
  } else if (name === "master ox" || name === "storming ox" || name === "ox") {
    chooseCharacter(
      "Master Ox",
      "storming-ox",
      "Like I said, you are not getting me out of this cell"
    );
  } else if (name === "tai lung") {
    chooseCharacter("Tai Lung", "tai-lung", " I have come home, master");
  } else {
    chooseCharacter("?????", "question-mark", "Character Not Found");
  }
}

function chooseCharacter(characterName, imgName, quote) {
  // Update page to given character information
  document.getElementById("character-name").innerHTML = characterName;
  document.getElementById("main-img").src = `img/${imgName}.png`;
  document.getElementById("quote").innerHTML = quote;
}
