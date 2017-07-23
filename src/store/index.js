export default {
    state: {
        count: 0,
        someText: 'Жопа',
        results: []
    },
    mutations: {
        increment(state) {
            state.count++;
        },
        decrement(state) {
            state.count--;
        }
    }
};
