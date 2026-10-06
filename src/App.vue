<script setup>
import { computed, ref } from "vue";
import ColorSelector from "./components/ColorSelector.vue";
import CapSelector from "./components/CapSelector.vue";
import SurfaceSelector from "./components/SurfaceSelector.vue";
import ConfigurationSummary from "./components/ConfigurationSummary.vue";

const color = ref({
	id: 1,
	name: "Белый",
	value: "#ffffff",
});

const colors = [
	{ id: 1, name: "Белый", value: "#ffffff" },
	{ id: 2, name: "Чёрный", value: "#000000" },
	{ id: 3, name: "Красный", value: "#ff0000" },
	{ id: 4, name: "Синий", value: "#0000ff" },
];

const caps = [
	{ id: 1, name: "Чёрная крышка" },
	{ id: 2, name: "Белая крышка" },
	{ id: 3, name: "Красная крышка" },
];
const selectedCapId = ref(1);
const selectedCap = computed(() => {
	return caps.find((item) => item.id === selectedCapId.value);
});

const surfaces = [
	{ id: 1, name: "Глянцевая" },
	{ id: 2, name: "Soft-touch" },
];
const selectedSurfaceId = ref(1);
const selectedSurface = computed(() => {
	return surfaces.find((item) => item.id === selectedSurfaceId.value);
});

const configuration = computed(() => ({
	color: color.value,
	cap: selectedCap.value,
	surface: selectedSurface.value,
}));
</script>

<template>
	<main>
		<h2>Конфигурация</h2>

		<!-- <pre>{{ configuration }}</pre> -->

		<p>Цвет: {{ color.name }}</p>
		<p>Крышка: {{ selectedCap.name }}</p>
		<p>Поверхность: {{ selectedSurface.name }}</p>

		<CapSelector
			:caps="caps"
			:selected-cap-id="selectedCapId"
			@select="selectedCapId = $event"
		/>

		<SurfaceSelector
			:surfaces="surfaces"
			:selected-surface-id="selectedSurfaceId"
			@select="selectedSurfaceId = $event"
		/>

		<ColorSelector
			:colors="colors"
			:selected-color="color"
			@select="color = $event"
		/>

		<ConfigurationSummary :configuration="configuration" />
	</main>
</template>
