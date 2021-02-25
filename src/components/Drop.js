import React from 'react'

 function Drop(props) {
    const drop = (e)=>{
        const data = e.dataTransfer.getData("transfer")
        e.target.appendChild(document.getElementById(data))
    }
    const allowdrop=(e)=>{
        e.preventDefault()
    }
    return (
        <div id={props.id} onDrop={drop} onDragOver={allowdrop}>
           {props.children} 
        </div>
    )
}
export default Drop