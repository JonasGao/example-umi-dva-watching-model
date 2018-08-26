export default {
    namespace: 'g',
    state: {
        name: 'World'
    },
    reducers: {
        updateName(state, { name }) {
            state.name = name
        }
    }
}