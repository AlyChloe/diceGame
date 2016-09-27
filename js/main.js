var diceGame = {
  //the start date/time of the game
  items: {
    diceHeaderMessage: null,
    diceParaMessage: null,
    diceButton: null,
    diceOne: null,
    diceTwo: null,
    dateTime: null
  },
  values: {
    currentDiceOne: 0,
    currentDiceTwo: 0,
    currentDateTime: null,
    currentHeaderMessage: null,
    currentParaMessage: null,
    startTime: null
  },
  date: function() {
    var date = new Date();
    var currentDate = date.getDate();
    var currentMonth = date.getMonth() + 1;
    var currentYear = date.getFullYear();
    var currentHours = date.getHours();
    var currentMins = date.getMinutes();

    var currentDateTimeStatus = 'Game Started ' + currentYear + "-" + currentMonth + "-" + currentDate + " at " + currentHours + ":" + currentMins;

    this.values.currentDateTime = currentDateTimeStatus;
    this.items.dateTime.innerHTML = diceGame.values.currentDateTime;
  },
  gameRounds: [],
  // The game object should have a function (method) for rolling the dice
  // (In other words, the function is not just in the page, but on the game object!)
  rollDice: function() {
    var randomNumberOne = Math.floor(Math.random() * 6) + 1;
    var randomNumberTwo = Math.floor(Math.random() * 6) + 1;

    this.values.currentDiceOne = randomNumberOne;
    this.values.currentDiceTwo = randomNumberTwo;

    for (var i = 0; i < 1; i++) {
        if(!(randomNumberOne + randomNumberTwo === 7 || randomNumberOne + randomNumberTwo === 11)) {

          var joinNumbers = randomNumberOne + randomNumberTwo;
          this.gameRounds.push(joinNumbers);
          console.log(this.gameRounds);

          this.values.currentHeaderMessage = "Try Again.";
          this.items.diceHeaderMessage.innerHTML = diceGame.values.currentHeaderMessage;
        } else {
          var endTime = new Date().getTime() / 1000;
          var endCalc = Math.floor(endTime - this.values.startDate);

          this.values.currentHeaderMessage = "You're a WINNER!";
          this.items.diceHeaderMessage.innerHTML = diceGame.values.currentHeaderMessage;
          this.values.currentParaMessage = "Took you " + this.gameRounds.length + ' tries ' + ' and ' + endCalc + ' seconds';
          this.items.diceParaMessage.innerHTML = diceGame.values.currentParaMessage;

          document.getElementById('line').style.opacity = "1";
        }
    }

    this.items.diceOne.innerHTML = diceGame.values.currentDiceOne;
    this.items.diceTwo.innerHTML = diceGame.values.currentDiceTwo;

  },
  init: function() {
    this.items.dateTime = document.getElementById('currentDateTime');
    this.items.diceHeaderMessage = document.getElementById('headerMessage');
    this.items.diceParaMessage = document.getElementById('paraMessage');
    this.items.diceButton = document.getElementById('button');
    this.items.diceOne = document.getElementById('diceOne');
    this.items.diceTwo = document.getElementById('diceTwo');

    this.items.dateTime.innerHTML = diceGame.values.currentDateTime;

    this.items.diceButton.addEventListener('click', this.date.bind(this));
    this.items.diceButton.addEventListener('click', this.rollDice.bind(this));
    this.values.startDate = new Date().getTime() / 1000;
  }
}
diceGame.init();
