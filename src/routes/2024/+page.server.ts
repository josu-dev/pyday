import { parse_markdown } from '$lib/utils';

export async function load() {
    const modules: Record<string, string> = import.meta.glob('./modules/*.md', {
        eager: true,
        query: '?raw',
        import: 'default'
    });

    const modules_slides: { name: string; id: string; source: string, html: string; }[] = [];

    for (const key in modules) {
        modules_slides.push({
            name: key.slice(key.lastIndexOf('/') + 4, key.length - 3),
            id: key,
            source: modules[key],
            html: parse_markdown(modules[key])
        });
    }

    return { modules_slides: modules_slides };
};
