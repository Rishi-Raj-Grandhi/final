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
      widget: "string"
    },
    {
      label: "Publication Date",
      name: "pubDate",
      widget: "datetime"
    },
    {
      label: "Description",
      name: "description",
      widget: "text"
    },
    {
      label: "Author",
      name: "author",
      widget: "string",
      default: "nicdun"
    },
    {
      label: "Excerpt",
      name: "excerpt",
      widget: "text"
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
      widget: "list"
    },
    {
      label: "Body",
      name: "body",
      widget: "markdown"
    }
  ]
};