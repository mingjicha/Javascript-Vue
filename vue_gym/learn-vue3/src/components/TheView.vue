<template>
	<div>
		<main>
			<div class="container py-4">
				<PostCreate @create-post="createPost"></PostCreate>

				<hr class="my-4" />
				<div class="row g-3">
					<!-- <div class="col col-4">
						<AppCard title="제목1" contents="내용1"></AppCard>
					</div> -->
					<!-- v-bind 사용 -->
					<!-- <div class="col col-4">
						<AppCard :title="post.title" :contents="post.contents"></AppCard>
					</div> -->
					<div v-for="post in posts" :key="post.id" class="col col-4">
						<AppCard
							:title="post.title"
							:contents="post.contents"
							:type="post.type"
							:is-like="post.isLike"
							@toggle-like="post.isLike = !post.isLike"
						></AppCard>
						<!-- <button @click="post.isLike = !post.isLike">toggle</button> -->
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import AppCard from './AppCard.vue';
import PostCreate from './PostCreate.vue';
import { reactive } from 'vue';
export default {
	components: {
		AppCard,
		PostCreate,
	},
	setup() {
		const post = reactive({
			title: '제목2',
			contents: '내용2',
		});
		const posts = reactive([
			{ id: 1, title: '제목1', contents: '내용1', isLike: true, type: 'news' },
			{ id: 2, title: '제목2', contents: '내용2', isLike: true, type: 'news' },
			{ id: 3, title: '제목3', contents: '내용3', isLike: true, type: 'news' },
			{
				id: 4,
				title: '제목4',
				contents: '내용4',
				isLike: false,
				type: 'notice',
			},
			{
				id: 5,
				title: '제목5',
				contents: '내용5',
				isLike: false,
				type: 'notice',
			},
		]);
		const createPost = newPost => {
			console.log('createPost');
			// console.log('newTitle: ', newTitle);
			console.log('newPost: ', newPost);
			posts.push(newPost);
		};
		return { post, posts, createPost };
	},
};
</script>

<style lang="scss" scoped></style>
