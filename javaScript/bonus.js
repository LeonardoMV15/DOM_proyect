class bonus{

constructor(posX){

    this.node = document.createElement("div")
    gameBox.append(this.node)

    this.node.className = "bonus"


    this.x = posX;
    this.y = 0;
    this.width = 24;
    this.height = 24;
    this.node.style.width = `${this.width}px`
    this.node.style.height = `${this.height}px`
    this.node.style.backgroundColor = "white"
    this.node.style.borderRadius = "50%"

    this.node.style.position = "absolute"
    this.node.style.top = `${this.y}px`
    this.node.style.left = `${this.x}px`
    this.speed = 3
}
automaticMovement(){
    this.y += this.speed;
    this.node.style.top = `${this.y}px`
  }



}