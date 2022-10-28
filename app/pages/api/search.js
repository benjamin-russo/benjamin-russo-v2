import client from '../../utils/typesense';

const indexAllContent = async (req, res) => {
  const { q, p, s } = req.query;
  const searchParams = {
    q,
    query_by: 'title, excerpt, description',
    facet_by: 'type',
    page: p || 1,
    per_page: s || 10,
    highlight_fields: false,
  };
  try {
    const results = await client.collections('content').documents().search(searchParams);
    const hits = results?.hits?.map((result) => ({ ...result.document }));
    const facet = results?.facet_counts[0]?.counts?.reduce((acc, { count, value }) => {
      acc[value] = {
        count,
      };
      return acc;
    }, {});
    res.status(200).json({ hits, facet, total: results.found });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export default indexAllContent;
