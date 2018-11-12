<template>
	<div class="active-wrapper">
		<div class="active-title">
			<h2>集团活动</h2>
		</div>
		<ul class="active-img">
			<li class="active-content">
				<img src="@/assets/img/hd2.jpg"/>
			</li>
			<li class="active-content">
				<img src="@/assets/img/hd3.jpg"/>
			</li>
			<li class="active-content">
				<img src="@/assets/img/hd2.jpg">
			</li>
			<li class="active-content">
				<img src="@/assets/img/hd3.jpg">
			</li>
		</ul>
		<div class="active-news">
			<ul class="active-news-content">
				<li v-for="item of list">
					新闻标题会很长新闻标题会很长新闻标题会很长新闻标题会很长新闻标题会很长新闻标题会很长新闻标题会很长新闻标题会很长
				</li>
			</ul>
			<ul class="active-news-img">
				<li>
					<img src="@/assets/img/hd_17.jpg"/>
				</li>
				<li>
					<img src="@/assets/img/hdd_20.jpg"/>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		name:"HomeActive",
		data (){
			return{
				list:[1,2,3,4,5,6,7,8,9,10]
			}
		}
	}
</script>
<style lang="scss" scoped>
@import '~styles/global.scss';
	.active-title{
		@extend %home_title;
	}
	.active-img{
		margin-top:10px;
	}
	.active-content{
		width:150px;
		height:130px;
		display: inline-block;
		margin-right:5px;
		&:last-child{
			margin-right:0;
		}
		img{
			width:100%;
			height:100%;
		}
	}
	.active-news{
		height:327px;
		width:100%;
		display: flex;
	}
	.active-news-content{
		margin-top:10px;
		margin-right:5px;
		width:459px;
		height:367px;
		font-family: 微软雅黑;
		font-size:16px;
		flex:1;
		li{
			line-height: 30px;
			@extend %white_space;
			counter-increment: listxh;
			color:#656565;
			&:hover{
				text-shadow: 1px 4px 4px #444;
				@include transition(text-shadow,1s,linear);
			}
			
			&:before{
				content:counter(listxh);
				background: #444;
				padding:2px 7px;
				margin-right: 2px;
				color:#fff;
				font-size:15px;
			}
			&:first-child:before,
			&:nth-child(1):before,
			&:nth-child(2):before,
			&:nth-child(3):before{
				background: #3598DC;
			}
			&:last-child:before{
				padding:2px;
			}
		}
	}
	.active-news-img{
		height:367px;
		margin-right:1px;
		img{
			height:154px;
			width:150px;
		}
	}

</style>