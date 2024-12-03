const API_KEY = 'CYz6vjAnJF12HerHurgbirG3MybbJp3h';

const displayedCharacters = [
    {displayName: 'Jinx',  gifId: 'PM7EBVwNHRuXYKIsJf'},
    {displayName: 'Vi',  gifId: 'ULd32LlfkRFUQEZVi5'},
    {displayName: 'Vander', gifId: '1Ukza4n3t9xC7EJzPI'},
    {displayName: 'Viktor', gifId: 'ue91KrnPxbQNyM8bay'},
    {displayName: 'Jayce', gifId: 'dfdo2x7akl3UPrb9xC'},
    {displayName: 'Mel', gifId: 'moMT9Qrn5PDq3VxsSs'},
    {displayName: 'Heimerdinger', gifId: 'kZOxW6jOTFqVTFtYf1'},
    {displayName: 'Silco', gifId: '5JPRXRZnH1JlvdtZMs'},
    {displayName: 'Ekko', gifId: 'WXFLTuHi6F2E8sll5S'},
    {displayName: 'Caitlyn', gifId: '7F6oMII4D1RL9GWupT'},
    {displayName: 'Singed', gifId: 'sObkolEu4ak4RLhvQE'},
    {displayName: 'Sevika', gifId: 'G7nIVSQG3UriYvAKAM'},
    
];

export default async function fetchData() {
  try {
    const characters = await Promise.all(
      displayedCharacters.map(async ({displayName, gifId}) => {
        const url = `https://api.giphy.com/v1/gifs/${gifId}?api_key=${API_KEY}`;


        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Failed to fetch GIF for ${displayName}: ${response.statusText}`);
        }

        const data = await response.json();
        const gifImage = data.data.images.fixed_width.url;

        return {
            id: gifId, // You can keep track of the GIF id
            name: displayName,
            image: gifImage,
            isClicked: false,
          };
        })
      );
  
      return characters;
    } catch (error) {
      console.error('Error fetching data from Giphy:', error);
      return [];
    }
  }  
