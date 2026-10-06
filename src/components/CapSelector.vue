<script setup>
defineProps({
	caps: Array,
	selectedCapId: Number,
});

const emit = defineEmits(["select"]);
</script>

<template>
	<select
		:value="selectedCapId"
		@change="emit('select', Number($event.target.value))"
	>
		<option v-for="item in caps" :key="item.id" :value="item.id">
			{{ item.name }}
		</option>
	</select>
</template>
