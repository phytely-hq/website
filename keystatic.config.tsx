import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
      kind: 'github',
      repo: {
        owner: 'phytely-hq',
        name: 'website'
      },
    },
  ui: {
    brand: { 
      name: 'Phytely | CMS', 
      mark: ({ colorScheme }) => {
        let path = colorScheme === 'dark'
          ? 'https://www.phytely.com/phytely-logo.png'
          : 'https://www.phytely.com/phytely-logo.png';
        
        return <img src={path} style={{ 
            height: '12px', width: '12px', 
            borderRadius: '3px',
            backgroundColor: '#000000',
            padding: '4px',
            objectFit: 'contain',
            boxSizing: 'content-box',
            display: 'inline-block',
            vericalAlign: 'middle'
            }} alt="Phytely Keystatic icon"  />
      },
    },
  },
  collections: {
    posts: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        author: fields.text({ label: 'Author', defaultValue: 'John Doe' }), 
        publishedDate: fields.date({ label: 'Published Date' }),
        summary: fields.text({ label: 'Summary', multiline: true }),
        coverImage: fields.image({
          label: 'Cover Image',
          directory: 'public/images/blog/covers',
          publicPath: '/images/blog/covers/',
        }),
        
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'public/images/blog',
            publicPath: '/images/blog/',
          },
        }),
      },
    }),
  },
});
