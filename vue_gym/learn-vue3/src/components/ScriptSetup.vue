<template>
	<div>
		{{ msg }}
		<br />
		{{ message }}
		<input v-model="message" type="text" />
		<button @click="sayHello">click</button>
		<PostItem
			type="news"
			title="제목"
			contents="내용"
			:is-Like="true"
		></PostItem>
		<PostItem
			type="news"
			title="제목"
			contents="내용"
			:is-Like="true"
		></PostItem>
		<PostItem
			type="news"
			title="제목"
			contents="내용"
			:is-Like="true"
		></PostItem>
		<hr />
		<TemplateRefsChild ref="child"></TemplateRefsChild>
		<template v-if="child">{{ child.message }}</template>
		<hr />
		<MyButton class="parent-class"></MyButton>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import PostItem from './setup/PostItem.vue';
import TemplateRefsChild from './setup/TemplateRefsChild.vue';
import MyButton from './setup/MyButton.vue';

const msg = 'Hello World!';
const message = ref('');
const sayHello = () => {
	alert('Hello World!');
};
const child = ref(null);
defineExpose({
	msg,
});
const response = await axios(
	'https://dummy.restapiexample.com/api/v1/employees',
);
console.log('response: ', response);

// 원래 await를 사용하려면 async를 사용해야하는데 vue-3에서 setup을 사용하면 await만 사용할 수 있음
// async function callApi() {
// 	const response = await axios(
// 		'https://dummy.restapiexample.com/api/v1/employees',
// 	);
// }
// callApi();
// script setup
// console.log('Hello World!');
</script>

<!-- <script>
// script에서 setup 했을 떄
export default {
	setup() {
		console.log('Hello World!');
	},
};
</script> -->

<style lang="scss" scoped></style>
