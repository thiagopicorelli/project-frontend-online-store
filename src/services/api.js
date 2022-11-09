export async function getCategories() {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  const categories = await fetch(url);
  const response = await categories.json();
  return response;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const urlQuery = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  const urlCategoryId = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  const urlBoth = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;

  if (categoryId && !query) {
    const categoryIdAPI = await fetch(urlCategoryId);
    const responseCategoryID = await categoryIdAPI.json();
    return responseCategoryID;
  } if (query && !categoryId) {
    const queryAPI = await fetch(urlQuery);
    const responseQuery = await queryAPI.json();
    return responseQuery;
  }
  const bothAPI = await fetch(urlBoth);
  const responseBoth = await bothAPI.json();
  return responseBoth;
}

export async function getProductById(productId) {
  const urlID = `https://api.mercadolibre.com/items/${productId}`;
  const idAPI = await fetch(urlID);
  const responseID = await idAPI.json();
  return responseID;
}
