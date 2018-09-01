export default {
  namespace: 'anothor',
  state: {
    msg: null
  },
  effects: {
    watchName: [
      function* ({ take, put, select, race }) {
        console.log('start anothor while')
        while (true) {
          const { name: latest } = yield select(state => state.g)
          const { update, unmount } = yield race({
            update: take('g/updateName'),
            unmount: take('unmount')
          })
          if (unmount) {
            console.log('anothor unmounting')
            return
          }
          console.log('anothor taking action', update.type)
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
      state.msg = `Anothor, ${name}!`
    }
  }
}