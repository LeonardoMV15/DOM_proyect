class enemyRock{

constructor(posX, width,height){

    this.node = document.createElement("div")
    gameBox.append(this.node)

    this.node.className ="Rock"


    this.x = posX;
    this.y = 0;
    this.width = width;
    this.height = height;
    this.node.style.width = `${this.width}px`
    this.node.style.height = `${this.height}px`
    this.node.style.backgroundColor = "white"
    

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