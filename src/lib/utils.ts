import rehypeShikiFromHighlighter from '@shikijs/rehype/core'; // `shiki/core` entry does not include any themes or languages or the wasm binary.
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { createHighlighterCore, type HighlighterGeneric } from 'shiki/core';
import { unified } from 'unified';

const highlighter = await createHighlighterCore({
    themes: [
        import('shiki/themes/synthwave-84.mjs'),
        import('shiki/themes/dark-plus.mjs'),
        import('shiki/themes/aurora-x.mjs'),
    ],
    langs: [
        import('shiki/langs/markdown.mjs'),
        import('shiki/langs/html.mjs'),
        import('shiki/langs/json.mjs'),
        import('shiki/langs/python.mjs'),
        import('shiki/langs/shellscript.mjs'),
        import('shiki/langs/toml.mjs'),
    ],
    loadWasm: import('shiki/wasm')
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
}) as HighlighterGeneric<any, any>;

const processor = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, {
        allowDangerousHtml: true,
    })
    .use(rehypeShikiFromHighlighter, highlighter, {
        inline: 'tailing-curly-colon',
        defaultColor: false,
        theme: 'synthwave-84',
        colorReplacements: {
            'synthwave-84': {
                '#262335': 'transparent',
                '#fe4450': '#f3f8ff'
            }
        },
        onError: (err) => {
            console.error(err);
        },
        transformers: [
            {
                preprocess(_, options) {
                    if (options.meta?.__raw) {
                        this.meta = options.meta;
                    }
                    // fix for correct color replacement to prevent ansicolors from being affected
                    if (options.lang === 'ansi') {
                        // @ts-expect-error - exists 🙃
                        delete this.options.colorReplacements['synthwave-84']['#fe4450'];
                    }
                    else {
                        // @ts-expect-error - exists 🙃
                        this.options.colorReplacements['synthwave-84']['#fe4450'] = '#f3f8ff';
                    }
                },
            }
        ],
        parseMetaString(metaString, node) {
            if (node.tagName !== 'pre') {
                return;
            }
            for (const meta of metaString.split(/\s+/)) {
                if (meta.includes('=')) {
                    const [key, value] = meta.split('=');
                    const start_index = value.startsWith('"') ? 1 : 0;
                    const end_index = value.endsWith('"') ? -1 : undefined;
                    return { [key]: value.slice(start_index, end_index) };
                }
            }
        },
    })
    .use(rehypeRaw)
    .use(rehypeStringify);

export async function parse_markdown(source: string): Promise<string> {
    let normalized = '';
    for (const block of source.split('\n---')) {
        let safe_block = block.trim();
        if (safe_block.length === 0) {
            continue;
        }
        let start_tag = '<section>\n\n';
        const first_newline = safe_block.indexOf('\n');
        const first_line = safe_block.slice(0, first_newline).trim();
        if (first_line.includes('class="') || first_line.includes('animate')) {
            start_tag = first_line.startsWith('<') ? ('<section data-auto-animate>\n' + first_line + "\n\n") : ('<section ' + first_line + ' data-auto-animate>\n\n');
            safe_block = safe_block.slice(first_newline + 1).trimStart();
        }
        normalized += start_tag + safe_block + '\n\n</section>\n\n';
    }

    const code = (await processor.process(normalized)).toString().replaceAll('<code', '<code data-noescape class="nohighlight"');

    return code;
}
