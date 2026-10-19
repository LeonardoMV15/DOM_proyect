class player{

constructor(){

this.node = document.querySelector("#player")



this.x = 70;
this.y = 400;

this.width = 50;
this.height = 50;

this.node.style.width = `${this.width}px`
this.node.style.height = `${this.height}px`
this.node.style.backgroundColor = `white`
this.node.style.position = "absolute"
this.node.style.top = `${this.y}px`
this.node.style.left = `${this.x}px`
    
this.speed = 20
}


moveUp(){
   if( this.y <= 0 ){
    return
  }
  this.y -= this.speed;
    this.node.style.top = `${this.y}px`

}
moveDown(){
   if( this.y >= 550 ){
    return
  }
  this.y += this.speed;
      this.node.style.top = `${this.y}px`

}
moveLeft(){
   if( this.x <= 0 ){
    return
  }
  this.x -= this.speed;
      this.node.style.left = `${this.x}px`

}
moveRight(){
   if( this.x >= 550 ){
    return
  }
  this.x += this.speed;
      this.node.style.left = `${this.x}px`

}


}