export async function getCategories() {
  const api = 'https://api.mercadolibre.com/sites/MLA/categories';
  const res = await fetch(api);
  const data = await res.json();
  return data;
}

export async function getItemsByQuery(query) {
  const categorias = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`);
  const data = await categorias.json();
  return data;
}

export async function getItemsByCategory(CATEGORY_ID) {
  const api = `https://api.mercadolibre.com/sites/MLA/search?category=${CATEGORY_ID}`;
  const res = await fetch(api);
  const data = await res.json();
  return data;
}

export async function productDetail(categoryId) {
  const api = `https://api.mercadolibre.com/items/${categoryId}`;
  const res = await fetch(api);
  const data = await res.json();
  return data;
}
