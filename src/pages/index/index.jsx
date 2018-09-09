import React, { PureComponent } from 'react'
import { connect } from 'dva'
import Link from 'umi/link'
import NameInput from '../../components/NameInput';

class Index extends PureComponent {
  render() {
    const { msg, dispatch } = this.props
    return (
      <div>
        <h1>{msg}</h1>
        <hr />
        <Link to="/about">About</Link>
        &nbsp;
        <Link to="/anothor">Anothor</Link>
        <hr />
        <NameInput />
        <button onClick={ () => { dispatch({ type: 'index/fetchSomething' }) } }>call fetch</button>
      </div>
    )
  }
}

export default connect(state => { return { msg: state.index.msg } })(Index)
