<script setup lang="ts">
interface Props {
	height: number | string
	width: number | string
}
defineProps<Props>()
</script>

<template>
	<svg class="spinner" viewBox="0 0 50 50" :height="height" :width="width">
		<circle
			class="path"
			cx="25"
			cy="25"
			r="20"
			fill="none"
			stroke-width="5"
		></circle>
	</svg>
</template>

<style scoped>
.spinner {
	z-index: 2;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
.path {
	stroke: rgb(189, 222, 255);
	stroke-linecap: round;
	animation: dash 1.5s ease-in-out infinite;
}

@keyframes dash {
	0% {
		stroke-dasharray: 1, 150;
		stroke-dashoffset: 0;
	}
	50% {
		stroke-dasharray: 90, 150;
		stroke-dashoffset: -35;
	}
	100% {
		stroke-dasharray: 90, 150;
		stroke-dashoffset: -124;
	}
}
</style>
