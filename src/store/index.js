import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        goods: [],
        seller: []
    },
    getters: {
        selectedFoods(state) {
            let foods = [];
            state.goods.forEach((good) => {
                good.foods.forEach((food) => {
                    if(food.count > 0){
                        foods.push(food);
                    }
                });
            });
            return foods;
        },
        selectedFoodsCounter(state, getters) {
            return getters.selectedFoods.length;
        }
    },
    mutations: {
        setGoods(state, list) {
            list.forEach(good => {
                    good.foods.forEach(food => {
                        food.count = 0;
                    });
                });
            state.goods = list;
        },
        setSeller(state, list) {
            state.seller = list;
        },
        // 购物车：添加
        foodPlus(state, food) {
            food.count ++;
        },
        // 购物车：减少
        foodSub(state, food) {
            food.count--;
        },
        // 清空购物车
        clearShopCart(state) {
            state.goods.forEach(good => {
                good.foods.forEach(food => {
                    food.count = 0;
                })
            });
        }
    },
    actions: {
        fetchGoods(context) {
            Vue.http.get('/api/goods').then(response => {
                const list = response.body.data;
                context.commit('setGoods', list);
            }, response => {});
        },
        fetchSeller(context) {
            Vue.http.get('/api/seller').then(response => {
                context.commit('setSeller', response.body.data);
            }, response => {});
        }
    }
});

export default store;
