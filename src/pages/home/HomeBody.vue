<template>
	<div class="home-content">
			<article>
				<section>
					<home-swiper></home-swiper>
				</section>
				<section>
					<home-news :list="newsList"></home-news>
				</section>
				<section>
					<home-active></home-active>
				</section>
			</article>
			<aside>
				<section>
					<home-blog></home-blog>
				</section>
				<section>
					<home-sub></home-sub>
				</section>
			</aside>
		</div>
</template>
<script>
import HomeSwiper from './components/HomeSwiper'
import HomeNews from'./components/HomeNews'
import HomeActive from './components/HomeActive'
import HomeBlog from './components/HomeBlog'
import HomeSub from './components/HomeSub'
import axios from 'axios'
	export default{
		name:"HomeBody",
		components:{
			HomeSwiper,HomeNews,HomeActive,
			HomeBlog,HomeSub
		},
		data (){
			return{
				newsList:[]
			}
		},
		methods:{
			getNewsData (){
				axios.get("/api/homedata.json").then(this.getHomeInfo);
			},
			getHomeInfo (res){
				res=res.data;
				if(res.ret && res.data){
					let data = res.data;
					this.newsList = data.newsList;
				}
			}
		},
		mounted (){
			this.getNewsData()
		}
	}
</script>
<style lang="scss" scoped>
	.home-content{
		width:1000px;
		margin-top:20px;
		margin:0 auto;
		article{
			width:628px;
			display: inline-block;
			float:left;
		}
		aside{
			width:352px;
			margin-left:20px;
			display: inline-block;
		}
		section{
				margin-top:20px;
			}
}
</style>