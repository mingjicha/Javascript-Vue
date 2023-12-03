<template>
	<h2>보간법</h2>
	<p>문자열 : {{ message }}</p>
	<!-- v-once 디렉티브를 사용하여 데이터가 변경되어도 갱신(반응)되지 않는 일회성 보간 -->
	<p v-once>문자열 : {{ message }}</p>
	<button v-on:click="message = message + '!'">Click!</button>
	<hr />
	<h2>속성 바인딩</h2>
	<div v-bind:title="dynamicTitle">마우스를 올려보세요.</div>
	<br />

	<!-- Boolean 속성은 속성 존재 자체가 참(true), 거짓(false)을 의미하는 속성 -->
	<input type="text" value="홍길동" v-bind:disabled="isInputDisabled" />

	<!-- v-bind는 매우 자주 사용하기 때문에 단축 문법이 있음, : 을 사용하여 속성을 바인딩
				<div :title="dynamicTitle">마우스를 올려보세요.</div>
				<input type="text" :disabled="isInputDisabled" />
	-->
	<hr />

	<h2>다중 속성 바인딩</h2>
	<input v-bind="attrs" />
	<hr />

	<!-- JavaScript 표현식이 가능 -->
	<h2>JavaScript</h2>
	{{ message.split('').reverse().join('') }}<br />
	<!-- 삼항연산자 사용 -->
	{{ isInputDisabled ? '예' : '아니오' }}
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const message = ref('안녕하세요');
		const dynamicTitle = ref('안녕하세요');

		// false : 수정O, true : 수정X
		const isInputDisabled = ref(false);

		// attrs로 객체를 여러 속성을 한번에 바인딩
		const attrs = {
			id: 'password-id',
			type: 'password',
			placeholder: '비밀번호를 입력해주세요',
			disabled: false,
		};

		return {
			message,
			dynamicTitle,
			isInputDisabled,
			attrs,
		};
	},
};
</script>

<style lang="scss" scoped></style>
