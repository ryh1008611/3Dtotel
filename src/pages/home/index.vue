<template>
	<view>
		<!-- <image class="logo" src="/static/logo.png"></image> -->
		<view>			
			<view class="home_tab">
				<view class="home_table_inner">
				<uniSegmentedControl
					:values="items.map(v=>v.title)"
					:current="curren"
					@clickItem="onClickItem"
					style-type="text"
					active-color="#d4237a"
				 /> 
				</view>
				<view class="home_table_search">
					S
				</view>
			</view>
        	<view>
            	<view v-if="current === 0">
                	<recommend></recommend>
            	</view>
            	<view v-if="current === 1">
                	<classification></classification>
            	</view>
            	<view v-if="current === 2">
                	<newest></newest>
            	</view>
				<view v-if="current === 3">
                <nearby></nearby>
            	</view>
        	</view>
		</view>
	</view>
</template>

<script>
import newest from "./components/newest"
import nearby from "./components/nearby"
import classification from "./components/classification"
import recommend from "./components/recommend"
import { uniSegmentedControl  } from "@dcloudio/uni-ui"
	export default {
		components: { newest, nearby, classification, recommend, uniSegmentedControl },
		data() {
			return {
				items: [
					{
						title: '推荐'
					},
					{
						title: '分类'
					},
					{
						title: '最新'
					},
					{
						title: '地图'
					}
				],
            current: 0
			}
		},
		onLoad() {

		},
		methods: {
			onClickItem(e) {
            if (this.current !== e.currentIndex) {
                this.current = e.currentIndex;
            }
        }
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin: 200rpx auto 50rpx auto;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	.home_tab{
		position: relative;
	}
	.home_table_inner{
		width: 60%;
		margin: 0 auto;
	}
	.home_table_search{
		position: absolute;
		top: 50%;
		transform:translateY(-50%);
		right:5%;
	}
</style>
