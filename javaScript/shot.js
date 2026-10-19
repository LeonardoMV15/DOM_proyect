class shotObj{

constructor(posX,posY,){
this.node = document.createElement("div")
    gameBox.append(this.node)

    this.node.className ="shot"


    this.x = posX;
    this.y = posY;
    this.width = 10;
    this.height = 20;
    this.node.style.width = `${this.width}px`
    this.node.style.height = `${this.height}px`
    this.node.style.backgroundColor = "white"
    

    this.node.style.position = "absolute"
    this.node.style.top = `${this.y}px`
    this.node.style.left = `${this.x}px`
    this.speed = 5


}
automaticMovement(){
    this.y -= this.speed;
    this.node.style.top = `${this.y}px`
  }

}