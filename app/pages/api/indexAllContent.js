import { fetchEntries } from '../../utils/contentful';
import client from '../../utils/typesense';

const indexAllContentPassword = process.env.INDEX_ALL_CONTENT_PASSWORD;

const capitalizeFirstLetter = (string) => {
  if (!string) return string;
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const contentSchema = {
  name: 'content',
  fields: [
    { name: 'id', type: 'string' },
    { name: 'title', type: 'string', optional: true },
    { name: 'excerpt', type: 'string', optional: true },
    { name: 'description', type: 'string', optional: true },
    { name: 'urn', type: 'string' },
    { name: 'type', type: 'string', optional: true, facet: true },
  ],
};

const formatContent = (contentType, type) => {
  return contentType.reduce((acc, currentContent) => {
    if (type === 'subCategory') {
      currentContent.fields?.subCategories?.forEach((subCategory) => {
        return acc.push(contentToDocument(subCategory, `/location/${currentContent.fields.slug}/`));
      });
    }

    if (type === 'category') {
      currentContent.fields?.categories?.forEach((category) => {
        return acc.push(contentToDocument(category, '/location/'));
      });
    }

    if (type === 'product') {
      currentContent.fields.subCategories?.forEach((subCategory) => {
        subCategory.fields?.products?.forEach((product) => {
          return acc.push(contentToDocument(product, `/location/${currentContent.fields.slug}/${subCategory.fields.slug}/`));
        });
      });
    }

    return acc;
  }, []);
};

const contentToDocument = (content, prevSlug) => {
  return {
    id: content.sys?.id,
    title: content.fields?.title,
    excerpt: content.fields?.excerpt,
    description: content.fields?.description,
    urn: prevSlug + content.fields?.slug,
    type: capitalizeFirstLetter(content.sys?.contentType?.sys?.id),
  };
};

const indexAllContent = async (req, res) => {
  const password = req?.headers?.authorization.replace('Bearer ', '');
  if (password !== indexAllContentPassword) {
    return res.status(401).json({ response: 'Unauthorized' });
  }

  try {
    const collections = await client.collections().retrieve();

    collections?.forEach((collection) => {
      collection?.name && client.collections(collection.name).delete();
    });

    await client.collections().create(contentSchema);

    const rawCategories = await fetchEntries('catalog');
    const rawSubCategories = await fetchEntries('category');

    const categories = formatContent(rawCategories, 'category');
    const subCategories = formatContent(rawSubCategories, 'subCategory');
    const products = formatContent(rawSubCategories, 'product');

    const response = await client
      .collections('content')
      .documents()
      .import([...categories, ...subCategories, ...products], { action: 'create' });

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export default indexAllContent;
