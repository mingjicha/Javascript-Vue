<template>
	<div class="card">
		<div class="card-header">Deep Child component</div>
		<div class="card-body">
			<p>staticMeesage: {{ staticMeesage }}</p>
			<p>message: {{ message }}</p>
			<p>count: {{ count }}</p>
		</div>
	</div>
</template>

<script>
import { inject } from 'vue';

export default {
	setup() {
		const staticMeesage = inject('static-message', 'default message');
		const { message, updateMessage } = inject('message');
		message.value = message.value + '!';
		updateMessage('!');
		const count = inject('count');
		return { staticMeesage, message, count };
	},
};
</script>

<style lang="scss" scoped></style>
