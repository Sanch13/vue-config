<script setup>
defineProps({
	colors: Array,
	selectedColor: Object,
});

const emit = defineEmits(["select"]);
</script>

<template>
	<div>
		<button
			v-for="item in colors"
			:key="item.id"
			@click="emit('select', item)"
		>
			{{ item.name }}

			<span v-if="item.id === selectedColor.id"> ✓ </span>
		</button>
	</div>
</template>
