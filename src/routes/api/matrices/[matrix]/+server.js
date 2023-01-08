import { fetchMatrix } from '$lib/utils'
import { json } from '@sveltejs/kit'

export const GET = async ({ params }) => {
  const allPosts = await fetchMatrix(params.matrix)
  return json(allPosts)
}