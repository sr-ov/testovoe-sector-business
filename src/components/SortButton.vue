<script setup lang="ts">
interface Props {
	active?: boolean
	position: boolean
}

defineProps<Props>()
</script>

<template>
	<button
		class="flex items-center justify-center px-6 py-2 w-full"
		type="button"
	>
		<span class="flex items-center justify-center p-2 gap-8">
			<slot></slot>

			<span class="shrink-0 basis-3">
				<img
					v-if="active"
					:class="{ 'rotate-180': position }"
					src="@/assets/images/arrow-down.svg"
					alt="arrow down"
					aria-hidden="true"
					width="12"
					height="7"
				/>
			</span>
		</span>
	</button>
</template>

<style scoped></style>
