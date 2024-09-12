import { parse_markdown } from '$lib/utils';
// import {} from './metadata';

export async function load() {
    const modules: Record<string, string> = import.meta.glob('./main_modules/??_*.md', {
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
            html: await parse_markdown(modules[key])
        });
    }

    const modules_missing_slide = await parse_markdown(
        import.meta.glob(
            './main_modules/missing_modules.md',
            { eager: true, query: '?raw', import: 'default' }
        )['./main_modules/missing_modules.md'] as string
    );
    return { modules_slides: modules_slides, modules_missing_slide: modules_missing_slide };
};
