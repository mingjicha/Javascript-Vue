<template>
	<!-- 
		디렉티브(directives) = 지시 : v- 접두사가 있는 특수 속성으로 디렉티브 값(value)이 변경될 때 특정 효과를 반응적으로 DOM에 적용하는 것 =  “~~하게 작동하라” 하고 지시를 해주는 지시문
		ex) v-text, v-html, v-show, v-if, v-else, v-else-if, v-for, v-on (단축표기 @), v-bind (단축표기 :), v-model, v-slot (단축표기 #), v-pre, v-once, v-cloak, v-memo (v3.2+)
		전달인자(Argument) : 디렉티브명 뒤에 콜론(:)으로 표기되는 전달인자를 가짐
		수식어(Modifiers) : 수식어는 점(.)으로 표시되는 특수 접미사로 디렉티브가 특별한 방식으로 바인딩되어야 함

		디렉티브명:전달인자.수식어="값"
	-->
	<div>
		<p>{{ msg }}</p>
		<p v-text="msg"></p>
		<p v-html="htmlStr"></p>
		<!-- text는 문자 -->
		<p v-text="htmlStr"></p>
		<!-- v-once : 한 번만 렌더링하므로 이후에 수정하고 재렌더링 할 때 정적 컨텐츠로 처리되고 건너 뜀 - 업데이트 성능을 최적화 -->
		<p v-once>{{ msg }} !!!!</p>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const msg = ref('안녕하세요');
		const htmlStr = ref('<strong>안녕!!!</strong>');
		return { msg, htmlStr };
	},
};
</script>

<style lang="scss" scoped></style>
