import { GameController } from "./gamecontroller";

function screenController () {
  
    let game = GameController()
  
    const playerTurnDiv = document.querySelector(".turn")
    const boardDiv = document.querySelector(".board")
    const resultDiv = document.querySelector(".result")
    const resetBtn = document.querySelector("#resetBtn")
    
  
    const updateScreen = () => {
  
      boardDiv.textContent = ""
  
      const board = game.getBoard()
  
      const activePlayer = game.getActivePlayer()
  
      playerTurnDiv.textContent = `${activePlayer.name} turns`
      board.forEach((row) => {
  
        row.forEach((cell) => {
  
          const cellButton = document.createElement("button")
  
          cellButton.classList.add("cell")
  
        
  
          cellButton.textContent = cell.getValue()
  
          cellButton.addEventListener("click", ()=> {
            
            
            if(cell.getValue() !== 0 || game.getGameover()) return
  
            cell.setValue(activePlayer.symbol)
            
  
            let result = game.playRound()
            resultDiv.textContent = result
  
            updateScreen()
            
            
          })
         
  
          boardDiv.appendChild(cellButton)
        })
  
        })
  
    }
  
    const resetGame = () => {   
      game = GameController()          
      resultDiv.textContent = ""          
      playerTurnDiv.textContent = ""       
      updateScreen()   
    }
    resetBtn.addEventListener("click", resetGame )
  
  
   updateScreen()
  
  }
  
  screenController()
  