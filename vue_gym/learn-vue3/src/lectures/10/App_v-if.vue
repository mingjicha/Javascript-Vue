<template>
	<div>
		<h2 v-if="visible">Hello Vue3!</h2>
		<h2 v-else>false 입니다.</h2>
		<!-- toggle을 해서 true, false값 변경하기 설정해줌 -->
		<button v-on:click="visible = !visible">toggle</button>
		<hr />
		<button v-on:click="type === 'A'">A</button>
		<button v-on:click="type === 'B'">B</button>
		<button v-on:click="type === 'C'">C</button>
		<button v-on:click="type === 'D'">D</button>
		<h2 v-if="type === 'A'">A입니다.</h2>
		<h2 v-else-if="type === 'B'">B입니다.</h2>
		<h2 v-else-if="type === 'C'">C입니다.</h2>
		<h2 v-else>A, B, C가 아닙니다.</h2>
		<hr />
		<!-- 여러개의 HTML요소를 v-if 디렉티브로 연결하고 싶다면 <template>을 사용 -->
		<template v-if="visible">
			<h1>Title</h1>
			<p>Paragraph 1</p>
			<p>Paragraph 2</p>
		</template>
		<hr />
		<h1 v-show="ok">Title 입니다.</h1>
		<button v-on:click="ok = !ok">show toggle</button>
	</div>
	<!-- 
		v-if vs v-show 
			: v-if는 "실제(real)"로 렌더링, 전환 할 때 블록 내부의 컴포넌트들이 제거되고 다시 생성되기 떄문
				초기 랜더링 시, 조건이 false일 경우 아무 작업도 안함. 조건이 처음으로 true가 될 때까지 랜더링되지 않음
				v-show는 간단, 엘리먼트는 css기반 전환으로 조건과 관계없이 항상 랜더링 됨.
				일반적으로 v-if는 전환 비용이 높고, v-show는 초기 랜더링 비용이 높음. 
				그러므로 무언가룰 자주 전환 해야할 경우 v-show를 사용하고 조건이 많지 않을 경우 v-if사용
	-->
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const visible = ref(true);
		// true라서 h2가 랜더링 됨 false는 X
		const type = ref('A');
		const ok = ref(true);
		return { visible, type, ok };
	},
};
</script>

<style lang="scss" scoped></style>
