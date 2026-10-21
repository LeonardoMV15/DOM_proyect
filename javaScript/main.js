const gameBox = document.querySelector ("#gameView")
const startScreen = document.querySelector("#startView")
const gameScreen = document.querySelector("#gameView")
const endScreen = document.querySelector("#endView")
const startBtn = document.querySelector("#startButton")
const restartBtn = document.querySelector("#RestartButton")
const scoreBox = document.querySelector(".score")
const resultBox = document.querySelector(".result")

let playerObj
let rockArray = []
let shotArr = []
let score = 0
let enemyShipArr = []
let bonusArr = []


function addRock(){

    let randomPosX = Math.floor(Math.random() * window.innerWidth )
        let randomWidth = Math.floor(Math.random() * (75-50)+50)
        let newRock = new enemyRock(randomPosX , randomWidth, randomWidth )
        rockArray.push(newRock)
}
function addEnemyShip(){

    let randomPosX = Math.floor(Math.random() * window.innerWidth )
        
        let newShip = new ship(randomPosX  )
        enemyShipArr.push(newShip)
}
function addBonus(){
    const maxPosX = Math.max(0, gameBox.clientWidth - 24)
    const randomPosX = Math.floor(Math.random() * (maxPosX + 1))
    bonusArr.push(new bonus(randomPosX))
}


function addPlayer(){
    playerObj = new player()
}
function startGame(){

    rockArray = []
    bonusArr = []
    startScreen.style.display = "none"
    gameScreen.style.display = "flex"
    endScreen.style.display = "none"

    addPlayer()
    addRock()
    addEnemyShip()
      mainItervalId=setInterval(gameLoop, Math.round(1000 / 60))

    enemyItervalId=setInterval(addRock , 2000)
    enemyShipItervalId=setInterval(addEnemyShip , 2000)
    bonusIntervalId=setInterval(addBonus , 2000)


}

function gameLoop() {
        rockArray.forEach((enemy) => {
            enemy.automaticMovement()

        })
        shotArr.forEach((shot) => {
            shot.automaticMovement()
        

        })
        enemyShipArr.forEach((ship) => {
            ship.automaticMovement()
        })
        bonusArr.forEach((bonus) => {
            bonus.automaticMovement()
        })

        checkRockDespawn()
        checkBonusDespawn()
            checkCollisionPlayerEnemey()

    }    

function checkRockDespawn(){
        if ( rockArray[0] && rockArray[0].x < -100){
            rockArray[0].node.remove()//remove it from DOM
            rockArray.shift()

        }
    }
function checkBonusDespawn(){
    for (let bonusIndex = bonusArr.length - 1; bonusIndex >= 0; bonusIndex--) {
        if (bonusArr[bonusIndex].y > gameBox.clientHeight) {
            bonusArr[bonusIndex].node.remove()
            bonusArr.splice(bonusIndex, 1)
        }
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
    for (let bonusIndex = bonusArr.length - 1; bonusIndex >= 0; bonusIndex--) {
        const currentBonus = bonusArr[bonusIndex]
        if (checkCollision(currentBonus, playerObj)) {
            currentBonus.node.remove()
            bonusArr.splice(bonusIndex, 1)
            tipleShot()
        }
    }

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

 enemyShipArr.forEach((enemy, i) =>{
        if (checkCollision (enemy , playerObj)){
            enemy.node.remove() 
            enemyShipArr.splice ( i, 1)
            gameOver()
        }})
 for (let shotIndex = shotArr.length - 1; shotIndex >= 0; shotIndex--) {
    const shot = shotArr[shotIndex];

for (let shipIndex = enemyShipArr.length - 1; shipIndex >= 0; shipIndex--) {
        const enemyShip = enemyShipArr[shipIndex];

if (checkCollision(shot, enemyShip)) {
            shot.node.remove();
            enemyShip.node.remove();
            score+=10
            addScore(score)


            shotArr.splice(shotIndex, 1);
            enemyShipArr.splice(shipIndex, 1);
            break;
            }
        }
    }
}

function gameOver(){

    rockArray.forEach((rock) => {rock.node.remove()})
    shotArr.forEach((shot) => {shot.node.remove()})
    enemyShipArr.forEach((enemy) => {enemy.node.remove()})
    bonusArr.forEach((bonus) => {bonus.node.remove()})
    bonusArr = []

    score = 0

     scoreBox.innerText = score


    clearInterval(mainItervalId)
    clearInterval(enemyItervalId)
    clearInterval(enemyShipItervalId)
    clearInterval(bonusIntervalId)

    gameScreen.style.display ="none"
    endScreen.style.display ="flex"
}
function restartGame (){
  
    startScreen.style.display = "block";
    endScreen.style.display = "none";
    startGame()
}

function shot(directionX = 0){
    const newShot = new shotObj(
        playerObj.x + playerObj.width / 2 - 5,
        playerObj.y - 20,
        directionX
    );
    shotArr.push(newShot);
}

function tipleShot(){
    shot(-2.5)
    shot()
    shot(2.5)
}


function addScore(score){

        scoreBox.innerText = score
        resultBox.innerText = score

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




