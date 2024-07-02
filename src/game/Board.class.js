import { Player } from "../enums/Player.enum"

export class Board {
    constructor() {
        this.board = [
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0]
        ]
    }

    check_for_win(player, position) {
        /**
         * @param {Player} check_player 
         * @param {[row, col]} point 
         * @param {[int, int]} direction unit vector
         * @param {int} needed amount still needed
         */
        const that = this
        function helper(check_player, point, direction, needed) {
            if (needed === 0) {
                return true
            }

            const [row, col] = point
            const [row_dir, col_dir] = direction
            
            if (!that.valid_move(col)) {
                return false
            }

            if (!that.valid_move(col+col_dir)) {
                return false
            }

            if (!that.board[row][col] !== check_player) {
                return false
            }

            if (that.board[row][col] === that.board[row+row_dir][col+col_dir]) {
                return helper(check_player, [row+row_dir, col+col_dir], direction, needed-1)
            }

            return false
        }

        const directions = [
            [1,0],
            [-1,0],
            [0,1],
            [0,-1],
            [1,1],
            [-1,1],
            [-1,-1],
            [1,-1],
        ]

        for (let i = 0; i < directions.length; i++) {
            if (helper(player, position, directions[i], 4)) {
                return true
            }
        }

        return false
    }
    
    valid_move(col) {
        if (col < 0) {
            return false
        }

        if (col >= this.board[0].length) {
            return false 
        }

        const [arr, count] = this.get_col(col)
        
        return count < this.board.length
    }
    
    get_col(col) {
        const arr = []
        let count = 0
        for (let i = 0; i < this.board[0].length; i++) {
            if (this.board[i][col] !== Player.NoPlayer) {
                count++;
            }
            arr.push(this.board[i][col])
        }
        return [arr, count]
    }

    play_tile(row, col, player) {
        this.board[row][col] = player
    }
}