<template>
  <div class="tab">
  	<div class="item-tab">商品</div>
  	<div class="item-tab">评价</div>
  	<div class="item-tab">商家</div>
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
		}
	}
</style>
