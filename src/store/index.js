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
        updateCustomer(state, customer) {
            const key = state.customers.findIndex(({ id }) => id === customer.id);
            state.customers[key] = customer;
        },
        deleteCustomer(state, params) {
            state.customers.splice(state.customers.findIndex(({ id }) => id === params.customerId), 1);
            if (params.callback && typeof params.callback === 'function') {
                params.callback();
            }
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
        updateCustomer(context, customer) {
            context.commit('updateCustomer', customer)
        },
        deleteCustomer(context, customer) {
            context.commit('deleteCustomer', customer)
        }
    }
};
