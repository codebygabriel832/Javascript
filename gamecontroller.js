import { Gameboard } from "./gameboard"
export function GameController (
            playerOneName = window.prompt("Enter PlayerOne Name"),
            playerTwoName = window.prompt("Enter PlayerTwo Name")
        ) {
        
            const gameboard = Gameboard()
            
            const validateInput = (playerName) =>{
                
                while(playerName === "") {
        
                playerName = window.prompt(`Please choose a Name`)
                }
                return playerName
            }
        
            let player1Name = validateInput(playerOneName)
            let player2Name = validateInput(playerTwoName)
        
            const players = [
                {
                name:[player1Name],
                symbol:[player1Name]
                },
                {
                name: [player2Name],
                symbol: [player2Name]
                }
            ]
        
            let activePlayer = players[0]
            let gameover = false
            
            const switchPlayerTurn = () => {
        
                activePlayer = activePlayer === players[0]? players[1]: players[0] 
            }
        
            const getActivePlayer = () => activePlayer
            const getGameover = () => gameover
        
            const checkWinner = () =>{
                
                const board = gameboard.getBoard()
        
                const Symbol = activePlayer.symbol
            
                const ROWS = board.length
                const COLS = board[0].length
                
                //check rows 
                for (let row = 0; row < ROWS; row++) {
            
                if (
                    board[row][0].getValue() === Symbol &&
                    board[row][1].getValue() === Symbol &&
                    board[row][2].getValue() === Symbol
                ) return `${activePlayer.name} wins!`
                }
            
                //check cols
            
                for (let col = 0; col < COLS; col++) {
                if (
                    board[0][col].getValue() === Symbol &&
                    board[1][col].getValue() === Symbol &&
                    board[2][col].getValue() === Symbol
                ) return `${activePlayer.name} wins!`
                }
            
                //check diagonals
                
                if(
                board[0][0].getValue() === Symbol &&
                board[1][1].getValue() === Symbol &&
                board[2][2].getValue() === Symbol
                )return `${activePlayer.name} wins!`
            
                if(
                board[0][2].getValue() === Symbol&&
                board[1][1].getValue() === Symbol &&
                board[2][0].getValue() === Symbol
                ) return `${activePlayer.name} wins!`
            
                //check draw 
            
                const isDraw = board.flat().every(cell => cell.getValue() !== 0);
                if (isDraw) {
                return "It's a draw!";
                }
            
            }      
                
            const playRound = () => {
        
                if(gameover) return 
        
                let results = checkWinner()
                if(results) {
                
                gameover = true
                return results
                
                }
        
                switchPlayerTurn()
        
            }
        
            return {
                playRound,
                getActivePlayer,
                getGameover,
                getBoard: gameboard.getBoard,
                
            }
  
  }