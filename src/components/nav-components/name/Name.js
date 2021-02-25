import React,{useState} from 'react'

function Name(props) {
    const [change, setchange] = useState(props.boardName)
    return (
        <div className='name-menu'>
            <input onChange={e => setchange(e.target.value)} value={change}/>
        </div>
    )
}

export default Name
