import { fetchRelic } from '$lib/utils'
import { json } from '@sveltejs/kit'

export const GET = async ({ params }) => {
  const allPosts = await fetchRelic(params.slug)
  return json(allPosts)
}