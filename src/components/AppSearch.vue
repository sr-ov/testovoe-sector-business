<script setup lang="ts">
import { computed } from 'vue'
import { debounce } from 'vue-debounce'

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const debounceFn = debounce((value) => {
	emit('update:modelValue', value)
}, 300)
const value = computed({
	get() {
		return props.modelValue
	},
	set(value) {
		debounceFn(value)
	},
})
</script>

<template>
	<input
		class="w-4/6 bg-[#5A5C66] text-white placeholder:text-[#B3B7BF] py-4 pl-6 pr-12"
		type="text"
		v-model="value"
	/>
</template>

<style scoped>
input {
	background-image: url('@/assets/images/search.svg');
	background-position: center right 18px;
	background-size: 21px;
	background-repeat: no-repeat;
}
</style>
