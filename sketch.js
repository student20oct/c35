var Syncball;

function setup(){
    database=firebase.database();
    createCanvas(500,500);
    Syncball = createSprite(250,250,10,10);
    Syncball.shapeColor = "red";
    Syncballposition=database.ref('ball/position')
    Syncballposition.on("value",readposition,showerror)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    database.ref('ball/position').set(
 {
     'x': position.x+x,
     'y': position.y+y
 }
    )
}
function readposition(data){
    position=data.val();
    console.log(position.x)
    Syncball.x=position.x
    Syncball.y=position.y

}
function showerror(){
    console.log("database error")
}