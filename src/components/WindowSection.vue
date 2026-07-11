<script setup>
	defineProps(
		{
			title: String,
			icon: String,
			text: String,
			colorClass: String,
			isExternal: Boolean,
			buttons: {
				type: Array,
				default: () => []
			}
		}
	);
</script>

<template>
	<div id="docs" :class="`window-section ${colorClass}`">
		<div class="window-header">
			<h2>{{ title }}</h2>
			<svg class="icon" role="presentation" aria-hidden="true">
				<use :href="`/icons.svg#${icon}`"></use>
			</svg>
		</div>
		<div class="window-body">
			<p>{{ text }}</p>
			<ul>
				<li v-for="button in buttons" :key="button.text">
					<a :href="button.link" :target="button.isExternal ? '_blank' : '_self'">
					{{ button.text }}
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>
