<template>
	<div class="footer-wrapper">
		<div class="footer-content">
			<ul>
				<li>版权信息</li>
				<li>站点地图</li>
				<li>联系我们</li>
			</ul>
			<p>@censoft.com 京ICP证00000001号</p>
		</div>
	</div>
</template>
<script>
	export default{
		name:"HomeFooter"
	}
</script>
<style lang="scss" scoped>
@import '~styles/global.scss';
	.footer-wrapper{
		width:100%;
		height:100px;
		margin-top:10px;
		background: rgb(53, 152, 220);
		@extend %middle_center;
		
	}
	.footer-content{
		font-size:16px;
		color:white;
		li{
			display: inline-block;
			padding-right:20px;
			margin-right:20px;
			border-right:1px solid white;
			margin-bottom: 5px;
			&:last-child{
				border:none;
			}
		}
	}
</style>