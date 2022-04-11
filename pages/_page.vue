<template>
	<div v-if="notFound">
		<!-- Show your 404 content -->
		Page not found
	</div>
	<div v-else>
		<RenderContent
			:key="$route.path"
			model="page"
			:options="{
				url: $route.path,
			}"
			@contentLoaded="contentLoaded"
			@contentError="contentError" />
	</div>
</template>

<script>
	import { builder, RenderContent } from '@builder.io/vue';
	import '../scripts/register-builder-components';

	// TODO: enter your public API key
	builder.init('593f714c13a94bc4b37f7ab4a3062a50');

	export default {
		components: { RenderContent },
		data: () => ({
			notFound: false,
		}),
		methods: {
			contentLoaded(content) {
				if (!content) {
					if (this.$nuxt.context.ssrContext) {
						this.$nuxt.context.ssrContext.res.statusCode = 404;
					}
					this.notFound = true;
				}
			},
		},
	};
</script>
