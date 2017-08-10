<template>
	<div class="shopping-wrapper">
	  	<div class="shopping-cart">
	     <div class="left" @click='toggleStatus'>
		     <div class='icon-count'>
		     	<div class="cart-icon db-center" :class='cartClass'>
		     		<div class="icon-shopping_cart shopCart" 
		     			:class='shopIconClass'>
		     			<span class="totalCount" v-show='totalCount'>
		     				{{totalCount}}
		     			</span>
		     		</div>
		     	</div>
		     	<div class="total-price" :class='totalPriceClass'>
		     		¥{{totalPrice}}
		     	</div>
		     </div>
		     <div class="delivery-price">
		     	另需要配送费¥{{seller.deliveryPrice}}元
		     </div>
	    	</div> 
	     <div class="min-price" :class='payclass'>
	     	{{payDesc}}
	     </div>
	    </div>
	    <div class="shopcart-list-wrapper" v-show="isShow">
	    	<div class="shopcart-list">
	    		<div class="list-header">
	    			<h1 class="title ">购物车</h1>
	    			<div class="empty-wrapper">
	    			<span class="empty" @click='empty'>清空</span>
	    			</div>
	    		</div>
	    		<div class="list-content">
	    			<ul>
	    				<li v-for="food in selectedFoods" class="border-1px">
	    					<span class="name">{{food.name}}</span>
	    					<div class="right">
	    						<span class="price">¥{{food.price}}</span>
	    						<span class="cartcontrol-wrapper">
	    							<cartcontrol :food='food'></cartcontrol>
	    						</span>
	    					</div>
	    				</li>
	    			</ul>
	    		
	    		</div>
	    	</div>
	    </div>
	</div>    
</template>

<script>
import cartcontrol from '../catrcontrol/cartcontrol.vue'

export default {
  	name: 'shoppingCart',
  	components: {
  		cartcontrol
  	},
  	data() {
        return {
            isShow: false,
        }
    },
  	methods: {
  		toggleStatus() {
            if((this.isShow === false)&&(this.selectedFoods.length)){
                this.isShow = true;
            }else{
                this.isShow = false;
            }
        },
        empty() {
        	this.$store.commit('clearShopCart');
        }    
  	},	
  	computed: {
  		selectedFoods() {
			return this.$store.getters.selectedFoods;
		},
        seller() {
            return this.$store.state.seller
        },
        totalPrice(){
       		let total = 0;
            this.selectedFoods.forEach((element) =>{
            	total += element.price * element.count; 
            });
            return total;
        },
        totalCount(){
        	let count = 0;
        	this.selectedFoods.forEach((food) =>{
        		count += (food.count-0);
        	});
        	return count;
        },
        cartClass(){
        	if(this.totalCount === 0){
        		return 'nofood';
        	}else {
        		return 'hasfood'
        	}
        },
        shopIconClass() {
        	if(this.totalCount === 0){
        		return 'nofood';
        	}else {
        		return 'hasfood';
        	}
        },
        totalPriceClass() {
        	if(this.totalCount === 0){
        		return 'nofood';
        	}else {
        		return 'hasfood';
        	}
        },
        payclass() {
        	if(this.totalPrice<this.seller.minPrice){
        		return 'not-enough';
        	}else{
        		return 'enough';
        	}
        },
        payDesc() {
        	if(this.totalPrice === 0) {
        		return `¥${this.seller.minPrice}元起送`;
        	}else if(this.totalPrice<this.seller.minPrice){
        		return `还差${this.seller.minPrice-this.totalPrice}元起送`
        	}else {
        		return '去结算';
        	}
        }
    },
    watch: {
    	selectedFoods(val) {
    		if(val.length <= 0) {
    			this.isShow = false;
    		}
    	}
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.shopping-wrapper{
	position: fixed;
	width: 100%;
	left: 0;
	bottom: 0;
	z-index: 100;
	.shopping-cart{
		display: flex;
		width: 100%;
		height: 48px;
		z-index: 999;
		background: #141d27;
		.left{
			flex: 1;
			display: flex;
			.icon-count{
				flex: 0 0 125px;
				position: relative;
				.cart-icon{
					width: 44px;
					height: 44px;
					border-radius:100%;
					border:6px solid #141d27;
					position: absolute;
					left: 12px;
					bottom: 2px;
					&.nofood {
						background-color: #2b333b;
					}
					&.hasfood {
						background-color: rgb(0, 160, 220);
					}
					.shopCart{
						font-size: 24px;
						position: relative;
						&.nofood {
							color: rgba(255,255,255,0.4);
						}
						&.hasfood {
							color: #fff;
						}
						.totalCount{
							display: inline-block;
							position: absolute;
							top: -15px;
							left: 20px;
							font-size: 9px;
							font-weight: 700;
							width: 24px;
							line-height: 16px;
							background-color: rgb(240, 20, 20);
							text-align: center;
							border-radius: 6px; 
							box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);

						}
					}
				}
				.total-price{
					float: right;
					padding: 0  12px 0 18px ;
					font-size: 16px;
					font-weight: 700;
					line-height: 48px;
					&.nofood{
						color: rgba(255, 255, 255,0.4);
					}
					&.hasfood{
						color: #fff;
					}
				}
			}
			.delivery-price{
				flex: 1;
				height: 100%;
				font-size: 12px;
				color: rgba(255, 255, 255, 0.4);
				line-height: 48px;
				font-weight: 700;
				text-align: left;
				margin-left: 12px;
			}

		}
		.min-price {
			flex: 0 0 89px;
			height: 100%;
			padding: 0 8px;
			font-size: 12px;
			font-weight: 700;
			line-height: 48px;
			text-align: center;
			&.not-enough{
				background-color: #2b333b;
				color: rgba(255, 255, 255, 0.4);
			}
			&.enough {
				background-color: #00b43c;
				color: #fff;
			}
		}

	}
	.shopcart-list-wrapper{
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background-color: rgba(7,17,27,0.6);
		z-index: -1;
		.shopcart-list{
			position: fixed;
			left: 0;
			bottom: 0;
			width: 100%;
			background-color: #fff;
			max-height: 611px;
			
			.list-header{
				display: flex;
				font-size: 0;
				height: 40px;
				background-color: #f3f5f7;
				border-bottom: 1px solid rgba(7, 17, 27, 0.1);
				padding: 0 18px;
				.title{
					flex: 1;
					display: inline;
					font-size: 14px;
					line-height: 40px;
					color: rgb(7, 17, 27);
					font-weight: 200;
				}
				.empty-wrapper{
					flex: 1;
					text-align: right;
					.empty {
					display: inline;
					font-size: 12px;
					line-height: 40px;
					color: rgb(0, 160, 220);
				}
				}
				
			}
			.list-content{
				font-size: 14px;
				max-height: 265px;
				padding: 0 18px;
				overflow-x: hidden;
				overflow-y: auto;
				&::-webkit-scrollbar { 
		    		display: none; 
		    		height: 0;
		    		width: 0;
				}
				ul{
					&:last-child{
						&:after{
							display: block;
							content: '';
							height: 58px;
							width: 100%;
						}
					}
				}
				li{
					display: flex;
					.name {
						flex: 1;
						line-height: 48px;
						font-size: 14px;
						color: rgb(7, 17, 27);
						height: 100%;
					}
					.right {
						flex: 1;
						text-align: right;
						.price{
							line-height: 48px;
							font-size: 14px;
							color: rgb(240, 20, 20);
							font-weight: 700;
						}
						.cartcontrol-wrapper{
							display: inline-block;
							position: relative;
							top: 4px;
						}
					}
				}
				
			}
		}
	}
}
</style>
