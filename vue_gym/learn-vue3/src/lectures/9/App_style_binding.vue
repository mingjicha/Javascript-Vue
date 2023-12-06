<template>
	<div>
		<!-- style도 class처럼 객체나 배열로 바인딩 할 수 있음 -->
		<div :style="styleObject">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores neque ea
			numquam ullam quos a, soluta praesentium, possimus cum dolore voluptas
			quod, cumque eveniet saepe! Atque, dolor! Assumenda, perferendis
			perspiciatis.
		</div>
		<button v-on:click="fontSize--">-</button>
		<button v-on:click="fontSize++">+</button>
	</div>
</template>

<script>
import { computed, ref } from 'vue';

export default {
	setup() {
		// const styleObject = reactive({
		// 	color: 'red',
		// 	fontSize: '13px',
		// });
		const fontSize = ref(13);
		const styleObject = computed(() => {
			return {
				color: 'red',
				fontSize: fontSize.value + 'px',
			};
		});
		return {
			styleObject,
			fontSize,
		};
	},
};
// 😓와 여기서 에러 생겼음... fontsize라고 적어서 에러난 것. fontSize로 표기 해야 에러가 수정됨...
</script>

<style lang="scss" scoped></style>
