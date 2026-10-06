<script setup>
defineProps({
	surfaces: Array,
	selectedSurfaceId: Number,
});

const emit = defineEmits(["select"]);
</script>

<template>
	<select
		:value="selectedSurfaceId"
		@change="emit('select', Number($event.target.value))"
	>
		<option v-for="item in surfaces" :key="item.id" :value="item.id">
			{{ item.name }}
		</option>
	</select>
</template>