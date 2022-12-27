import { fetchAllRelics } from '$lib/utils'
import { json } from '@sveltejs/kit'

export const GET = async () => {
  const allPosts = await fetchAllRelics()

  return json(allPosts)
}