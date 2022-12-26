import { fetchAllBanners } from '$lib/utils'
import { json } from '@sveltejs/kit'

export const GET = async ({ params }) => {
  const allPosts = await fetchAllBanners(params.version)

  return json(allPosts)
}