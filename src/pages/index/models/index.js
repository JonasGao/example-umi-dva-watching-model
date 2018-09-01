export default {
  namespace: 'index',
  state: {
    msg: null
  },
  effects: {
    watchName: [
      function* ({ take, put, select, race }) {
        console.log('start index while')
        while (true) {
          const { name: latest } = yield select(state => state.g)
          const { update, unmount } = yield race({
            update: take('g/updateName'),
            unmount: take('watchName')
          })
          if (unmount) {
            console.log('index unmounting')
            return
          }
          console.log('index taking action', update.type)
          if (update.name !== latest) {
            yield put({ type: 'updateMsg', name: update.name })
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
  }
}