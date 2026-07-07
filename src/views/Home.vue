<script setup>
	import WindowSection from '../components/WindowSection.vue';
	import purpleCd from '../assets/purple-cd.png';
	import sparkleCoffeeRat from '../assets/sparkleCoffeeRat.gif';
	// import ratFace from '../assets/purple-rat-face.png';
</script>

<template>
	<img :src="purpleCd" width="400" class="cd-graphic" />

	<section id="center">
		<div class="hero">
			<!-- TODO:: rat graphic here, sparkly one -->
			<img :src="sparkleCoffeeRat" width="170" />
		</div>
		<div>
			<h1>Rae's Website</h1>
			<p>I never made a cool early 2000s website so I am fulfillying that dream now.</p>
		</div>
		<!-- TODO:: Make this button do smthin else -->
		<button type="button" class="counter" @click="count++">
			Count is {{ count }}
		</button>
	</section>

	<div class="ticks"></div>

	<section id="next-steps">
		<WindowSection 
			title="About Me"
			icon="user"
			text="My personal and professional thingies,, like stuffs."
			color-class="light-pink"
			:buttons="[
				{ text: 'Personal', link: '/personal-about' },
				{ text: 'Professional', link: '/professional-about' }
			]"
		/>
		<WindowSection
			title="Connect with Me"
			icon="social"
			text="Let me know what's goin on, how you feelin?"
			color-class="dark-blue"
			:buttons="[
				{ text: 'GitHub', link: 'https://github.com/Raehale' },
				{ text: 'LinkedIn', link: 'https://www.linkedin.com/in/rae-haley-b30239215/' },
				{ text: 'Form', link: '/contact-me' },
				{ text: 'Pics', link: '/look-at-this-photograph' }
			]"
		/>
	</section>
</template>
