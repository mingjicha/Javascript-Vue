<template>
	<div>
		<p>author : {{ author }}</p>
		<p>title : {{ title }}</p>
	</div>
</template>

<script>
import { reactive, toRefs } from 'vue';

export default {
	setup() {
		const book = reactive({
			author: 'Vue Team',
			year: '2020',
			title: 'Vue 3 Guide',
			description: '당신은 이 책을 지금 바로 읽습니다 ;)',
			price: '무료',
		});

		// 구조 분해 할당
		// 변수 안에 있는 게 재할당 된 것 -> 반응형 잃어버림
		// const { author, title } = book;
		// 재할당 되어서 반응성을 잃어버려서 string이 됨
		// console.log(typeof author);

		// 반응형을 잃지 않고 객체의 속성을 가져오고 싶을 때 사용하는 방법
		// toRefs, toRef를 사용하면 반응형 객체의 속성과 동기화 됨(author, title)
		// 그래서 원본 속성을 변경하면 ref 객체가 업데이트되고 그 반대의 경우도 마찬가지
		const { author, title } = toRefs(book);

		// 하나만 사용할 경우
		// let author = toRef(book, 'author');
		// let title = toRef(book, 'title');

		return { author, title, book };
	},
};
</script>

<style lang="scss" scoped></style>
