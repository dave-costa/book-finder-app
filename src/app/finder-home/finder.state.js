import getBooks from './services/api'

const state = {
    books: undefined, 
}
const mutations = {
    SET_BOOKS: (state, data) => {        
        state.books = data.items       
    }
}
const actions = {
    getData: async (context, payload) => {
        try {            
            const response = await getBooks(payload)
            const data = response.data
            context.commit('SET_BOOKS', data)
        } catch (error) {   
            console.log('Lamento deu algum erro!', error);         
        }
    }
}
export default {
    namespaced: true,
    state, 
    mutations,
    actions
}