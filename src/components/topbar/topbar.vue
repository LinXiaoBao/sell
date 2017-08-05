<template>
    <div class="header">
        <div class="content-wrapper">
            <div class="avatar">
                <img :src='seller.avatar'>
            </div>
            <div class="content">
                <div class="title">
                    <span class="brand"></span>
                    <span class="name">{{seller.name}}</span>
                </div>
                <div class="description">
                    {{seller.description}}/{{seller.deliveryTime}}分钟送达
                </div>
                <div v-if="seller.supports" class="support">
                    <span class="icon" :class="classMap[seller.supports[0].type]"></span>
                    <span class="text">{{seller.supports[0].description}}</span>
                </div>
            </div>
            <div v-if='seller.supports' class="support-count" @click="this.changFlag">
                <span class="count">{{seller.supports.length}}个</span>
            </div>
        </div>
        <div class="bulletin" @click='this.changFlag'><span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
        </div>
        <div class="background">
            <img :src="seller.avatar">
        </div>
        <div v-show="this.flag" class="detail-wrapper">
            <div class="detail">
                <div class="content clearfix">
                    <h1 class="name">{{seller.name}}</h1>
                    <div class="star">
                        <stars :size='48' :score='seller.score'></stars>
                    </div>
                    <div class="title">
                        <div class="line"></div>
                        <div class="text">优惠信息</div>
                        <div class="line"></div>
                    </div>
                    
                    <div v-if="seller.supports" class="d-supports">
                        <div class="support-item"
                             v-for='item of seller.supports'>
                            <span class="icon" 
                                :class="classMap[item.type]">
                            </span>
                            <span class="text">
                            {{item.description}}
                            </span>
                        </div>
                    </div>

                    <div class="title">
                        <div class="line"></div>
                        <div class="text">商家公告</div>
                        <div class="line"></div>
                    </div>
                    <div class="det-bullertin">
                        {{seller.bulletin}}
                    </div>

                </div>
                <div class="close">
                    <i class="el-icon-close" @click="changFlag"></i>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import stars from '../stars/stars.vue'

export default {
    components: {
        stars
    },
    data() {
            return {
                flag: false,
                classMap : ['decrease', 'discount', 'guarantee', 'invoice', 'special']
            }
        },
        created() {
            this.$store.dispatch('fetchSeller');
        },
        computed: {
            seller() {
                return this.$store.state.seller
            }
        },
        methods: {
            changFlag() {
                if(this.flag === false){
                    this.flag = true;
                }else{
                    this.flag = false;
                }
            }

        }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.header {
    position: relative;
    text-align: left;
    color: rgb(255, 255, 255);
    background-color: rgba(7, 17, 27, 0.2);
    font-weight: 200;
    height: 134px;
    overflow: hidden;
    .content-wrapper {
        position: relative;
        font-size: 0;
        padding: 24px 12px 18px 24px;
        .avatar {
            display: inline-block;
            img {
                width: 64px;
                height: 64px;
                border-radius: 2px;
            }
        }
        .content {
            display: inline-block;
            margin-left: 16px;
            vertical-align: top;
            .title {
                margin: 2px 0 8px 0;
                .brand {
                    display: inline-block;
                    width: 30px;
                    height: 18px;
                    background-size: 100%;
                    background-repeat: no-repeat;
                    .bg-image('brand');
                }
                .name {
                    display: inline-block;
                    vertical-align: top;
                    margin-left: 6px;
                    font-size: 16px;
                    font-weight: bold;
                    line-height: 18px;
                }
            }
            .description {
                font-size: 12px;
                line-height: 12px;
                margin-bottom: 10px;
            }
            .support {
                margin-bottom: 2px;
                .icon {
                    display: inline-block;
                    width: 12px;
                    height: 12px;
                    margin-right: 4px;
                    background-size: 100%;
                    background-repeat: no-repeat;
                }
                .text {
                    display: inline-block;
                    font-size: 10px;
                    line-height: 12px;
                    vertical-align: top;
                }
            }
        }
        .support-count {
            position: absolute;
            bottom: 18px;
            right: 12px;
            padding: 0 8px;
            border-radius: 8px;
            line-height: 24px;
            font-size: 10px;
            background-color: rgba(0, 0, 0, 0.2);
        }
    }
    .bulletin {
        padding: 0 22px 0 12px;
        height: 28px;
        line-height: 28px;
        background-color: rgba(7, 17, 27, 0.2);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        .bulletin-title {
            vertical-align: top;
            margin-top: 8px;
            display: inline-block;
            width: 22px;
            height: 12px;
            .bg-image('bulletin');
            background-size: 100%;
            background-repeat: no-repeat;
        }
        .bulletin-text {
            vertical-align: top;
            font-size: 10px;
            margin: 0 4px;
        }
    }
    .background {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        filter: blur(10px);
        img {
            width: 100%;
        }
    }
    .detail-wrapper {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
        overflow: auto;
        background-color: rgba(7, 17, 27, 0.8);
        text-align: center;
        .detail {
            min-height: 100%;
            height: auto !important;
            height: 100%;
            width: 80%;
            margin: 0 auto;
            position: relative;
            .content {
                padding-top: 64px;
                padding-bottom: 60px;
                .name {
                    font-size: 16px;
                    line-height: 16px;
                    font-weight: 700;
                    margin-bottom: 16px;
                }
                .star{
                    height: 24px;
                }
                .title {
                    display: flex;
                    width: 100%;
                    margin: 28px auto 24px;
                    .line{
                        flex: 1;
                        height: 14px;
                        position: relative;
                        bottom: 7px;
                        border-bottom: 1px solid rgba(255, 255, 255, 0.2);  
                    }
                    .text {
                        flex: 1;
                        font-size: 14px;
                        font-weight: 700;
                        line-height: 14px;
                    }
                }
                .d-supports{
                    text-align: left;
                    .support-item {
                        margin-bottom: 12px;
                        font-size: 0;
                        .icon{
                            display: inline-block;
                            width: 16px;
                            height: 16px;
                            margin-right: 6px;
                            background-size: 100%;
                            background-repeat: no-repeat;
                            position: relative;
                            top: 4px;
                        }
                        .text {
                            font-size: 12px;
                            font-weight: 200;
                            line-height: 24px;
                        }
                    }
                }
                .det-bullertin {
                    padding: 0 4%;
                    text-align: left;
                    font-size: 12px;
                    line-height: 24px;
                    font-weight: 200;
                }
            }
            .close {
                width: 100%;
                height: 60px;
                line-height: 60px;
                position: absolute;
                bottom: 0;
                clear: both;
            }
        }
    }
}

.decrease {
    .bg-image('decrease_1')
}

.discount {
    .bg-image('discount_1')
}

.guarantee {
    .bg-image('guarantee_1')
}

.invoice {
    .bg-image('invoice_1')
}

.special {
    .bg-image('special_1')
}

.bg-image(@url) {
    @2xUrl: "@2x.png";
    @3xUrl: "@3x.png";
    background-image: url("@{url}@{2xUrl}");
    @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
        background-image: url("@{url}@{2xUrl}");
    }
}
</style>
