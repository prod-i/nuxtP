export const state = () => ({
    users: [],
})

export const mutations = {
    setUsers(state, users){
        state.users = users
    },
}

export const actions = {
    async fetch({commit}) {
        const response = await this.$axios.$get('https://reqres.in/api/users?page=2')
        const users = response.data
        commit("setUsers", users)
    }
}

export const getters = {
    users: s => s.users
}