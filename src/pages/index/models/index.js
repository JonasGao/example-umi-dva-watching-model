export default {
  namespace: 'index',
  state: {
    msg: null
  },
  effects: {
    watchName: [
      function* ({ take, put, select, race }) {
        console.log('start while')
        while (true) {
          const { name: latest } = yield select(state => state.g)
          const { update, unmount } = yield race({
            update: take('g/updateName'),
            unmount: take('unmount')
          })
          console.log(update, unmount)
          if (unmount) {
            console.log('unmounting')
            return
          }
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
    },
    unmount(state) {
      state.msg = null
    }
  }
}