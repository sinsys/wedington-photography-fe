/**
 * portfolio/_interfaces.ts - Responsible for data constraints and typescript definitions
 */
export interface GetImageRequest {
	params: {
		image: string
	}
}

export interface ImageDetails {
	id: string
	description: string
	title: string
}
