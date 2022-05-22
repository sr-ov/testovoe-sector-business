<script setup lang="ts">
import FadeTransition from '@/components/FadeTransition.vue'
import AppSpinner from '@/components/AppSpinner.vue'
import TheSuspenseContent from '@/components/TheSuspenseContent.vue'
</script>

<template>
	<fade-transition>
		<Suspense>
			<template #default>
				<the-suspense-content></the-suspense-content>
			</template>

			<template #fallback>
				<app-spinner height="50" width="50"></app-spinner>
			</template>
		</Suspense>
	</fade-transition>
</template>

<style scoped></style>
