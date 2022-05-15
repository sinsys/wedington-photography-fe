<!-- 
	[image].svelte - This is responsible for rendering a single image
-->
<script context="module" lang="ts">
	import type { LoadInput, LoadOutput } from '@sveltejs/kit'
	export async function load({ fetch, params }: LoadInput): Promise<LoadOutput> {
		const imageId: string = params.image
		const res = await fetch(`/portfolio/${imageId}.json`)
		const { image } = await res.json()

		if (res.ok) {
			return {
				props: {
					image
				}
			}
		}

		const error = new Error('Could not fetch resource')
		return {
			status: res.status,
			error: error
		}
	}
</script>

<script lang="ts">
	export let image: { title: string; description: string }
</script>

<div class="image">
	<h2>{image.title}</h2>
	<p>{image.description}</p>
</div>

<style>
	.image {
		background: #ccc;
	}
</style>
