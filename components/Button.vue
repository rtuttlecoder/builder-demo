<template>
	<div class="m-4">
		<button class="button px-4 py-2">Button Text</button>
		<!-- <button class="button px-4 py-2" :field="slice.primary.link" :target="slice.primary.target ? '_blank' : '_self'">{{ slice.primary.text }}</button> -->
	</div>
</template>

<script>
	export default {
		name: 'Button',
	};
</script>

<style scoped lang="scss">
	a {
		color: $button-text;
		&:hover {
			background: $button-hover;
		}
	}

	.default-slice {
		text-align: left;
	}

	.buttonCenterAligned {
		text-align: center;
	}

	.buttonRightAligned {
		text-align: right;
	}
</style>
