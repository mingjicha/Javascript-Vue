<!-- 제목 작성 -->
<template>
	<div>
		<label>
			{{ label }}
			<input v-model="value" type="text" />
		</label>
	</div>
</template>

<script>
import { computed } from 'vue';

export default {
	props: ['title', 'label'], // value
	emits: ['update:title'], // input
	setup(props, { emit }) {
		const value = computed({
			get() {
				return props.title;
			},
			set(value) {
				emit('update:title', value);
			},
		});
		return { value };
	},
};
</script>

<style lang="scss" scoped></style>
