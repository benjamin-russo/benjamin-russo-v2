const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

const client = require('contentful').createClient({
  space: space,
  accessToken: accessToken,
});

export async function fetchEntries(contentType, condition) {
  console.log('fetch')
  const entries = await client.getEntries({ content_type: contentType, ...condition });
  if (entries?.items) return entries.items;
  return null;
}

export async function fetchEntryBySlug(contentType, slug) {
  console.log('fetch')
  const entry = await client.getEntries({
    content_type: contentType,
    'fields.slug': slug,
    limit: 1,
  });
  if (entry?.items[0]?.fields) return entry.items[0];
  return null;
}
