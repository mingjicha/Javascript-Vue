<template>
	<div></div>
</template>

<script>
import { reactive, readonly } from 'vue';

export default {
	setup() {
		const original = reactive({
			count: 0,
		});
		// 객체가 변하길 원하지 않을 때
		const copy = readonly(original);
		original.count++;
		copy.count++;
		console.log(original.count);
		console.log(copy.count);
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
