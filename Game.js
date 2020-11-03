class Game{
    constructor(){

    }

        getState(){
            var gameStateRef = database.ref('gameState')
            gameStateRef.on("value", function(data){
            gameState = data.val();
              })
            }
        
            update(state){
                database.ref('/').update({
                    gameState: state
                });
            }
        
            start(){
                if(gameState === 0){
                    player = new Player();
                    player.getCount();
                    form = new Form();
                    form.display();
                }
            }
            play(){
                form.hide();
                textSize(30)
                text("It Has Begun", 200,100)
                Player.getPlayerInfo();
                if(allPlayers !== undefined){
                    var displayPosition = 130
                    for(var i in allPlayers){
                        if(i === "player" + player.index)
                            fill("Maroon")
                            else
                            fill("Beige")
                   
                    displayPosition+= 20
                    text(allPlayers[i].name+": " + allPlayers[i].distance, 120,displayPosition)
                    }  
                }
                if(keyDown(UP_ARROW) && player.index !== null){
                    player.distance += 50
                    player.update()
                }
            }
        }
    
