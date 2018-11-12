<template>
	<div class="list-wrapper">
		<div class="list-title">
			<h2>您现在的位置：首页 > 产品列表</h2>
		</div>
		<ul class="list-content">
			<li v-for="item of list">
				<img :src="item.imgUrl"/>
				<p>{{item.title}}</p>
			</li>
		</ul>
		<div class="page">
			<Page :total="100" />
		</div>
		
	</div>
</template>
<script>
	export default {
		name:"ProductList",
		props:{
			list:Array
		}
	}
</script>
<style lang="scss" scoped>
@import '~styles/global.scss';
	.list-wrapper {
		width: 100%;
		height: auto;
	}
	.list-title {
		padding-bottom: 5px;
		border-bottom: 1px solid #ccc;
		h2 {
			color:#444;
			font-size:16px;
		}
	}
	.list-content {
		margin-top: 10px;
		li {
			display:inline-block;
			margin-right:10px;
			margin-top:5px;
			&:nth-child(3n){
				margin-right:0;
			}
			&:first-child,
			&:nth-child(2),
			&:nth-child(3)
			 {
				margin-top:0;
			}
		}
		img {
			width:200px;
			height:125px;
			border-radius: 10px;
			&:hover{
				animation: move 1s linear;
			}
			
		}

		p{
			text-align: center;
			font-size:15px;
		}
	}
	.page {
		margin-top:10px;
		margin-bottom: 10px;
	}
	@-webkit-keyframes move {
		0%{
			-webkit-transform: rotate(0deg) scale(1);
			transform:rotate(0deg) scale(1);
	   	 	border-radius:1px;
	    	opacity: 0.5;
		}
		
		40%{
		  	-webkit-transform: rotate(60deg) scale(2);
			transform:rotate(60deg) scale(2);
	    	opacity: 0.9;
		 }
		 60%{
		 	-webkit-transform: rotate(30deg) scale(1.3);
			transform:rotate(30deg) scale(1.3);
	   	 	border-radius:110px;
	    	opacity: 0.2;
		}
		 90%{
			-webkit-transform: rotate(0deg) scale(0.8);
			transform:rotate(0deg) scale(0.8);
			border-radius: 10px;
			opacity: 1
		 }
	}
	@-moz-keyframes move {
		0%{
			-moz-transform: rotate(0deg) scale(1);
			transform:rotate(0deg) scale(1);
	   	 	border-radius:1px;
	    	opacity: 0.5;
		}
		
		40%{
		  	-moz-transform: rotate(60deg) scale(2);
			transform:rotate(60deg) scale(2);
	    	opacity: 0.9;
		 }
		 60%{
		 	-moz-transform: rotate(30deg) scale(1.3);
			transform:rotate(30deg) scale(1.3);
	   	 	border-radius:110px;
	    	opacity: 0.2;
		}
		 90%{
			-moz-transform: rotate(0deg) scale(0.8);
			transform:rotate(0deg) scale(0.8);
			border-radius: 10px;
			opacity: 1
		 }
	}
</style>