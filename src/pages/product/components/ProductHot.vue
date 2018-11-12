<template>
	<div class="hot-wrapper">
		<div class="hot-title">
			<h2>热门文章推按 / Top 10</h2>
		</div>
		<ul class="hot-news">
			<li v-for="item of list">
				新闻标题会很长新闻标题会很长新闻标题会很长新闻标题会很长新闻标题会很长新闻标题会很长新闻标题会很长新闻标题会很长
			</li>
		</ul>
		<div class="hot-title">
			<h2>文章点击推荐 / Top 10</h2>
		</div>
		<ul class="hot-news">
			<li v-for="item of list">
				新闻标题会很长新闻标题会很长新闻标题会很长新闻标题会很长新闻标题会很长新闻标题会很长新闻标题会很长新闻标题会很长
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		name:"ProductHot",
		data (){
			return {
				list:[1,2,3,4,5,6,7,8,9,10]
			}
		}
	}
</script>
<style lang="scss" scoped>
@import '~styles/global.scss';
.hot-title{
	margin-top: 10px;
	padding-bottom: 5px;
	border-bottom: 1px solid #ccc;
	h2{
		font-size: 16px;
		color:#444;
	}
}
.hot-news{
	margin-top:10px;
	li{
		@extend %white_space;
		font-size: 16px;
		margin-top:10px;
		counter-increment: listxh;
        &:hover{
        	text-shadow:1px 4px 4px #444;
        	@include transition(text-shadow,1s,linear);
        }
		&:before{
			content:counter(listxh);
			padding:2px 6px;
			color:white;
			background: #444;
		}
		&:first-child:before,
		&:nth-child(2):before,
		&:nth-child(3):before{
			background: #3598db;
		}
		&:last-child:before{
			padding:2px;
		}
	}
}
</style>