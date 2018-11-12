<template>
	<header class="header">
		<div class="container">
			<div id="logo">
				<img src="@/assets/img/logo.jpg">
			</div>
			<div id="sousuo">
				<Input placeholder="请输入搜索内容" clearable style="width: 200px" />
				<Button type="primary" icon="ios-search">Search</Button>
			</div>
		</div>
	</header> 
</template>
<script type="text/javascript">
	export default{
		name:'HomeHeader'
	}
</script>
<style lang="scss"  scoped>
	.container{
		width:1000px;
		height:110px;
		margin: 0  auto;
		display: flex;
	}
	#logo{
		flex:1;
		margin-left:50px;
		img{
			height:110px;
		}
	}
	#sousuo{
		margin-top: 60px;
	}
	

</style>