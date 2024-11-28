const API_KEY = 'adf44b533401417c125f804a142fedec';
const SHOW_ID = 94605;
const displayedCharacters = ['Jinx', 'Vi']

export default async function fetchData() {
  const url = `https://api.themoviedb.org/3/tv/${SHOW_ID}/credits?api_key=${API_KEY}`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const data = await response.json();
    console.log(data);

    // Extract relevant character data
    const characters = data.cast
      .filter((character) => displayedCharacters.includes(character.name)) // Filter by name
      .map((character) => ({
        id: character.id,
        name: character.name,
        image: `https://image.tmdb.org/t/p/w500${character.profile_path}`, // Construct image URL
        isClicked: false,
      }));

    return characters;
  } catch (error) {
    console.error('Error fetching characters:', error);
    return [];
  }
}
