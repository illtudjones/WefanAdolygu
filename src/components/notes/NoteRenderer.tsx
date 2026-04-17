import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import 'highlight.js/styles/github-dark-dimmed.css';

interface NoteRendererProps {
  content: string;
}

export function NoteRenderer({ content }: NoteRendererProps) {
  return (
    <div className="prose">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[
          rehypeHighlight,
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: 'wrap' }],
        ]}
        components={{
          a: ({ href, children }) => (
            <a href={href} target={href?.startsWith('http') ? '_blank' : undefined} rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}>
              {children}
            </a>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
