import React from 'react'
import { connect } from 'dva'

export default connect(state => { return { state } })(({ state }) => {
  return (
    <div>
      <h1>
        About
    </h1>
      <hr />
      <ul>
        {
          Object.keys(state).map(k => (
            <li key={k}>{k}</li>
          ))
        }
      </ul>
    </div>
  )
})
