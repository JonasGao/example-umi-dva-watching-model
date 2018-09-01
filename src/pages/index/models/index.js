export default {
  namespace: 'index',
  state: {
    msg: null
  },
  effects: {
    watchName: [
      function* ({ take, put, select }) {
        console.log('start index while')
        while (true) {
          console.log('index select latest name')
          const { name: latest } = yield select(state => state.g)
          const updateNameAction = yield take('g/updateName')
          console.log('index taking updateName')
          console.log('index select current pathname')
          const pathname = yield select(state => state.routing.location.pathname)
          if (pathname !== '/') {
            console.log('not in index, ignore')
            continue
          }
          if (updateNameAction.name !== latest) {
            console.log('index update message')
            yield put({ type: 'updateMsg', name: updateNameAction.name })
          }
        }
      },
      { type: 'watcher' }
    ]
  },
  reducers: {
    updateMsg(state, { name }) {
      state.msg = `Hello, ${name}!`
    }
  },
}