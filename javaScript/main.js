const gameBox = document.querySelector ("#gameView")
const startScreen = document.querySelector("#startView")
const gameScreen = document.querySelector("#gameView")
const endScreen = document.querySelector("#endView")
const startBtn = document.querySelector("#startButton")
const restartBtn = document.querySelector("#RestartButton")
const scoreBox = document.querySelector("#score")


let playerObj
let rockArray = []
let shotArr = []
let score = 0

function addRock(){

    let randomPosX = Math.floor(Math.random() * 550)
        let randomWidth = Math.floor(Math.random() * (75-50)+50)
        let newRock = new enemyRock(randomPosX , randomWidth, randomWidth )
        rockArray.push(newRock)
}


function addPlayer(){
    playerObj = new player()
}
function startGame(){

    rockArray = []
    startScreen.style.display = "none"
    gameScreen.style.display = "flex"
    endScreen.style.display = "none"

    addPlayer()
    addRock()
      mainItervalId=setInterval(gameLoop, Math.round(1000 / 60))

    enemyItervalId=setInterval(addRock , 2000)

}

function gameLoop() {
        rockArray.forEach((enemy) => {
            enemy.automaticMovement()

        })
        shotArr.forEach((shot) => {
            shot.automaticMovement()

        })
        checkRockDespawn()
            checkCollisionPlayerEnemey()

    }    

function checkRockDespawn(){
        if ( rockArray[0] && rockArray[0].x < -100){
            rockArray[0].node.remove()//remove it from DOM
            rockArray.shift()

        }
    }
function checkCollision(element1, element2) {
    return (
      element1.x < element2.x + element2.width &&
      element1.x + element1.width > element2.x &&
      element1.y < element2.y + element2.height &&
      element1.y + element1.height > element2.y
    );
  }

function checkCollisionPlayerEnemey(){
    rockArray.forEach((enemy, i) =>{
        if (checkCollision (enemy , playerObj)){
            enemy.node.remove() 
            rockArray.splice ( i, 1)
            gameOver()
        }})
        
    for (let shotIndex = shotArr.length - 1; shotIndex >= 0; shotIndex--) {
    const shot = shotArr[shotIndex];

    for (let enemyIndex = rockArray.length - 1; enemyIndex >= 0; enemyIndex--) {
        const enemy = rockArray[enemyIndex];

        if (checkCollision(shot, enemy)) {
            shot.node.remove();
            enemy.node.remove();
            score+=5
            addScore(score)


            shotArr.splice(shotIndex, 1);
            rockArray.splice(enemyIndex, 1);
            break;
        }
    }
}
}

function gameOver(){

    rockArray.forEach((rock) => {rock.node.remove()})
    shotArr.forEach((shot) => {shot.node.remove()})
    score = 0

    clearInterval(mainItervalId)
    clearInterval(enemyItervalId)

    gameScreen.style.display ="none"
    endScreen.style.display ="flex"
}
function restartGame (){
  
    startScreen.style.display = "block";
    endScreen.style.display = "none";
    startGame()
}

function shot (){
    const newShot = new shotObj(
        playerObj.x + playerObj.width / 2 - 5,
        playerObj.y - 20
    );
    shotArr.push(newShot);
}


function addScore(score){

        scoreBox.innerText = score

}





// event listeners


restartBtn.addEventListener("click", restartGame);
 
startBtn.addEventListener("click", startGame)

window.addEventListener("keydown",(event) => {
    

    if (event.code === "ArrowUp"){

        playerObj.moveUp()
    }else if (event.code === "ArrowDown"){

        playerObj.moveDown()
    }else if (event.code === "ArrowRight"){
        
        playerObj.moveRight()
    }else if (event.code === "ArrowLeft"){
        
        playerObj.moveLeft()
    }else if ( event.code === "Space"){
        shot()
    }
})




