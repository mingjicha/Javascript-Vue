<template>
	<div class="container py-4">
		<input ref="input" type="text" />
		<p>{{ input }}</p>
		<!-- input은 mount가 완료될 때까지 null -->
		<p v-if="input">
			{{ input.value }}, {{ $refs.input.value }}, {{ $refs.input === input }}
		</p>
	</div>
</template>

<script>
import { onMounted, ref } from 'vue';
export default {
	setup() {
		const input = ref(null);
		console.log('onMounted: ', input.value);
		onMounted(() => {
			input.value.value = 'Hello World!';
			console.log('onMounted: ', input.value);
		});
		return { input };
	},
};
</script>

<style lang="scss" scoped></style>
