<template>
  <div class="cartcontrol">
    <div class="cart-decrease">
      <span v-show="food.count>0"
      class="icon-remove_circle_outline" 
      @click='deCart'></span>
    </div>
    <div v-show="food.count>0" class="cart-count">{{food.count}}</div>
    <div class="cart-add">
      <span class="icon-add_circle" @click='addCart'></span>    
    </div>
  </div>
  	
</template>

<script>
import Vue from 'vue'
export default {
  name: 'cartcontrol',
  props:{
    food:{
      type: Object
    }
  },
  methods:{
    addCart() {
      this.$store.commit('foodPlus', this.food);
    },
    deCart() {
      this.$store.commit('foodSub', this.food);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.cartcontrol {
  font-size: 0;
  .cart-decrease, .cart-add{
    display: inline-block;
    padding: 8px;
    i,span {
      font-size: 24px;
      line-height: 24px;
      color: rgb(0, 160, 220);
    }
  }
  .cart-count{
    display: inline-block;
    font-size: 10px;
    line-height: 24px;
    color: rgb(143, 157, 159);
    vertical-align: top;
    padding: 10px 10px 0 10px;
  } 
}
	
</style>
