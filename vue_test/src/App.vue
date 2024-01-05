<template>
	<div class="qna_frame">
		<div class="qna_container">
			<div class="qna_header">
				<h1>질문게시판</h1>
				<div class="qna_header_l">
					<div class="dropdown">
						<a
							class="btn btn-outline-light dropdown-toggle qna_drop font_air bold"
							href="#"
							role="button"
							id="dropdownMenuLink"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							전체
						</a>
						<ul class="dropdown-menu btn-sm" aria-labelledby="dropdownMenuLink">
							<li>
								<a class="dropdown-item qna_drop_item font_air bold" href="#"
									>축제</a
								>
							</li>
							<li>
								<a class="dropdown-item qna_drop_item font_air bold" href="#"
									>관광</a
								>
							</li>
							<li>
								<a class="dropdown-item qna_drop_item font_air bold" href="#"
									>기타</a
								>
							</li>
						</ul>
					</div>
					<div class="qna_btn">
						<button type="button">최신순</button>
						<button type="button">조회수순</button>
						<button type="button">좋아요순</button>
					</div>
				</div>
				<div class="qna_header_r"></div>
			</div>
		</div>
	</div>
	<!-- <div class="qna_qt">{{ this.nowns }}</div> -->
</template>

<script setup></script>

<style lang="scss" scoped></style>
