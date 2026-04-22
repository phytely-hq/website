import { DocumentRenderer, DocumentRendererProps } from '@keystatic/core/renderer';
import { CodeBlock } from '@/components/ui/code-block';

interface PostProps {
  title: string;
  summary: string;
  author: string;
  date: string;
  coverImage?: string;
  content: any; 
}

export default function EditorialPost({ title, summary, author, date, coverImage, content }: PostProps) {
  
  const renderers: DocumentRendererProps['renderers'] = {
    block: {
      heading: ({ level, children }) => {
        const classes = "uppercase font-black tracking-tight text-foreground mt-16 mb-6 break-inside-avoid break-after-avoid font-bold mb-4 block";
        if (level === 2) return <h2 className={`${classes} text-3xl md:text-4xl`}>{children}</h2>;
        return <h3 className={`${classes} text-xl md:text-2xl`}>{children}</h3>;
      },
      image: (props) => (
        <div className="my-10 w-full break-inside-avoid">
          <img 
            {...props} 
            className="w-full h-auto object-cover bg-muted grayscale hover:grayscale-0 transition-all duration-700" 
          />
          {props.alt && (
            <p className="text-xs md:text-sm font-medium leading-relaxed text-muted-foreground text-start mt-4">
              <span className="text-primary mr-2 text-xs font-black">//</span>
              <span className="text-[10px] uppercase tracking-[0.2em] mr-2">FIG.</span>
              {props.alt}
            </p>
          )}
        </div>
      ),
      code: ({ children, language }) => {
        return (
          <div className="my-10 w-full break-inside-avoid text-start">
           <CodeBlock 
            code={children} 
            language={language} 
            showLineNumbers 
           />
          </div>
        );
      },
      blockquote: ({ children }) => (
        <blockquote className="my-14 py-12 w-full flex flex-col items-center justify-center text-center break-inside-avoid [column-span:all]">
          <div className="max-w-4xl mx-auto flex flex-col items-center px-6">
            <div className="w-full [&>p]:text-4xl [&>p]:leading-[1.3] [&>p]:md:leading-[1.2] [&>p]:text-muted [&>p]:font-serif [&>p]:mb-0 [&>p]:text-balance">
              {children}
            </div>
          </div>
        </blockquote>
      ),
      paragraph: ({ children }) => (
        <p className="text-sm leading-relaxed text-muted-foreground mb-6 last:mb-0 sm:text-justify text-start">
          {children}
        </p>
      ),
    },
    inline: {
      bold: ({ children }) => <strong className="font-bold text-foreground">{children}</strong>,
      link: ({ href, children }) => (
        <a href={href} className="text-foreground underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground transition-colors">
          {children}
        </a>
      ),
      italic: ({ children }) => <em className="italic text-foreground/60">{children}</em>,
    },
  };

  const formattedDate = new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <article className="w-full pb-24 overflow-hidden bg-background text-center pt-8 md:pt-12">
      <header className="max-w-screen-2xl mx-auto px-6 md:px-10 w-full flex flex-col items-center text-center mb-8">
        
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 sm:gap-10 text-xs md:text-sm font-medium text-foreground w-full mb-8 pb-4">
          <div className="flex items-center text-xs">
            <time>{formattedDate}</time>
          </div>
          <div className="flex items-center text-xs">
            <span>{author}</span>
          </div>
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase leading-[0.88] tracking-tighter text-balance w-full mb-8 text-foreground">
          {title}
        </h1>
        
        <p className="text-sm sm:text-base font-medium leading-relaxed max-w-4xl text-muted-foreground/50 mb-12">
          {summary}
        </p>
      </header>

      {coverImage && (
        <div className="max-w-screen-2xl mx-auto px-6 md:px-10 w-full mb-16 md:mb-24">
          <div className="relative w-full aspect-video md:aspect-[21/9] bg-muted overflow-hidden">
            <img 
              src={coverImage} 
              alt={`Cover for ${title}`}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      <div className="max-w-screen-2xl mx-auto px-6 md:px-10 w-full">
        <div className="w-full md:columns-2 gap-10 lg:gap-16 column-fill-auto text-start sm:text-center">
          <DocumentRenderer document={content} renderers={renderers} />
        </div>
      </div>

    </article>
  );
}