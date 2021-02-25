import React from 'react'
import Board from '../board/Board'
import Name from '../name/Name'
import Star from '../star/Star'
import Team from '../team/Team'
import TeamVisible from '../teamVisible/TeamVisible'
import Avatar from '../avatar/Avatar'
import Invite from '../invite/Invite'
import Butler from '../butler/Butler'
import ShowMenu from '../showMenu/ShowMenu'

import './style.css'

function Navbar(props) {
    // console.log(props)
    return (
        <div className='nav-bar-bg'>
            <div className='nav-bar'>
                <div className='nav-left'>
                    <Board/>
                    <Name boardName={props.boardName}/>
                    <Star/>
                    <Team/>
                    <TeamVisible/>
                    <Avatar/>
                    <Invite/>
                </div>
                <div className='nav-right'>
                    <Butler/>
                    <ShowMenu/>
                </div>
            </div>
        </div>
    )
}

export default Navbar



