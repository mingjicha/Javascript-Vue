<template>
	<div class="container py-4">
		<!-- 문자열로 할당 -->
		<input ref="input" type="text" />
		<p>{{ input }}</p>
		<!-- input은 mount가 완료될 때까지 null -->
		<p v-if="input">
			{{ input.value }}, {{ $refs.input.value }}, {{ $refs.input === input }}
		</p>
		<hr />
		<!-- mount되면 itemRefs 배열에 값이 채워짐 -->
		<!-- <li v-for="fruit in fruits" :key="fruit" ref="itemRefs">{{ fruit }}</li> -->
		<!-- el => 머시기 함수로도 할당 -->
		<!-- <ul>
			<li
				v-for="fruit in fruits"
				:key="fruit"
				:ref="el => itemRefs.push(el.textContent)"
			>
				{{ fruit }}
			</li>
		</ul> -->
		<hr />
		<TemplateRefsChild ref="child"></TemplateRefsChild>
	</div>
</template>

<script>
import { onMounted, ref } from 'vue';
import TemplateRefsChild from './TemplateRefsChild.vue';
export default {
	components: {
		TemplateRefsChild,
	},
	setup() {
		const input = ref(null);
		console.log('onMounted: ', input.value);
		onMounted(() => {
			input.value.value = 'Hello World!';
			console.log('onMounted: ', input.value);

			// itemRefs.value.forEach(item => console.log('item: ', item.textContent));
			itemRefs.value.forEach(item => console.log('item: ', item));
			console.log('child.message: ', child.value.message);
			child.value.sayHello();
		});

		const fruits = ref(['사과', '딸기', '포도']);
		const itemRefs = ref([]);

		const child = ref(null);
		return { input, fruits, itemRefs, child };
	},
};
</script>

<style lang="scss" scoped></style>
