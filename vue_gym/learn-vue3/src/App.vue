<!-- 1. npm i swiper -->
<template>
	<swiper
		:slides-per-view="3"
		:space-between="50"
		@swiper="onSwiper"
		@slideChange="onSlideChange"
	>
		<swiper-slide>Slide 1</swiper-slide>
		<swiper-slide>Slide 2</swiper-slide>
		<swiper-slide>Slide 3</swiper-slide>
		...
	</swiper>
	<div>
		<!-- header -->
		<header>헤더</header>
		<!-- /header -->
		<div>
			<main>메인</main>
		</div>
		<!-- footer -->
		<footer>푸터</footer>
		<!-- /footer -->
	</div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

export default {
	components: {
		Swiper,
		SwiperSlide,
	},
	setup() {
		const onSwiper = swiper => {
			console.log(swiper);
		};
		const onSlideChange = () => {
			console.log('slide change');
		};
		return {
			onSwiper,
			onSlideChange,
		};
	},
};
</script>

<style lang="scss" scoped></style>
