/* Urls */
const urls = {
  static: {
    getAllDogs: 'https://dog.ceo/api/breeds/list/all',
    getPlaceholderImage: 'https://via.placeholder.com/100'
  },
  dynamic: {
    getDogsImages: (breed) => `https://dog.ceo/api/breed/${breed}/images/random`
  }
} 

/* Actions */
export function fetchDogs() {
  return fetch(urls.static.getAllDogs)
    .then((response) => response.json())
    .then((data) => data.message);
}

export async function fetchDogsImages(dogs) {
  const mutatedDogs = JSON.parse(JSON.stringify(dogs));

  for await (const breed of Object.keys(dogs)) {
    await fetch(urls.dynamic.getDogsImages(breed))
    .then((response) => response.json())
    .then((data) => (mutatedDogs[breed].image = data.message));
  }
  return mutatedDogs;
}
