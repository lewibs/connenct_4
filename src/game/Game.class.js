import { Player } from "../enums/Player.enum";
import {Board} from "./Board.class";
	
export class Game {
    constructor() {
        this.current_turn = Player.Player1
        this.board = new Board()
        this.current_winner = Player.NoPlayer 
    }

    toggle_player() {
        this.current_turn = (this.current_turn === Player.Player1) ? Player.Player2 : Player.Player1
    }

    is_game_over() {
        return [this.current_winner !== Player.NoPlayer, this.current_winner]
    }

    check_for_win(player, position) {
        return this.board.check_for_win(player, position)
    }

    play_tile(col) {
        if (!this.board.valid_move(col)) {
            return false
        }

        const [col_array, count] = this.board.get_col(col)
        const row = col_array.length - count - 1
        this.board.play_tile(row, col, this.current_turn)
        return [row, col]
    }
}