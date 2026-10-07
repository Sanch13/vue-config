<script setup>
import { computed, onMounted, ref } from "vue";
import ColorSelector from "./components/ColorSelector.vue";
import CapSelector from "./components/CapSelector.vue";
import SurfaceSelector from "./components/SurfaceSelector.vue";
import ConfigurationSummary from "./components/ConfigurationSummary.vue";
import { useCaps } from "./composables/useCaps";

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

const {
	caps,
	selectedCapId,
	selectedCap,
	isLoading,
	error,
	loadCaps,
} = useCaps();

onMounted(() => {
	loadCaps();
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
		<h2>Конфигуратор</h2>

		<!-- <pre>{{ configuration }}</pre> -->

		<p>Цвет: {{ color.name }}</p>
		<p>Крышка: {{ selectedCap.name }}</p>
		<p>Поверхность: {{ selectedSurface.name }}</p>

		<div v-if="isLoading">
			Загрузка крышек...
		</div>

		<CapSelector
			v-else
			:caps="caps"
			:selected-cap-id="selectedCapId"
			@select="selectedCapId = $event"
		/>

		<!-- <CapSelector
			:caps="caps"
			:selected-cap-id="selectedCapId"
			@select="selectedCapId = $event"
		/> -->

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
