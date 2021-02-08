<template>
  <view>
    <uniSwiperDot :info="showList" :current="current" field="content" :mode="mode">
    <swiper class="swiper-box" @change="change">
        <swiper-item v-for="(item ,index) in showList" :key="index">
            <view class="swiper-item">
                <img :src="item.url">
            </view>
        </swiper-item>
    </swiper>
    2
</uniSwiperDot>
     <!-- <uni-calendar 
        :insert="true"
        :lunar="true" 
        :start-date="'2019-3-2'"
        :end-date="'2019-5-20'"
         ></uni-calendar> -->
    <button @click="test()">test</button>
  </view>
</template>

<script>
import uniSwiperDot from "@/components/uni-swiper-dot/uni-swiper-dot.vue"
import { login } from "@/Api/user"
// import { uniCalendar } from './@dcloudio/uni-ui'
export default {
    components: { uniSwiperDot },
 data() {
        return {
            current: 0,
            mode: 'round',
            showList: [
                {
                    'id': 1,
                    'url': '/static/show/1.jpg'
                },
                {
                    'id': 2,
                    'url': '/static/show/2.jpg'
                },
                {
                    'id': 3,
                    'url': '/static/show/3.jpg'
                },
                {
                    'id': 4,
                    'url': '/static/show/4.jpg'
                },
                {
                    'id': 5,
                    'url': '/static/show/5.jpg'
                }
            ]
        }
    },
    methods: {
        change(e) {
            this.current = e.detail.current;
        },
        test() {
            // console.log('sds')
        //    login().then(res => {
        //        console.log(res)
        //    })
        wx.login({
            success: res => {
                console.log(res)
            }
        })
        }
    },
    onLoad() {
          this.request({
                url: "https://api.jisuapi.com/weather/query"
            }).then(res => {
                console.log(123123)
            })
    }
}
</script>

<style>

</style>