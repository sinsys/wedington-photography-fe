<!-- Individual Image -->
<script context="module" lang="typescript">
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

<script lang="typescript">
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
