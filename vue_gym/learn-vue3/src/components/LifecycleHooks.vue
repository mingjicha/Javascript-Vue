<template>
	<div class="container py-4">
		<input ref="inputRef" type="text" value="hello world!" />
		<LifecycleChild></LifecycleChild>
	</div>
</template>

<script>
import { onBeforeMount, onMounted, ref } from 'vue';
import LifecycleChild from './LifecycleChild.vue';
export default {
	components: {
		LifecycleChild,
	},
	setup() {
		console.log('setup');
		const inputRef = ref(null);
		onBeforeMount(() => {
			console.log('onBeforeMount', inputRef.value);
		});
		onMounted(() => {
			console.log('onMounted', inputRef.value.value);
		});
		return { inputRef };
	},
	// beforeCreate() {
	// 	console.log('beforeCreate');
	// },
	// created() {
	// 	console.log('created');
	// },
};
</script>

<style lang="scss" scoped></style>
