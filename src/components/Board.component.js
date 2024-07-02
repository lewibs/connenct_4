
import styled from "styled-components"
import { HEIGHT, Tile, WIDTH } from "./Tile.component"
import { Player } from "../enums/Player.enum"


const BoardDiv = styled.div`
    display:flex;
    flex-direction: column;
    gap:3px;
    height:${props=>props.height*(HEIGHT+2) + "px"};
    width:${props=>props.width*(WIDTH+2)+"px"};
    background:blue;
    padding:4px;
`

const Row = styled.div`
    display:flex;
    flex-direction:row;
`;

/**
 * @param {Player[][]} board 
 * @returns 
 */
export function Board({handleClick, board}) {
    return <BoardDiv height={board.length} width={board[0].length}>
        {board.map((row)=>{
            return <Row>
                {row.map((player, i)=>{
                    return <Tile onClick={()=>handleClick(i)} player={player}></Tile>
                })}
            </Row>
        })}
    </BoardDiv>
}