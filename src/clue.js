// ITERATION 1

// Suspects Collection
const suspectsArray = [
	{ mrGreen: {
  firstName: 'Jacob',
  lastName: 'Green',
  occupation: 'Entrepreneur',
  age: 45,
  description: 'He has a lot of connections',
  image: '',
  color: 'green'} },
  
    { drOrchid: {
  firstName: 'Doctor',
  lastName: 'Orchid',
  occupation: 'Scientist',
  age: 26,
  description: ' PhD in plant toxicology. Adopted daughter or Mr. Boddy',
  image: '',
  color: 'white'} },
  
    { profPlum: {
  firstName: 'Victor',
  lastName: 'Plum',
  occupation: 'Designer',
  age: 22,
  description: 'Billionaire videogame designer',
  image: '',
  color: 'purple' } },
  
    { missScarlet: {
  firstName: 'Kasandra',
  lastName: 'Scarlet',
  occupation: 'Actor',
  age: 31,
  description: 'She is an A-list movie star with a dark past',
  image: '',
  color: 'red'} },
  
    { mrsPeacock: {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  occupation: 'Socialité',
  age: 36,
  description: 'She is from a wealthy family and uses her status and money to earn popularity',
  image: '',
  color: 'blue'} },
  
    { mrMustard: {
  firstName: 'Jack',
  lastName: 'Msutard',
  occupation: 'Retired Football player',
  age: 62,
  description: 'He is a former football player who tries to get by on his former glory',
  image: '',
  color: 'yellow'
  } },
];


// Weapons Collection
const weaponsArray = [
    {name: 'rope', weight: 10},
    {name: 'knife', weight: 8},
    {name: 'candlestick', weight: 2},
    {name: 'dumbell', weight: 30},
    {name: 'poison', weight: 2},
    {name: 'axe', weight: 15},
    {name: 'bat', weight: 13},
    {name: 'trophy', weight: 25},
    {name: 'pistol', weight: 20},
    
];
    

// Rooms Collection
const roomsArray = [
    'Dining Room',
    'Conservatory',
    'Kitchen',
    'Study',
    'Library',
    'Billiard Room',
    'Lounge',
    'Ballroom',
    'Hall',
    'Spa',
    'Living Room',
    'Observatory',
    'Theater',
    'Guest House',
    'Patio'
    
];


// ITERATION 2
function selectRandom() {

    let randomSuspect = Math.floor(Math.random() * suspectsArray.length);
    console.log(randomSuspect, suspectsArray[random]);
    
    let randomWeapon = Math.floor(Math.random() * weaponsArray.length);
    console.log(randomWeapon, weaponsArray[random]);
    
    let randomRoom = Math.floor(Math.random() * roomsArray.length);
    console.log(randomRoom, roomsArray[random]);

};

// function pickMystery()


// ITERATION 3
