import React,{useState} from 'react'

import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import CloseIcon from '@material-ui/icons/Close';

function NewToDo({addTodo,i}) {
    const[addtodo,setAddtodo]=useState(false)
    const [InputValues,setInputValues] = useState('')
    return (
        <div i={i}>
            {addtodo ? 
            <div>
              <input className='card_input2' onChange={(e) => setInputValues(e.target.value)}/>
              <div className='btn_close'>
                <button onClick={(e)=>addTodo(InputValues,i,setAddtodo)} className='add_btn'>Add</button>
                <div className='closeicon'><CloseIcon  onClick={()=>{setAddtodo(false)}}></CloseIcon></div>
              </div>
            </div>
            :
            <div className='card_button'>
              <button onClick={()=>setAddtodo(true)}><span className='card_plus'>+</span> Add another list</button>
              <LibraryBooksIcon className='library_icon'></LibraryBooksIcon>
            </div>
          }
        </div>
    )
}

export default NewToDo
