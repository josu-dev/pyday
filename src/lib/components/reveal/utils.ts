import { getContext, setContext } from 'svelte';

export function set_rjs_ctx(deck: { deck?: Reveal.Api; }): { deck: Reveal.Api; } {
    return setContext('deck', deck) as { deck: Reveal.Api; };
}

export function get_rjs_ctx(): { deck: Reveal.Api; } {
    return getContext('deck');
}
