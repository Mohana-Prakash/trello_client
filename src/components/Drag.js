import React from 'react'

function Drag(props) {
    console.log(props.ids)
    const drag =(e)=>{
        e.dataTransfer.setData("transfer",e.target.id)
    }
    const noAllowDrop = (e)=>{
        e.stopPropagation()
    }
    const allowdrop=(e)=>{
        e.preventDefault()
    }
    return (
        <div id={props.ids} draggable="true" onDragStart={drag} 
        onDragOver={allowdrop}
        >
            {props.children}
        </div>
    )
}
export default Drag