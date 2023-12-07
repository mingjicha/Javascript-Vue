<template>
	<!-- v-for 디렉티브를 사용하여 배열인 목록을 렌더링 할 수 있음 -->
	<div>
		<ul>
			<li v-for="(item, index) in items" :key="item.id">
				<!-- v-for=”item in items” 문법을 사용해서 배열에서 항목을 순차적으로 할당 -->
				<!-- v-for=”(item, index) in items” 문법을 사용해서 배열 인덱스를 가져올 수 있음 -->
				<!-- 항목을 나열할 때 각 :key 속성에는 고유한 값을 지정 -->
				<!-- {{ item }} -->
				인덱스: {{ index }}, {{ item.message }}
			</li>
			<!-- 
				만약 id가 짝수인 값만 가져오고 싶다면? v-if를 사용해야 하는데,
				v-if와 v-for를 함께 쓰는 것은 권장하지 않음 -> template를 사용하기
			-->
			<template v-for="(item, index) in enevItems" :key="item.id">
				<!-- <template v-for="(item, index) in items" :key="item.id"> -->
				<!-- <li v-if="item.id % 2 === 0"> -->
				<li>ID: {{ item.id }} 인덱스: {{ index }}, {{ item.message }}</li>
			</template>
			<!-- 또는 computed 사용하기 -->
		</ul>
		<hr />
		<!-- v-for를 사용하여 객체의 속성을 반복 -->
		<ul>
			<li v-for="(value, key, index) in myObject" :key="key">
				{{ index }}-{{ key }}-{{ value }}
				<!-- 
					index는 0, 1, 2
					key는 title, author, publishedAt
				  value는 제목, 홍길동, 2016-01-01 -->
			</li>
		</ul>
	</div>
</template>

<script>
import { computed, reactive } from 'vue';

export default {
	setup() {
		const items = reactive([
			{ id: 1, message: 'Java' },
			{ id: 2, message: 'HTML' },
			{ id: 3, message: 'CSS' },
			{ id: 4, message: 'JavaScript' },
		]);

		const enevItems = computed(() => items.filter(item => item.id % 2 === 0));

		const myObject = reactive({
			title: '제목', // 0
			author: '홍길동', // 1
			publishedAt: '2016-01-01', // 2
		});
		return { items, enevItems, myObject };
	},
};
</script>

<style lang="scss" scoped></style>
