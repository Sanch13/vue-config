import { computed, ref } from "vue";

export function useCaps() {
	const caps = ref([]);
	const selectedCapId = ref(null);

	const selectedCap = computed(() => {
		return caps.value.find(
			(item) => item.id === selectedCapId.value
		);
	});

	const isLoading = ref(false);
	const error = ref(null);

	async function loadCaps() {
		isLoading.value = true;
		error.value = null;

		await new Promise((resolve) => {
			setTimeout(resolve, 1000);
		});

		caps.value = [
			{ id: 1, name: "Чёрная крышка" },
			{ id: 2, name: "Белая крышка" },
			{ id: 3, name: "Красная крышка" },
		];

		selectedCapId.value = caps.value[0].id;

		isLoading.value = false;
	}

	return {
		caps,
		selectedCapId,
		selectedCap,
		isLoading,
		error,
		loadCaps,
	};
}
