import React from 'react'
import { connect } from 'dva'

export default connect()(({ dispatch }) => {
    return (
        <div>
            <input type="text" onChange={(e) => dispatch({ type: "g/updateName", name: window.x = e.target.value })} />
            <br />
            <button onClick={(e) => dispatch({ type: "g/updateName", name: window.x })} >Reaction</button>
        </div>
    )
})
