<template>
	<view>
		<view>以下为子页面信息</view>
		<div> {{message}}</div>
	</view>
</template>

<script>
	export default {
		name: '登录成功页面',
		props: ["message"],
		data () {
			return {
				msg : ""
			}
		}
	}
	
</script>

<style>
</style>
