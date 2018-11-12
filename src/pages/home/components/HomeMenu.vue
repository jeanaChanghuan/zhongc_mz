<template>
	<nav class="nav-wrapper">
		<ul class="nav">
				<router-link class="nav_menu"  active-class="active" to="/index" tag="li"  exact>集团首页</router-link><router-link class="nav_menu" active-class="active" to="/product"  tag="li">产品列表</router-link><li class="nav_menu"  tag="li">新闻列表
			</li><li class="nav_menu"  tag="li">
				内容页面
			</li><li class="nav_menu"  tag="li">
				关于我们
			</li>
		</ul>
	</nav>
</template>
<script type="text/javascript">

	export default{
		name:"HomeMenu"
	}
	
</script>
<style type="text/css"  scoped>
	.nav-wrapper{
		width:100%;
		height:60px;
		background: #3598db;
	}
	.nav{
		width:1000px;
		margin:0 auto;
		color:white;
	}
	
	.nav_menu{
		display: inline-block;
		width:90px;
		height:60px;
		line-height: 60px;
		font-size: 16px;
		text-align: center;
		border-right: 1px solid #2F89C5;
		transition: background 1s linear;
		-webkit-transition:background 1s linear;
		-moz-transition:background 1s linear;
		-ms-transition:background 1s linear;
		-o-transition:background 1s linear;
	}
	.nav_menu:hover,.active {
		background-color: #2F89C5;
	}

</style>