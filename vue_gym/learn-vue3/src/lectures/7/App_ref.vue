<template>
	<div>
		<p>{{ message.value }}</p>
		<button v-on:click="addMessage">add click</button>
	</div>
	<!-- 
		reactive() 함수는 객체타입에만 동작 ,
		그래서 기본타입(number, string, boolean)을 반응형으로 만들고자 할 때  ref 메소드를 사용
		이 객체는 내부의 value 값에 대한 반응형 참조(reference) 역할 
	-->
</template>

<script>
import { reactive } from 'vue';
// import { reactive, ref } from 'vue';

export default {
	setup() {
		let message = reactive({
			// 객체타입
			value: 'Hello Vue!',
		});
		// let message = ref('Hello Vue!') -> 기본타입
		const addMessage = () => {
			message.value = message.value + '!';
		};
		return {
			message,
			addMessage,
		};
	},
};
</script>

<style lang="scss" scoped></style>
