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
      name: 'Phytely CMS', 
      mark: ({ colorScheme }) => {
        let path = 'https://www.phytely.com/logo.png';
        
        return <img src={path} style={{ 
            height: '16px', width: '16px', 
            borderRadius: '4px',
            backgroundColor: colorScheme === 'dark' ? 'transparent' : '#000000',
            padding: '3px',
            objectFit: 'contain',
            boxSizing: 'content-box',
            display: 'inline-block',
            verticalAlign: 'middle'
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
