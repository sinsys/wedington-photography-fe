/**
 * [image].json - Responsible for logic around fetching a single image
 */
import type { GetImageRequest } from './_interfaces'

export async function get({ params }: GetImageRequest) {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.image}`)
	const image = await res.json()
	if (res.ok) {
		return {
			status: 200,
			body: { image }
		}
	}
	return {
		status: res.status,
		error: new Error('Unable to fetch remote resource')
	}
}
