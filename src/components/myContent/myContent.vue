<template>
  <div class="content">
  	<router-view></router-view>

  	<shoppingCart></shoppingCart>
  </div>
</template>

<script>
import shoppingCart from '../shoppingCart/shoppingCart.vue'

export default {
	components: {
		shoppingCart
	},
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content{
	box-sizing: border-box;
	height: calc(100% - 174.5px);
	padding-bottom: 58px;
}
</style>
