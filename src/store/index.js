export default {
    state: {
        customers: [],
        isFetched: false
    },
    mutations: {
        setCustomers(state, newCustomers) {
            state.customers = newCustomers.reduce((customers, newCustomer) => {
                if (customers.find(({ id }) => id === newCustomer.id)) return customers;

                customers.push(newCustomer);
                return customers;
            }, state.customers);
        },
        addCustomer(state, newCustomer) {
            newCustomer.id = (new Date).getTime();
            state.customers.push(newCustomer);
        },
        deleteCustomer(state, customer) {
            state.customers.splice(state.customers.indexOf(customer), 1)
        },
        setFetchStatus(state) {
            state.isFetched = true;
        }
    },
    actions: {
        getCustomers(context) {
            window.fetch('https://jsonplaceholder.typicode.com/users')
                .then(responce => responce.json())
                .then(data => {
                    context.commit('setFetchStatus');

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
        getOurCustomer(context, id) {
            window.fetch('https://jsonplaceholder.typicode.com/users/' + id)
                .then(response => response.json())
                .then(item => {
                    const [firstName, lastName] = item.name.split(' ');

                    return {
                        ...item,
                        firstName,
                        lastName
                    }
                })
                .then(data => context.commit('setCustomers', [data]))
        },
        addCustomer(context, customer) {
            context.commit('addCustomer', customer)
        },
        deleteCustomer(context, customer) {
            context.commit('deleteCustomer', customer)
        }
    }
};
