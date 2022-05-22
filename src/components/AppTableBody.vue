<script setup lang="ts">
import { useStore } from '@/stores'

const { getters } = useStore()
</script>

<template>
	<tbody>
		<TransitionGroup name="list">
			<tr v-for="post in getters.sortBy" :key="post.id">
				<td class="border p-3 text-center w-[10%]">{{ post.id }}</td>
				<td class="border p-3 w-[45%]">{{ post.title }}</td>
				<td class="border p-3 w-[45%]">{{ post.body }}</td>
			</tr>
		</TransitionGroup>
	</tbody>
</template>

<style scoped>
.list-enter-active,
.list-leave-active {
	transition: opacity 0.3s ease;
}

.list-enter-from,
.list-leave-to {
	opacity: 0;
}
</style>
