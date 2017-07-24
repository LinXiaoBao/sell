<template>
  <div class="tab border-1px">
  	<div class="item-tab">
  		<router-link :to='{ name: "goods" }'>商品</router-link>
  	</div>
  	<div class="item-tab">
  		<router-link :to='{ name: "comments" }'>评价</router-link>
  	</div>
  	<div class="item-tab">
  		<router-link :to='{ name: "business" }'>商家</router-link>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'tab'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
	.tab{
		width: 100%;
		height: 40px;
		line-height: 40px;
		display: flex;
		.item-tab{
			flex: 1;
			text-align: center;
      a{
        display: block;
        font-size: 14px;
        color: rgb(77,85,93);
      }
      .router-link-active{
        color: rgb(240, 20, 20);
      }
		}
	}
</style>
