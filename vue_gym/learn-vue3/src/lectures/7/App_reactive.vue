<template>
	<div>
		<!-- <button v-on:click="state.count++">Click {{ state.count }}</button> -->
		<button v-on:click="increment">Click {{ state.count }}</button>
		<button v-on:click="increment">Deep Click {{ state.deep.count }}</button>
	</div>
</template>

<script>
import { reactive } from 'vue';

// 컴포넌트 <template>에서 반응형 객체를 사용하려면 setup()함수에서 선언하고 리턴
export default {
	setup() {
		// JavaScript 객체에서 반응형 상태를 생성하기 위해서는 reactive() 함수를 사용
		const state = reactive({
			count: 0,
			deep: {
				count: 0,
			},
		});
		const increment = () => {
			state.count++;
			state.deep.count++;
		};
		return {
			state,
			increment,
		};
	},
};
</script>

<style lang="scss" scoped></style>
