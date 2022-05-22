<script setup lang="ts">
import { onErrorCaptured, ref } from 'vue'

const err = ref<Error | null>(null)

onErrorCaptured((error) => {
	console.error(error)
	err.value = error
	return true
})
</script>

<template>
	<div v-if="err">
		Произошла ошибка!!! Попробуйте позже или перезагрузите страницу
	</div>

	<router-view v-else></router-view>
</template>

<style>
@import '@/assets/reset.css';
@import '@/assets/base.css';
</style>
