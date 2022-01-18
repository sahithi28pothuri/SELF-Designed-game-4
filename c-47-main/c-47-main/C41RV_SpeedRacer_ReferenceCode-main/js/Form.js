class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play");
    this.reset = createButton('')

  }

  setElementsPosition() {
    this.input.position(width / 2 - 110, height / 2 - 80);
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    this.reset.position(width/2+600, 70)
    //this.greeting.position(width / 2 - 300, height / 2 - 100);
  }

  setElementsStyle() {
    this.reset.class("resetButton")
    this.input.class("customInput");
    this.playButton.class("customButton");
  }

  hide() {
    this.playButton.hide();
    this.input.hide();
  }
  

  handleMousePressed() {
    this.playButton.mousePressed(() => {
      this.input.hide();
      this.playButton.hide();
      // var message = `
      // Hello ${this.input.value()}
      // </br>wait for another player to join...`;
      // this.greeting.html(message);
      playerCount += 1;
      console.log(playerCount)
      player.name = this.input.value();
      player.index = playerCount;
      player.updateCount(playerCount);
    });
  }

  display() {
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
    this.reset.mousePressed(()=>{
      database.ref("/").set({
        carsAtEnd:0,
        gameState:0,
        playerCount:0,
        players:{}
      })
    });
  }
}
