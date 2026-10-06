<script setup>
defineProps({
	configuration: Object,
});
</script>

<template>
	<div>
		<h3>Текущая конфигурация</h3>

		<p>Цвет: {{ configuration.color.name }}</p>
		<p>Крышка: {{ configuration.cap.name }}</p>
		<p>Поверхность: {{ configuration.surface.name }}</p>
	</div>
</template>
