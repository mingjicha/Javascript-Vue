<template>
	<!-- 키 수식어! 키보드 이벤트를 수신할 떄 종종 특정 키를 확인해야 하는 경우가 있음 -->
	<div>
		<!-- <input type="text" @keyup.enter="addTodo" /> -->
		<input type="text" @keyup.enter.ctrl="addTodo" />
		<ul>
			<li v-for="(todo, index) in todos" :key="index">{{ todo }}</li>
		</ul>
	</div>
</template>

<script>
import { reactive } from 'vue';

export default {
	setup() {
		const todos = reactive([]);

		const addTodo = event => {
			if (event.key === 'Enter') {
				todos.push(event.target.value);
				event.target.value = '';
				event.target.focus();
			}
		};
		return { todos, addTodo };
	},
};
</script>

<style lang="scss" scoped></style>
