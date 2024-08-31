// `shiki/core` entry does not include any themes or languages or the wasm binary.
import rehypeShikiFromHighlighter from '@shikijs/rehype/core';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { createHighlighterCore } from 'shiki/core';
import { unified } from 'unified';

// directly import the theme and language modules, only the ones you imported will be bundled.
import synthwave84 from 'shiki/themes/synthwave-84.mjs';

const highlighter = await createHighlighterCore({
    themes: [
        synthwave84,
    ],
    langs: [
        import('shiki/langs/markdown.mjs'),
        import('shiki/langs/html.mjs'),
        import('shiki/langs/python.mjs'),
        import('shiki/langs/shellscript.mjs'),
    ],
    loadWasm: import('shiki/wasm')
});

const processor = unified()
    .use(remarkParse)
    .use(remarkRehype, {
        allowDangerousHtml: true,
    })
    .use(rehypeShikiFromHighlighter, highlighter, {
        defaultColor: false,
        theme: 'synthwave-84',
        colorReplacements: {
            'synthwave-84': {
                '#262335': 'transparent',
            }
        },
        onError: (err) => {
            console.error(err);
        }
    })
    .use(rehypeRaw)
    // an inline plugin to add a "data-noescape" attribute to code elements

    .use(rehypeStringify);

export function parse_markdown(source: string): string {
    let normalized = '';
    for (const block of source.split('\n---')) {
        const trimmed = block.trim();
        if (trimmed.length === 0) {
            continue;
        }

        normalized += '<section>\n\n' + block.trim() + '\n\n</section>\n\n';
    }

    const code = processor.processSync(normalized).toString().replaceAll('<code>', '<code data-noescape class="nohighlight">');

    // if (code.includes('calendar')) {
    //     console.log(code);
    // }
    return code;
}
