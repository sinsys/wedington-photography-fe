/**
 * index.json - Responsible for logic around fetching all images
 */
export async function get() {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
	const images = await res.json()
	if (res.ok) {
		return {
			status: 200,
			body: { images: images.slice(0, 20) }
		}
	}
	return {
		status: res.status,
		body: { images: [] },
		error: new Error('Unable to fetch remote resource')
	}
}
