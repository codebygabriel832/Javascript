export function Gameboard() {
        const rows = 3
        const columns = 3
    
        const board = []
    
        for (let i = 0; i < rows; i++) {
        board[i] = []
        for(let j = 0; j < columns ; j++) {
            board[i].push(cell())
        }
        }
        
        const getBoard = () => board
    
    
    
        return { getBoard
    
        }
  
  }
  
  //cell function
  function cell() {
  
    let value = 0
  
    const getValue = () => value
  
    const setValue = (newValue) => {
  
      value = newValue
    }
  
    return {
      getValue,
      setValue
    }
  
  }
  