<template>
	<view>
		<view>以下为子页面信息</view>
		<div> {{message}}</div>
		<button @click="setMsg">传值到父页面</button>
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
		},
		methods: {
			setMsg () {
				this.$emit('receiveMsg' ,'hello world')
			}
		}
		
	}
	
</script>

<style>
</style>
