class shotObj{

constructor(posX,posY,directionX = 0){
this.node = document.createElement("div")
    gameBox.append(this.node)

    this.node.className ="shot"


    this.x = posX;
    this.y = posY;
    this.directionX = directionX;
    this.width = 5;
    this.height = 15;
    this.node.style.width = `${this.width}px`
    this.node.style.height = `${this.height}px`
    this.node.style.backgroundColor = "aqua"
    

    this.node.style.position = "absolute"
    this.node.style.top = `${this.y}px`
    this.node.style.left = `${this.x}px`
    this.speed = 5


}
automaticMovement(){
  this.x += this.directionX;
    this.y -= this.speed;
  this.node.style.left = `${this.x}px`
    this.node.style.top = `${this.y}px`
  }

}