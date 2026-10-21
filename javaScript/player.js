class player{

constructor(){

this.node = document.querySelector("#player")

gameBox.append(this.node)



this.x = 70;
this.y = 400;

this.width = 100;
this.height = 100;

this.node.style.width = `${this.width}px`
this.node.style.height = `${this.height}px`
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

  if( this.y >= window.innerHeight - this.height-20 ){
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
 
   if( this.x >= window.innerWidth - this.width - 20 ){
    return
  }
  this.x += this.speed;
      this.node.style.left = `${this.x}px`

}


}