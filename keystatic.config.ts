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
          ? '//www.phytely.com/path/to/dark-logo.png'
          : '//your-brand.com/path/to/light-logo.png';
        
        return <img src={path} height={24} />
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
