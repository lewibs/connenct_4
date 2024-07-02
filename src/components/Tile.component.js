import styled from "styled-components"
import { Player } from "../enums/Player.enum"

export const HEIGHT = 20
export const WIDTH = 20

const TileDiv = styled.div`
    height:${HEIGHT}px;
    width:${WIDTH}px;
    border-radius: 10000px;
    background:${props=>props.color};
`

export function Tile({player, onClick}) {
    let color = "yellow"
    
    if ( player === Player.Player1 ) {
        color = "red"
    }

    if (player === Player.NoPlayer) {
        color = "white"
    }

    return <TileDiv onClick={onClick} color={color}/>
}