import React, { PureComponent } from 'react'
import { connect } from 'dva'
import Link from 'umi/link'
import NameInput from '../../components/NameInput';

class Index extends PureComponent {

    componentWillUnmount() {
        const { dispatch } = this.props
        console.log('anothor will unmount')
        dispatch({ type: 'anothor/unmount' })
    }

    render() {
        const { msg } = this.props
        return (
            <div>
                <h1>{msg}</h1>
                <hr />
                <Link to="/">Home</Link>
                <hr />
                <NameInput />
            </div>
        )
    }
}

export default connect(state => { return { msg: state.index.msg } })(Index)
