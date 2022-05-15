<!-- 
	* portfolio/index.svelte - This is responsible for rendering all images
-->
<script context="module" lang="ts">
	import type { LoadInput, LoadOutput } from '@sveltejs/kit'
	import type { ImageDetails } from './_interfaces'
	export async function load({ fetch }: LoadInput): Promise<LoadOutput> {
		// Fetch resource
		const res = await fetch('/portfolio.json')
		const { images } = await res.json()
		if (res.ok) {
			return {
				status: 200,
				props: {
					images
				}
			}
		}
		return { ...res }
	}
</script>

<script lang="ts">
	export let images: Array<ImageDetails>

	const handleOnClick = async () => {
		console.log('Click')
	}
</script>

<svelte:head>
	<title>Wedington Photography - Portfolio</title>
</svelte:head>

<h1>Portfolio</h1>
<div class="wrapper">
	<div class="images">
		{#each images as image}
			<div class="image">
				<a href={`/portfolio/${image.id}`}>
					{image.title}
				</a>
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	@import '../../styles/colors';
	@import '../../styles/typography';

	h1 {
		background-image: linear-gradient(315deg, $colorAshGray 0%, $colorDarkAlt 74%);
		padding: 1rem;
		margin: 0;
		color: $colorWhite;
	}
	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		@include fontKronaOne;

		.images {
			display: grid;
			grid-gap: 1rem;
			grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
			width: 100%;
			height: 100%;

			div {
				padding: 1rem;
				background: $colorCharcoalGray;
			}
		}
	}
</style>
