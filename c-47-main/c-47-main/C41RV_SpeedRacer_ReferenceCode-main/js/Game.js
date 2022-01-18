class Game{
    constructor(){
      this.input1=createInput("Enter your answer")
      this.input2=createInput("Enter your answer")
      this.input3=createInput("Enter your answer")
      this.input4=createInput("Enter your answer")
      this.submitB = createButton('SUBMIT');
      this.score=0;
    }

    getState() {
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function(data) {
          gameState = data.val();
        });
    }

    update(state) {
        database.ref("/").update({
          gameState: state
        });
    }
    gameElements(){
      this.input1.class('customInput');
      this.input1.position(250,200);
      this.input2.class('customInput');
      this.input2.position(600,200);
      this.input3.class('customInput');
      this.input3.position(950,200);
      this.input4.class('customInput');
      this.input4.position(250,500);
      this.submitB.position(950,500);
      this.submitB.class('submitB');
    }

    submitF(){
      this.submitB.mousePressed(()=>{
          this.input1.hide();
          this.input2.hide();
          this.input3.hide();
          this.input4.hide();
          this.submitB.hide();
    
          text("THANKS FOR PLAYING"+player.name,200,200)
        

      })
    }


    start(){

        player = new Player();
        playerCount = player.getCount();
        
        form = new Form();
        form.display();
    }

    play(){
      this.gameElements();
      this.submitF();
      fill("white")
      textSize(20)
      text(score,50,75)
      text("*note-please type your answer in UPPERCASE LETTERS",950,650)
       text("Welcome "+player.name,50,50) 
       textSize(18)
       text("LNEETWOAMR",250,150)
       textSize(18)
       text("GBELTEVEA",600,150)
       textSize(18)
       text("LIBL ETASG",950,150)
       textSize(18)
       text("DANRLSITWZE",250,450)

       if(this.input1.value==="WATERMELON"){
        this.score = this.score+1;
        console.log(score);
      }
      else if(this.input2.value==="VEGETABLE"){
        this.score = this.score+1;
        console.log(score);
      }
      else if(this.input3.value==="BILL GATES"){
        this.score = this.score+1;
        console.log(score);
      }
      else if(this.input4.value==="SWITZERLAND"){
        this.score = this.score+1;
        console.log(score);
      }

      

    

      
    }


}