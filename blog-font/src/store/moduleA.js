import { NAV_INDEX, SHOW_ARTICLE, NAV_TWO } from "./type_mutation"
export default {
    state: {
        navOne: null,
        article: null,
        navTwo: null
    },
    mutations: {
        [NAV_INDEX.mutations_type](state, data) {
            state.navOne = data.data
        },
        [SHOW_ARTICLE.mutations_type](state, data) {
            state.article = data.data
        },
        [NAV_TWO.mutations_type](state, data) {
            state.navTwo = data.data
        }
    },
    getters: {
        numgetter(state) {
            // return "$" + state.a
        }
    },
    actions: {
        addAction({ dispatch, commit, state, getter }, i) {
            // commit("addfn", i)
        },
        [NAV_INDEX.action_type]({ dispatch, commit, state, getter }, _this) {
            return new Promise(function(resolve) {
                _this.axios.get("/api/front_article/getNav").then(function(data) {
                    commit(NAV_INDEX.mutations_type, data.data)
                    resolve("ok")
                })
            })
        },
        [SHOW_ARTICLE.action_type]({ dispatch, commit, state, getter }, _this) {
            return new Promise(function(resolve) {
                _this.axios.get("/api/front_article/getArticleAll").then(function(data) {
                    commit(SHOW_ARTICLE.mutations_type, data.data)
                    resolve("ok")
                })
            })
        },
        [NAV_TWO.action_type]({ dispatch, commit, state, getter }, _this) {
            return new Promise(function(resolve) {
                _this.axios.post("/api/front_article/getClassTwo").then(function(data) {
                    commit(NAV_TWO.mutations_type, data.data)
                    resolve("ok")
                })
            })
        }
    }

}