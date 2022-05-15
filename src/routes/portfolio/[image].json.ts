import type { GetImageRequest } from './interfaces'

export async function get({ params }: GetImageRequest) {
	// connect to db, fetch data
	// Kept away from frontend
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
