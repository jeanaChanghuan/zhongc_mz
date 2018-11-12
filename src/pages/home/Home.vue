<template>
	<div class="home">
		<header>
			<home-header></home-header>
		</header>
		<nav>
			<home-menu></home-menu>
		</nav>
		<router-view></router-view>
		<footer>
			<home-footer></home-footer>
		</footer>
	</div>
</template>
<script>
import HomeHeader from './components/HomeHeader'
import HomeMenu from './components/HomeMenu'
import HomeFooter from './components/HomeFooter'
	export default {
		name:"Home",
		components:{
			HomeHeader,HomeMenu,HomeFooter
		}
	}

</script>
<style lang="scss"  type="text/css" scoped>
@import '~styles/global.scss';
.home{
	background-color:$backgroundColor;
}

</style>