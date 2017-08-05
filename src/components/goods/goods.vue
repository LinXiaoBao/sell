<template>
  	<div class="wrap">
  		<div class="menu-box">
  			<div class="menu-wrapper">
  				<div 
  					class="menu-item border-1px" 
  					v-for='item in goods'>
  					{{item.name}}
				</div>
	  		</div>
  		</div>
  		<div class="goods-box">
  			<div class="goods-wrapper">
  				<ul>
  					<li class="food-list" v-for="(itemGood, indexGood) in goods">
  						<h1>{{itemGood.name}}</h1>
  						<ul>
  							<li v-for='(itemFood, indexFood) in itemGood.foods' class="food-item border-1px">
  								<div class="icon">
  									<img :src="itemFood.icon">
  								</div>
  								<div class="content">
  									<h2>{{itemFood.name}}</h2>
  									<p v-if='itemFood.description'
  										class="desc">
  										{{itemFood.description}}
  									</p>
  									<div class="extra">
  										<span class="count">月售{{itemFood.sellCount}}份</span><span>好评率{{itemFood.rating}}%</span>
  									</div>
  									<div class="price">
  										<span class="now">¥{{itemFood.price}}</span><span class="old" v-show='itemFood.oldPrice'>¥{{itemFood.oldPrice}}</span>
  									</div>
  									<div class="cart-wrapper">
  										<cartcontrol 
  											:food="itemFood">
  										</cartcontrol>
  									</div>
  								</div>
  							</li>
  						</ul>
  					</li>
  				</ul>
  			</div>
  		</div>
  	</div>
</template>

<script>
import cartcontrol from '../catrcontrol/cartcontrol.vue'
export default {
	components: {
		cartcontrol
	},
  	name: 'goods',
  	created() {
  		this.$store.dispatch('fetchGoods');
	},
	computed: {
		goods() {
			return this.$store.state.goods
		}
	}
}
</script>

<style lang="less" scoped>
.wrap{
	width: 100%;
	height: 100%;
	display: flex;
	.menu-box, .goods-box{
		height: 100%;
		overflow-x: hidden;
		overflow-y: auto;
		-webkit-overflow-scrolling : touch;
				overflow-scrolling : touch;
		&::-webkit-scrollbar { 
		    display: none; 
		    height: 0;
		    width: 0;
		}
	}
	.menu-box{
		background-color: #f3f5f7;
		flex: 0 0 80px;
		text-align: center;
		.menu-wrapper {
			.menu-item {
				width: (80-12*2)px;
				padding: 20px 0;
				margin:0 12px;
				line-height: 14px;
				font-size: 12px;
				font-weight: 200;
				// vertical-align: center;
			}

		}
	}
	.goods-box{
		flex-grow: 1;
		.goods-wrapper{
			width: 100%;
			.food-list {
				width: 100%;
				h1 {
					width: 100%;
					height: 26px;
					line-height: 26px;
					border-left: 2px solid #d9dde1 ;
					padding-left: 14px;
					background-color: #f3f5f7;  
					font-size: 12px;
					color: rgb(147, 153, 159);
				}
				.food-item {
					display: flex;
					margin: 0 18px;
					padding: 18px 0;
					&:last-child{
						&:after{
							display: none;
						}
					}
					.icon{
						flex: 0,0,57px;
						img{
							width: 57px;
						}
					}
					.content {
						flex: 1;
						padding-left: 10px;
						color: rgb(143,157,159);
						line-height: 10px;
						position: relative;
						h2 {
							font-size: 14px;
							line-height: 14px;
							color: rgb(7, 17, 27);
							padding: 2px 0 8px;
						}
						.desc{
							font-size: 10px;
							line-height: 14px;
							margin-bottom: 8px;
						}
						.extra {
							margin-bottom: 5px;
							span{
								font-size: 10px;
								line-height: 10px;
							}
							.count{
								margin-right: 12px;
							}
						}
						.price{
							font-size: 0;
							.now {
								line-height: 24px;
								font-size: 14px;
								color: #f01414;
								margin-right: 8px;
								font-weight: 700;
							}
							.old{
								font-size: 10px;
								text-decoration: line-through;
							}
						}
						.cart-wrapper{
							position: absolute;
							right: 0;
							bottom: -12px;
						}
					}
				}
			}
		}
	}
}
</style>
