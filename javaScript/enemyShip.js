class ship{

constructor(posX){

    this.node = document.createElement("img")
    this.node.src = "./images/enemyShip.png";
    gameBox.append(this.node)

    this.node.className ="enemyShip"


    this.x = posX;
    this.y = 0;
    this.width = 40;
    this.height = 40;
    this.node.style.width = `${this.width}px`
    this.node.style.height = `${this.height}px`
    

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