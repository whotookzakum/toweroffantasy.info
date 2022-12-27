import { fetchAllMatrices } from '$lib/utils'
import { json } from '@sveltejs/kit'

export const GET = async () => {
  const allPosts = await fetchAllMatrices()

  return json(allPosts)
}