import { redirect } from '@sveltejs/kit';
 
export function load({ locals }) {
  if (!locals.user) {
    throw redirect(308, 'https://kumo.network-n.com/adstxt/?id=pa_3bc69c80');
  }
}