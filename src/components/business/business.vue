<template>
  <div class="business">
    <div class="topbar">
      <div class="header border-1px">
        <div class="title">{{seller.name}}</div>
        <div class="star-sellcount">
          <span class="star-wrapper">
            <stars :size='36' :score='seller.score'></stars>
          </span>
          <span class="sellcount">月售{{seller.sellCount}}单</span>
        </div>
      </div>
      <div class="content">
        <div class="content-item">
          <div class="name">起送价</div>
          <div class="detail">
            <span class="num">{{seller.minPrice}}</span>
            <span class="unit">元</span>
          </div>
        </div>
        <div class="content-item">
          <div class="name">商家配送</div>
          <div class="detail">
            <span class="num">{{seller.deliveryPrice}}</span>
            <span class="unit">元</span>
          </div>
        </div>
        <div class="content-item">
          <div class="name">平均配送时间</div>
          <div class="detail">
            <span class="num">{{seller.deliveryTime}}</span>
            <span class="unit">分钟</span>
          </div>
        </div>
      </div>
      
    </div>
    <div class="empty border-1px"></div>
  	<div class="bulletin border-1px">
  		<div class="title">公告与活动</div>
  		<div class="text border-1px">{{seller.bulletin}}</div>

        <div v-if="seller.supports" class="d-supports">
          <div class="support-item border-1px"
               v-for='item in seller.supports'>
              <span class="icon" 
                  :class="classMap[item.type]">
              </span>
              <span class="text">
              {{item.description}}
              </span>
          </div>
        </div>
  </div>
  <div class="empty border-1px"></div>
  <div class='pics-wrapper border-1px'>
    <div class="title">商家实景</div>
    <div class="pics-box">
      <div 
        class="pictures clearfix"
        :style="{
          'min-width': picsWidth
        }">
        <div class="fl pic" v-for='pic in seller.pics'>
          <img :src='pic'>
        </div>
      </div>
    </div>
  </div>

  <div class="empty border-1px"></div>

  <div class="info-wrapper">
    <div class='title border-1px'>商家信息</div>
    <div class="info border-1px" v-for='info in seller.infos'>{{info}}</div>
  </div>

 </div> 
</template>

<script>
import stars from '../stars/stars.vue'

export default {
  name: 'business',
  components: {
    stars
  },
  data() {
          return {
              classMap : ['decrease', 'discount', 'guarantee', 'invoice', 'special']
          }
  },
  created() {
      this.$store.dispatch('fetchSeller');
  },
  computed: {
      seller() {
          return this.$store.state.seller;
      },
      picsWidth() {
        return (this.seller.pics.length*126)+'px';
      }
  }
}
</script>

<style lang="less" scoped>
.business {
  width: 100%;
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
  .title{
    font-size: 14px;
    line-height: 14px;
    color: rgb(7, 17, 27);
  }
  .topbar {
    padding: 18px;
    .header {
      padding-bottom: 18px;
      .title {
        margin-bottom: 8px;
      }
      .star-sellcount {
        .star-wrapper{
          display: inline-block;
        }
        .sellcount {
          font-size: 10px;
          line-height: 18px;
          color: rgb(77, 85,93);
          position: relative;
          bottom: 3px;  
        }
      }
    }
    
    .content {
      width: 100%;
      display: flex;
      font-size: 0;
      .content-item {
        flex: 1;
        padding-top: 18px;
        text-align: center;
        .name {
          font-size: 10px;
          line-height: 10px;
          color: rgb(143, 157, 159);
          margin-bottom: 4px;
        }
        .detail {
          color: rgb(7, 17, 27);
          font-weight: 200;
          .num {
            font-size: 24px;
          }
          .unit {
            font-size: 10px;
          }
        }
      }
    }
  }
  .bulletin, .info-wrapper,{
    box-sizing: border-box;
    padding: 18px 18px 0 18px;
    width: 100%;
  }
  .bulletin{
    .text {
      padding: 8px 12px 16px 12px;
      font-size: 12px;
      line-height: 24px;
      font-weight: 200;
      color: rgb(240, 20, 20);
    }
    .d-supports{
      text-align: left;
      .support-item {
          padding: 16px 12px;
          font-size: 0;
          .icon{
              display: inline-block;
              width: 16px;
              height: 16px;
              margin-right: 6px;
              background-size: 100%;
              background-repeat: no-repeat;
              vertical-align: bottom;
          }
          .text {
              padding: 0;
              font-size: 12px;
              font-weight: 200;
              line-height: 16px;
              color: rgb(7, 17, 27);
          }
      }
    }
  }
  .pics-wrapper {
    padding: 18px;
    .title {
      margin-bottom: 12px;
    }
    .pics-box{
      overflow-x: auto;
      &::-webkit-scrollbar { 
        display: none; 
        height: 0;
        width: 0;
      }
      .pictures {
        min-width: 600px;
        .pic{
          width: 120px;
          height: 90px;
          margin-right: 6px;
          overflow: hidden; 
          img{
            width: 100%;
          }
        }
    }
    }
  }
  .info-wrapper{
    .title {
      padding-bottom: 12px;
    }
    .info {
      padding: 12px 16px;
      font-size: 12px;
      font-weight: 200;
      line-height: 16px;
      color: rgb(7, 17, 27);
    }
  }
  .decrease {
    .bg-image('decrease_4')
  }
  .discount {
      .bg-image('discount_4')
  }

  .guarantee {
      .bg-image('guarantee_4')
  }

  .invoice {
      .bg-image('invoice_4')
  }

  .special {
      .bg-image('special_4')
  }

  .bg-image(@url) {
      @2xUrl: "@2x.png";
      @3xUrl: "@3x.png";
      background-image: url("@{url}@{2xUrl}");
      @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
          background-image: url("@{url}@{2xUrl}");
      }
  }
}
</style>
