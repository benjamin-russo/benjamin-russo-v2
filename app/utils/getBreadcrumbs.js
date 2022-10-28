const getBreadcrumbs = (slug) => {
  const paths = slug?.slice(1)?.split('/');
  return paths?.reduce((acc, currentPath, index) => {
    if (index !== 0) {
      acc.push({
        url: `${acc[index - 1].url}/${currentPath}`,
        title: currentPath.charAt(0).toUpperCase() + currentPath.slice(1).split('?')[0].replaceAll('-', ' '),
      });
    } else {
      acc.push({
        url: `/${currentPath}`,
        title: currentPath.charAt(0).toUpperCase() + currentPath.slice(1).replaceAll('-', ' '),
      });
    }
    return acc;
  }, []);
};

export default getBreadcrumbs;
