class Form {
    constructor() {
      this.input = createInput("Name")
      this.button = createButton("Play")
      this.greeting = createElement("h2")
    }
    hide(){
      this.greeting.hide();
      this.input.hide();
      this.button.hide();
    }
    display(){
      var title = createElement('h2')
      title.html("Multi Hybrid Car Racing Game For Kids");
      title.position(300, 0)
      
      this.input.position(450, 160);
      this.button.position(500, 200);
  
      this.button.mousePressed(() => {
        this.input.hide();
        this.button.hide();
  
       player.name = this.input.value();
        
        playerCount+=1;
        player.index = playerCount
        player.update(name)
        player.updateCount(playerCount);
        this.greeting.html("Start Your Electrical Engines " + player.name )
        this.greeting.position(400, 160)
      });
  
    }
  }
  