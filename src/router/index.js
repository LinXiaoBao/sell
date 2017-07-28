import Vue from 'vue'
import Router from 'vue-router'

import goods from '@/components/goods/goods'
import comments from '@/components/comments/comments'
import business from '@/components/business/business'

Vue.use(Router)

export default new Router({
  routes: [{
	  	path: '/goods',
	  	name: 'goods',
	  	component: goods
	}, {
	  	path: '/comments',
	  	name: 'comments',
	  	component: comments
	}, {
	  	path: '/business',
	  	name: 'business',
	  	component: business
	}, { 
		path: '*', 
		redirect: { 
			name: 'goods' 
		}
	}]
})
