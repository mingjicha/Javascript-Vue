<template>
	<div></div>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
	setup() {
		// ref -> Object
		const count = ref(0);
		const state = reactive({
			count,
		});

		count.value++;
		// 템플릿에서 사용할 때는 자동으로 내부 값(value)을 풀어내기(Unwarpping) 때문에
		// .value를 추가할 필요없이 사용
		console.log(count.value); // 1
		// console.log('state.value: ', state.count.value);
		console.log('state.value: ', state.count); // 1

		// ref -> Array
		// 반응형 객체와 달리 ref가 반응형 배열 또는 Map과 같은 기본 컬렉션 타입의 요소로 접근될 때
		// 수행되는 래핑 해제가 없음 (.value 필요)
		const message = ref('Hello');
		const arr = reactive([message]);
		console.log('arr[0]: ', arr[0].value);
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
