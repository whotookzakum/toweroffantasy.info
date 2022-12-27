import { fetchMount } from '$lib/utils'
import { json } from '@sveltejs/kit'

export const GET = async ({ params }) => {
  const allPosts = await fetchMount(params.slug)
  return json(allPosts)
}