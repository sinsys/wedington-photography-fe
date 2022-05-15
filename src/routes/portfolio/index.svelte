<!-- 
	index.svelte - This is responsible for rendering all images
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
<p>Coming soon</p>
<div class="wrapper">
	<button on:click={handleOnClick}> Get new Image! </button>
	<div class="images">
		<ul>
			{#each images as image}
				<li>
					<a href={`/portfolio/${image.id}`}>
						{image.title}
					</a>
				</li>
			{/each}
		</ul>
	</div>

	<p>About</p>
	<p>Description</p>
</div>

<style lang="scss">
	@import '../../styles/typography';

	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		@include fontKronaOne;

		.images ul li {
			margin: 1rem 0;
		}
	}
</style>
