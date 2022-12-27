import { fetchAllMounts } from '$lib/utils'
import { json } from '@sveltejs/kit'

export const GET = async () => {
  const allPosts = await fetchAllMounts()

  return json(allPosts)
}