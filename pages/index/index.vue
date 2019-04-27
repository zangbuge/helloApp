<template>
	<view class="content">
        <image class="logo" src="/static/logo.png"></image>
		<view>
            <text class="title">{{title}}</text>
        </view>
		<button @click="login();">登录</button>
		<button @click="regist();">注册</button>
		<button @click="changeUser();">切换账户</button>
		<button @click="otherWay();">其他登录方式</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			/**
			 * 登录
			 */
			login () {
				uni.navigateTo({
					url : '../login/login'
				});
			}
			
			/**
			 * 注册
			 */
			,regist () {
				//提示框,自动关闭
				uni.showToast({
					title: '您已经注册了',
					duration: 2000
				});
			}
			
			/**
			 * 切换账户
			 */
			,changeUser () {
				//模态框
				uni.showModal({
					title : '切换账户',
					content : '这是一个模态窗',
					mask : true, //是否显示透明蒙层，防止触摸穿透, 默认false
					duration : 3000 ,//提示延迟时间
					success : function(res){ //接口调用成功的回调函数
						if (res.confirm) {
							console.log('用户点击确定');
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					},
					fail : function(res){ //接口调用失败的回调函数
						console.log(res.errMsg);
					}
				})
			}
			
			/**
			 * 其他登录方式
			 */
			,otherWay () {
				//选择框
				uni.showActionSheet({
					itemList: ['QQ', '微信', '支付宝'],
					success: function (res) {
						console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
					},
					fail: function (res) {
						console.log(res.errMsg);
					}
				});
			}

		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
	}
    .logo{
        height: 200upx;
        width: 200upx;
        margin-top: 200upx;
    }
	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
