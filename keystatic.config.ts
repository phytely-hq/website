import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
      kind: 'github',
      repo: {
        owner: 'phytely-hq',
        name: 'website'
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
