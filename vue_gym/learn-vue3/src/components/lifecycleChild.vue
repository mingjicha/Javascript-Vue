<template>
	<div class="card">
		<div class="card-body">LifecycleChild</div>
		<input id="input" type="text" />
	</div>
</template>

<script>
import { onBeforeMount, onMounted, onBeforeUnmount, onUnmounted } from 'vue';

export default {
	setup() {
		// console.log('[Child] setup');
		onBeforeMount(() => {
			console.log('[Child] onBeforMount');
		});
		onMounted(() => {
			console.log('[Child] onMounted');
		});
		onBeforeUnmount(() => {
			console.log('[Child] onBeforeUnmount');
			console.log(document.querySelector('#input'));
		});
		onUnmounted(() => {
			console.log('[Child] onUnmounted');
			console.log(document.querySelector('#input'));
		});
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
