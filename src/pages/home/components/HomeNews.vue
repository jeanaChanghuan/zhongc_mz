<template>
	<div class="news-wrapper">
		<div class="news-title">
			<h2>集团会员新闻</h2>
		</div>
		<div class="news-wrapper">
			<ul>
				<li class="news—content"
				     v-for="item of list">
						<img :src="item.imgUrl"/>
						<div class="news-desc">
							<div></div>
							<h3>{{item.title}}</h3>
							<p>{{item.desc}}</p>
						</div>
					
				</li>
				
			</ul>
		</div>
	</div>
</template>
<script >
	export default {
		name:"HomeNews",
		props:{
			list:Array
		}
	}
</script>
<style rel="stylesheet/scss" lang="scss"  scoped>
@import '~styles/global.scss';

.news-title{
		@extend %home_title;
	}	
.news—content{
	width:100%;
	height:165px; 
	margin-top:10px;
	 img{	
		width:315px;
		height:165px;
		display: inline-block;
		float:left;
	}
}
.news-desc{
	height:165px;
	width:308px;
	background: rgb(53, 152, 220);
	display: inline-block;
	color:white;
	padding:10px;
	position:relative;
	z-index:2;
	h3{
		height:30px;
		line-height:30px;
		font-size:16px;
		border-bottom: 1px solid white;
		margin-bottom: 5px;
	}
	p{
		font-size:15px;
	}
	div{
		@include triangle();
	}
}
	

</style>