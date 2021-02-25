import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import './menu.css'
import { Link } from 'react-router-dom';
import Card from '../menu/card-newone.jpg'
import Board from '../menu/board.svg'

// nav icons import
import ListIcon from '@material-ui/icons/List';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import InfoIcon from '@material-ui/icons/Info';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Modal from '@material-ui/core/Modal';
import CloseIcon from '@material-ui/icons/Close';

let socket;

const PORT = 'https://trello-be-mp.herokuapp.com/';

const Menu = (props) => {
  const[menuoption,setMenuoption]=useState("")
  const[board,setBoard]=useState("")
  const[id,setID] =useState("")
  const[addboard,setAddboard]=useState(false)
  const[teamName,setTeamName]=useState("")
  const[teamDescription,setTeamDescription]=useState("")
  const[chang,setChang]=useState(false)

  useEffect(()=>{
    setChang(true)

    socket=io(PORT)
    const id =props.match.params.id
    setID(id)
    console.log(id);
    
    socket.emit("getuser",id)
    socket.on("getmenu",(boardNames)=>{
      console.log(boardNames);
      const menulist = boardNames.dbUser.menuoption
      const boards = boardNames.boards
      setBoard(boards)
      setMenuoption(menulist)
    })
  },[PORT,chang])

  

  const addNewBoard = () => {
    setAddboard(false)
    const modalTeam = {
      teamName,teamDescription
    }
    socket.emit('newBoard',modalTeam)
    socket.on('asdf',(newBoard)=>{
    console.log(newBoard);
    })
    setChang(false)
  } 

  return (
    <div>
        <nav className='menu-nav'>
          <div>
            <ListIcon className='listicon'></ListIcon>
            <Link to='/'><HomeIcon className='homeicon'></HomeIcon></Link>
            <DashboardIcon className='dashboardicon'></DashboardIcon>
            <SearchIcon className='searchicon'></SearchIcon>
          </div> 
          <h4 className='trello'>Trello</h4>
          <div> 
            <AddIcon className='addicon'></AddIcon>
            <InfoIcon className='infoicon'></InfoIcon>
            <NotificationsNoneIcon className='notifyicon'></NotificationsNoneIcon>
            <AccountCircleIcon className='avataricon'></AccountCircleIcon>
          </div>
        </nav>
        <div className='menu-body'>
          <div className='menu-body-left'>
            {menuoption && menuoption.map((e,i)=>{
              return(
              <li className='menu-option' key={i}>{e}</li>
              )
            })}
          </div>
          <div className="menu-body-right">
              {board && board.map((e,i)=>{
                return(
                  <Link key={i} to={`/chat/${id}/${e}`}>
                    <div  className="card">
                      <div className="card-img">
                        <img src={Card} className="imgs" alt="" />
                      </div>
                      <div className="template">
                        <h4>{e}</h4>
                      </div>
                    </div>
                  </Link>
                )
              })}
          </div>
        </div>
        <div className='menu-teams'>
          <p>TEAMS</p>
          <AddIcon className='teams-addicon' onClick={()=>setAddboard(true)}></AddIcon>
          <Modal
          open={addboard}
          onClose={()=>{setAddboard(false)}}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          className='menu-team-modal'
          >
            <div className='modal-main-div'>
              <div className='modal-div-left'>
                <div className='modal-div-left1'>
                  <h2>Let's Build a Team</h2>
                  <p>Boost your productivity by making it easier for everyone to access boards in one location.</p>
                  <h6>Team Name</h6>
                  <input onChange={(e)=>setTeamName(e.target.value)}/>
                  <p className='input-down-para'>This is the name of your company, team or organization.</p>
                  <h6>Team Type</h6>
                  <select placeholder='Choose...'>
                    <option>Sales CRM</option>
                    <option>Samall Business</option>
                    <option>Education</option>
                    <option>Engineering IT</option>
                    <option>Human Resources</option>
                    <option>Marketing</option>
                    <option>Operations</option>
                    <option>Other</option>
                  </select>
                  <h6>Team Description <span>(Optional)</span></h6>
                  <textarea onChange={(e)=>setTeamDescription(e.target.value)} placeholder='Our team organizes everything here.'>
                  </textarea>
                  <p className='input-down-para'>Get your members on board with a few words about your team.</p>
                  <button onClick={addNewBoard}>Continue</button>
                </div>
              </div>
              <div className='modal-div-right'>
              <CloseIcon onClick={()=>{setAddboard(false)}} className='close-modal'></CloseIcon>
              <img src={Board} className="modal-board" alt="" />
              </div>
            </div>
          </Modal>
        </div>
    </div>
  );
}

export default Menu



