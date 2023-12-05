<template>
	<!-- HTML 클래스 바인딩 -->
	<!-- 
		객체 바인딩 : 클래스를 동적으로 바인딩 하기위해선는 :class(v-bind:class)를 사용
	-->
	<!-- <div :class="{ 클래스명: 불린값 }">텍스트입니다.</div> -->
	<!-- <div :class="{ active: true }">텍스트입니다.</div> -->
	<div class="text" :class="{ active: isActive, 'text-danger': hasError }">
		텍스트입니다.
	</div>
	<div :class="classObject">
		바인딩할 데이터가 많다면 Object로 선언해서 사용할 수 있습니다.
	</div>
	<!-- <div :class="[activeClass, errorClass]">
		배열에 :class를 바인딩하여 사용할 수 있습니다.
	</div> -->
	<div :class="[isActive ? 'active-class' : 'class', errorClass, classObject]">
		삼항연산자도 가능합니다.
	</div>
	<!-- v-bind:class 디렉티브는 일반 class속성과 공존할 수 있음 -->
	<button v-on:click="toggle">toggle</button>
	<button v-on:click="hasError = !hasError">toggleError</button>
</template>

<script>
import { computed } from 'vue';
// import { reactive, ref } from 'vue';
import { ref } from 'vue';

export default {
	setup() {
		const isActive = ref(true);
		const hasError = ref(false);
		// const classObject = reactive({
		// 	active: true,
		// 	'text-danger': true,
		// });

		// active 상태가 여러개의 조건이 필요할 경우 conputed 활용
		const classObject = computed(() => {
			return {
				active: true && true,
				'text-danger': true && true,
				'text-blue': true,
			};
		});

		// 배열에 사용
		const activeClass = ref('active');
		const errorClass = ref('text-danger');

		const toggle = () => {
			// ture일 경우 active 바인딩, false일 경우 바인딩X
			isActive.value = !isActive.value;
		};
		return {
			isActive,
			toggle,
			hasError,
			classObject,
			activeClass,
			errorClass,
		};
	},
};
</script>

<style lang="scss" scoped>
.active {
	font-weight: 900;
}
.text-danger {
	color: red;
}
</style>
