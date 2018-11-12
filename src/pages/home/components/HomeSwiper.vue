<template>
	<div class="wrapper">
		<swiper :options="swiperOption">
		    <swiper-slide>
				<img src="@/assets/img/a1.jpg">
		    </swiper-slide>
		    <swiper-slide>
				<img src="@/assets/img/a2.jpg">
		    </swiper-slide>
		    <swiper-slide>
				<img src="@/assets/img/a3.jpg">
		    </swiper-slide>
		    <swiper-slide>
				<img src="@/assets/img/a4.jpg">
		    </swiper-slide>
		    <swiper-slide>
				<img src="@/assets/img/a5.jpg">
		    </swiper-slide>
		    <swiper-slide>	
				<img src="@/assets/img/a6.jpg">
		    </swiper-slide>
		    <div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
	</div>
</template>

<script type="text/javascript">

	export default{
		name:"HomeSwiper",
		 data() {
	     return{
	      swiperOption: {
	      	  pagination:'.swiper-pagination',
		      autoplay: 3000,
		      speed: 1000,
		      loop:true
		      }
	   	 }
	    }
	}
</script>
<style type="text/css" scoped>
	.wrapper >>> .swiper-pagination-bullet-active
	{
		background: #fff;
	}
	.wrapper{
		width: 100%;
		height: 278px;
		box-shadow: 1px 4px 15px #A39F9F;
	}
	.wrapper img{
		width:628px;
		height: 278px;
	}
</style>