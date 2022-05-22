<script setup lang="ts">
import FadeTransition from '@/components/FadeTransition.vue'
import ThePagination from '@/components/ThePagination.vue'
import AppSearch from '@/components/AppSearch.vue'
import AppTable from '@/components/AppTable.vue'
import AppSpinner from '@/components/AppSpinner.vue'
import { useAsync } from '@/hooks/useAsync'
import { useStore } from '@/stores'

const { actions, state } = useStore()
const { execute, status } = useAsync(actions.setPosts)
await execute()
</script>

<template>
	<div class="container min-h-screen grid">
		<div
			class="flex flex-col shadow-[0_4px_27px_rgba(230,231,234,0.78)] px-10 pt-4"
		>
			<main class="flex-1">
				<app-search
					class="mb-4"
					placeholder="Поиск"
					v-model="state.searchValue"
				></app-search>

				<fade-transition>
					<template v-if="status !== 'pending'">
						<div class="overflow-auto scroll-container">
							<app-table></app-table>
						</div>
					</template>
					<app-spinner v-else height="50" width="50"></app-spinner>
				</fade-transition>
			</main>
			<footer>
				<the-pagination></the-pagination>
			</footer>
		</div>
	</div>
</template>

<style scoped>
.container {
	padding: 40px 15px;
	margin: 0 auto;
	max-width: 1230px;
}
.scroll-container {
	min-height: calc(100% - 70px);
	height: 0px;
}
</style>
