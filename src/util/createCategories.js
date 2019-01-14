export const createAndReturnCategories = products => {
  const categories = [];
  const rings = { title: 'rings', products: [] };
  const earrings = { title: 'earrings', products: [] };
  const pendants = { title: 'pendants', products: [] };
  const braceletsAndChains = { title: 'braceletsAndChains', products: [] };
  const brooches = { title: 'brooches', products: [] };
  const cufflinks = { title: 'cufflinks', products: [] };

  categories.push(rings, earrings, pendants, braceletsAndChains, brooches, cufflinks);

  products.map((product, key) => {
    categories.map((category, key) => {
      if (category.title === product.category) {
        category.products.push(product);
      }
    });
  });

  return categories;
};
