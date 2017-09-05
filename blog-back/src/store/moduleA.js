import { ADD_INDEX, ADD_TAB } from "./type_mutation"
export default {
    state: {
        a: 1,
        index: null,
        tab: null
    },
    mutations: {
        addfn(state) {
            state.a++;
        },
        [ADD_INDEX.mutations_type](state, data) {
            state.index = data
        },
        [ADD_TAB.mutations_type](state, data) {
            state.tab = data
        }
    },
    getters: {
        numgetter(state) {
            return "$" + state.a
        }
    },
    actions: {
        addAction({ dispatch, commit, state, getter }, i) {
            commit("addfn", i)
        },
        [ADD_INDEX.action_type]({ dispatch, commit, state, getter }, _this) {
            return new Promise(function(resolve) {
                _this.axios.get("/api/index").then(function(data) {
                    commit(ADD_INDEX.mutations_type, data.data)
                    resolve("ok")
                })
            })
        },
        [ADD_TAB.action_type]({ dispatch, commit, state, getter }, _this) {
            dispatch(ADD_INDEX.action_type, _this).then(function(data) {
                _this.axios.get("/api/tab").then(function(datas) {
                    commit(ADD_TAB.mutations_type, datas.data)
                })
            })
        }
    }

}