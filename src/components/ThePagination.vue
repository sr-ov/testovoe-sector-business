<script setup lang="ts">
import { watch } from 'vue'
import usePaginator from 'vue-use-paginator'
import { useStore } from '@/stores'
import PaginationButton from '@/components/PaginationButton.vue'

const { getters, state } = useStore()

const { buttons, page, slice, hasPrev, hasNext, goNext, goPrev } = usePaginator(
	{
		page: 1,
		pageSize: 10,
		numItems: getters.postsCount,
		numButtons: 6,
	}
)

watch(slice, (newSlice) => {
	state.slice = newSlice
})
</script>

<template>
	<div class="flex min-w-[60px] text-[#474955] text-2xl">
		<pagination-button :disabled="!hasPrev" @click="goPrev">
			Назад
		</pagination-button>

		<ul
			class="pagination flex justify-center grow items-center min-h-[60px] italic text-lg"
		>
			<li v-for="(button, idx) in buttons" :key="idx">
				<span v-if="button.ellipsis">...</span>
				<router-link
					:to="String(button.page)"
					v-else
					class="pagination__btn p-3 font-bold"
					:class="{ active: button.active }"
					@click="page = button.page"
				>
					{{ button.page }}
				</router-link>
			</li>
		</ul>

		<pagination-button :disabled="!hasNext" @click="goNext">
			Далее
		</pagination-button>
	</div>
</template>

<style scoped>
.active {
	color: #7ebc3c;
}
</style>
