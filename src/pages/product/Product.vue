<template>
	<div class="product-wrapper">
		<article>
			<section>
				<product-list :list="ProductData"></product-list>
			</section>
		</article>
		<aside>
			<section>
				<product-hot></product-hot>
			</section>
		</aside>
	</div>
</template>
<script>
import ProductList from './components/ProductList'
import ProductHot from './components/ProductHot'
import axios from 'axios'
	export default {
		name:"Product",
		components:{
			ProductList,ProductHot
		},
		data (){
			return{
				ProductData:[]
			}
		},
		methods: {
			getProductData(){
				axios.get("/api/homedata.json").then(this.getProductDataInfo)
			},
			getProductDataInfo(res){
				res=res.data;
				if(res.ret && res.data){
					let data = res.data
					this.ProductData = data.productList
				}
			}
		},
		mounted (){
			this.getProductData();
		}


	}
</script>
<style lang="scss" scoped>
	.product-wrapper{
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
