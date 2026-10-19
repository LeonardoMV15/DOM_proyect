const playerBox = document.querySelector ("#player")
const startScreen = document.querySelector("#startView")
const gameScreen = document.querySelector("#gameView")
const endScreen = document.querySelector("#endView")
const startBtn = document.querySelector("#startButton")


let playerObj

function addPlayer(){
    playerObj = new player()
}

function startGame(){

    startScreen.style.display = "none"
    gameScreen.style.display = "flex"
    endScreen.style.display = "none"

    addPlayer()

}

// event listeners
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
    }
})




