<template>
	<div>
		<button>Counter: {{ counter }}</button>
	</div>
</template>

<script>
// onMounted, ref OptionAPI를 보안하기 위해 새롭게 등장함
import { onMounted, ref } from 'vue';

export default {
	setup() {
		const counter = ref(0);

		const increment = () => counter.value++;

		onMounted(() => {
			console.log('애플리케이션이 마운트 되었습니다!');
		});

		return {
			counter,
			increment,
		};
	},
};
</script>

<style lang="scss" scoped></style>
