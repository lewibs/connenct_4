import logo from './logo.svg';
import './App.css';
import { Board } from './components/Board.component';
import React, { useEffect } from 'react';
import { Game } from './game/Game.class';


// Run in top system terminal or web_browser or phone
// Function run_game()->Game
// 	While game.check_for_win() is 0:
// 		Col = get_player_move()
// 		Valid = Game.play_tile(col)
// 		If valid:
// 			Game.toggle_player()
// 		Else:
// 			display_error()
	
// 	display_winner(Game.check_for_win())


function App() {
  const [update, toggleUpdate] = React.useState(false)
  const [game,] = React.useState(new Game())
  const [game_message, setGameMessage] = React.useState("")

  useEffect(()=>{
    if (game) {
      setGameMessage(`player turn: ${game.current_turn}`)
    }
  }, [game])

  

  function handleColClick(col) {
    const [game_over, winner] = game.is_game_over()
    console.log(game_over, winner)
    if (game_over) {
      setGameMessage(`Congrats player ${winner} you won`)
    } else if (col) {
      const played = game.play_tile(col)
      if (played) {
        const winner = game.check_for_win(game.current_turn, played)
        game.toggle_player()

        if (winner) {
          handleColClick()
        }
      } else {
        //TODO
        throw new Error("TODO dispaly the error")
      }
      
      toggleUpdate(p=>!p)
    }
  }

  return (
    <center>
      {game_message}
      <Board handleClick={(col)=>handleColClick(col)} board={game.board.board}/>
        click on column to play tile 
    </center>
  );
}

export default App;
