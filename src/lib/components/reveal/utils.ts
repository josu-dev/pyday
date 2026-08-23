import type { RevealApi } from 'reveal.js';
import { getContext, setContext } from 'svelte';

export function set_rjs_ctx(deck: { deck?: RevealApi }): { deck: RevealApi } {
  return setContext('deck', deck) as { deck: RevealApi };
}

export function get_rjs_ctx(): { deck: RevealApi } {
  return getContext('deck');
}
