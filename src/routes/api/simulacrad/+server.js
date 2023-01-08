import { fetchAllSimulacra } from '$lib/utils'
import { json } from '@sveltejs/kit'

export const GET = async () => {
  const allPosts = await fetchAllSimulacra()

  return json(allPosts)
}