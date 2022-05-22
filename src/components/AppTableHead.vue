<script setup lang="ts">
import SortButton from '@/components/SortButton.vue'
import { useStore, SortKeys, SortFilters } from '@/stores'

const { state, actions } = useStore()
</script>

<template>
	<thead class="sticky top-0 left-0 z-10">
		<tr class="bg-[#474955] text-white h-[54px]">
			<th>
				<sort-button
					:active="state.sortKey === SortKeys.Id"
					:position="state.sortFilter === SortFilters.Desc"
					@click="actions.setSortKey(SortKeys.Id)"
				>
					ID
				</sort-button>
			</th>
			<th>
				<sort-button
					:active="state.sortKey === SortKeys.Title"
					:position="state.sortFilter === SortFilters.Desc"
					@click="actions.setSortKey(SortKeys.Title)"
				>
					Заголовок
				</sort-button>
			</th>
			<th>
				<sort-button
					:active="state.sortKey === SortKeys.Body"
					:position="state.sortFilter === SortFilters.Desc"
					@click="actions.setSortKey(SortKeys.Body)"
				>
					Описание
				</sort-button>
			</th>
		</tr>
	</thead>
</template>

<style scoped></style>
