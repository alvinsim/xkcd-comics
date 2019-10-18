export async function fetchComic(id) {
  const baseUrl = 'https://xkcd.com/';
  const postUrl = '/info.0.json';
  const comic = id ? id : '';
  const apiUrl = `${baseUrl}${comic}${postUrl}`;

  try {
    const response = await fetch(apiUrl, { method: 'GET' });
    let data;

    if (response.ok) {
      data = await response.json();
    }

    return data;
  } catch (e) {
    return { error: e };
  }
}
