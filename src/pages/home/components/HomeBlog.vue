<template>
	<div class="blog-wrapper">
		<div class="blog-title">
			<h2>精彩博文</h2>
		</div>
		<ul class="blog-img">
			<li>
				<img src="@/assets/img/bowen_06.jpg"/>
				<p>精彩博文详细题目</p>
			</li>
			<li>
				<img src="@/assets/img/bowen_06.jpg"/>
				<p>精彩博文详细题目</p>
			</li>
		</ul>
		<ul class="blog-news">
			<li v-for="item of listBlog">
				新闻标题会很长新闻标题会很长新闻标题会很长新闻标题会很长新闻标题会很长新闻标题会很长新闻标题会很长新闻标题会很长
			</li>
		</ul>
		<!--职位信息-->
		<div class="post-title">
			<h2>职位信息</h2>
		</div>
		<ul class="post-news">
			<li v-for="item of listPost">
				新闻标题会很长新闻标题会很长新闻标题会很长新闻标题会很长新闻标题会很长新闻标题会很长新闻标题会很长新闻标题会很长
			</li>
		</ul>
		<!--联系我们-->
		<div class="post-title">
			<h2>联系我们</h2>
		</div>
		<ul class="">
				<img src="@/assets/img/about_13.jpg"/>
		</ul>
	</div>
</template>
<script>
	export default{
		name:"HomeBlog",
		data (){
			return{
				listBlog:[1,2,3],
				listPost:[1,2,3,4,5,6,7,8,9,10]
			}
		}
	}
</script>
<style lang="scss" scoped>
@import '~styles/global.scss';
	.blog-wrapper{
		width:100%;
		height:auto;
	}
	.blog-title{
		@extend %home_title;
	}
	.blog-img{
		margin-top:10px;
		li{
			font-size:16px;
			display: inline-block;
			text-align:center;
			&:last-child{
				margin-left:4px;
			}
		}
	}
	.blog-news{
		font-size:16px;
		li{
			@extend %white_space;
			counter-increment: listxh;
			padding-top: 3px;
			&:hover{
				text-shadow: 1px 4px 4px #444;
				-webkit-text-shadow:1px 4px 4px #444;
				-moz-text-shadow:1px 4px 4px #444;
				@include transition(text-shadow,1s,linear); 
			}
			&:before{
				content:counter(listxh);
				background: #3598db;
				color:white;
				padding:2px 5px;
			}
			
		}
	}
	/*职位信息*/
	.post-title{
		@extend %home_title;
		margin-top: 20px;
	}
	.post-news{
		margin-top: 15px;
		li{
			@extend %white_space;
			font-size:16px;
			counter-increment: listxh;
			margin-top:10px;
			&:hover{
				text-shadow:1px 4px 4px #444;
				-webkit-text-shadow:1px 4px 4px #444;
				-moz-text-shadow:1px 4px 4px #444;
				@include transition(text-shadow,1s,linear);
			}
			&:before{
				content:counter(listxh);
				background: #444;
				padding:2px 6px;
				color:white;
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