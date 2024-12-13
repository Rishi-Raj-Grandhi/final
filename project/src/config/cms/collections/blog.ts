import type { BlogPost } from '../types';

export const blogCollection = {
  name: "blog",
  label: "Blog",
  folder: "src/pages/posts",
  create: true,
  slug: "{{slug}}",
  fields: [
    {
      label: "Layout",
      name: "layout",
      widget: "hidden",
      default: "../../layouts/post.astro"
    },
    {
      label: "Title",
      name: "title",
      widget: "string",
      required: true
    },
    {
      label: "Publication Date",
      name: "pubDate",
      widget: "datetime",
      required: true
    },
    {
      label: "Description",
      name: "description",
      widget: "text",
      required: true
    },
    {
      label: "Author",
      name: "author",
      widget: "string",
      default: "nicdun",
      required: true
    },
    {
      label: "Excerpt",
      name: "excerpt",
      widget: "text",
      required: true
    },
    {
      label: "Image",
      name: "image",
      widget: "object",
      fields: [
        {
          label: "Source",
          name: "src",
          widget: "image",
          required: false
        },
        {
          label: "Alt Text",
          name: "alt",
          widget: "string",
          required: false
        }
      ]
    },
    {
      label: "Tags",
      name: "tags",
      widget: "list",
      required: true
    },
    {
      label: "Body",
      name: "body",
      widget: "markdown",
      required: true
    }
  ]
} as const;