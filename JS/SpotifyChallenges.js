const data = [
        {
          id: 1,
          name: "Shape of You",
          artist: "Ed Sheeran",
          genre: "Pop",
          album: "÷ (Divide)"
        },
        {
          id: 2,
          name: "Blinding Lights",
          artist: "The Weeknd",
          genre: "Pop",
          album: "After Hours"
        },
        {
          id: 3,
          name: "Bad Guy",
          artist: "Billie Eilish",
          genre: "Pop",
          album: "When We All Fall Asleep, Where Do We Go?"
        },
        {
          id: 4,
          name: "Uptown Funk",
          artist: "Mark Ronson ft. Bruno Mars",
          genre: "Funk",
          album: "Uptown Special"
        },
        {
          id: 5,
          name: "Havana",
          artist: "Camila Cabello",
          genre: "Pop",
          album: "Camila"
        },
        {
          id: 6,
          name: "Castle on the Hill",
          artist: "Ed Sheeran",
          genre: "Pop",
          album: "÷ (Divide)"
        },
        {
          id: 7,
          name: "Thinking Out Loud",
          artist: "Ed Sheeran",
          genre: "Pop",
          album: "x"
        },
        {
          id: 8,
          name: "Photograph",
          artist: "Ed Sheeran",
          genre: "Pop",
          album: "x"
        }
];
// console.log(data);

function createSingList(arr){
    const songList = arr.filter((val) => (val.artist === 'Ed Sheeran')).map((song) => song.name);

    return songList;
}

function createSingList2(arr){
    const res = [];

    for (const key of arr){
        if (key.artist === 'Ed Sheeran'){
            res.push(key.name);
        }
    }

    return res;
}


console.log(createSingList(data));
console.log(createSingList2(data));

const INSTRUMENT_TYPE_STRING = 0;
const INSTRUMENT_TYPE_PERCUSSION = 1;
const INSTRUMENT_TYPE_WIND = 2;

const instruments = [
    { 
      id: 0,
      name: 'guitar',
      type: INSTRUMENT_TYPE_STRING
    },
    { 
      id: 1,
      name: 'xylophone',
      type: INSTRUMENT_TYPE_PERCUSSION
    },
    {
      id: 2,
      name: 'zither',
      type: INSTRUMENT_TYPE_STRING
    },
    { 
      id: 3,
      name: 'bagpipes',
      type: INSTRUMENT_TYPE_WIND
    },
];

const sortItems = (objArr) => {
    return [...objArr].sort((a,b) => a.name === b.name ? 0  : (a.name > b.name ? 1 : -1));
}

console.log("Sorted by name: ", sortItems(instruments));
console.log(instruments);