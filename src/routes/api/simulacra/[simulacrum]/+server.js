import { fetchSimulacrum } from '$lib/utils'
import { json } from '@sveltejs/kit'

export const GET = async ({ params }) => {
  const allPosts = await fetchSimulacrum(params.simulacrum)
  return json(allPosts)
}