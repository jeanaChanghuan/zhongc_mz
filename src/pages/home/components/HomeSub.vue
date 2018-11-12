<template>
	<div>
		<div class="sub-title">
			<h2>集团子公司</h2>
		</div>
		<ul class="sub-content">
			<li v-for="item of subList">
				<h3>子公司名称</h3>
				<div>
					<img src="@/assets/img/menber_19.jpg"/>
					<p>从2月6日赴俄罗斯出席索契冬奥会开幕式，到11月23日结束南太平洋之行，习近平主席2014年7次出访，足迹遍及18个国家。谈外</p>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		name:"HomeSub",
		data (){
			return{
				subList:[1,2,3,4,5,6,7]
			}
		}
	}
</script>
<style lang="scss" scoped>
@import '~styles/global.scss';
	.sub-title{
		@extend %home_title;
	}
	.sub-content{
		margin-top:10px;
		h3{
			font-size:15px;
		}
		p{
			display: inline-block;
			width:175px;
			height:50px;
			overflow: hidden;
		}
		li{
			margin-top:10px;
			div{
				padding: 0;
				transition:padding 0.3s linear;
				&:hover{
					border:1px solid rgb(53, 152, 220);
					padding:10px 0;
					transition: padding 0.3s linear;
				}
			}
		}
	}
</style>