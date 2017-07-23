export default {
    state: {
        count: 0,
        someText: 'Жопа',
        customers: []
    },
    mutations: {
        increment(state) {
            state.count++;
        },
        decrement(state) {
            state.count--;
        },
        setCustomers(state, customers) {
            state.customers = customers;
        },
        addCustomer(state, customer) {
            state.customers.push(customer)
        }
    },
    actions: {
        getCustomers(context) {
            window.fetch('https://jsonplaceholder.typicode.com/users')
                .then(responce => responce.json())
                .then(data => {
                    return data.map(item => {
                        const [firstName, lastName] = item.name.split(' ');

                        return {
                            ...item,
                            firstName,
                            lastName
                        }
                    });
                })
                .then(data => context.commit('setCustomers', data))
        },
        addCustomer(context, customer) {
            context.commit('addCustomer', customer);
        }
    }
};
