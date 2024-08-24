import toons from '../src/assets/TextThumbnail/honeylion.png';
import books from '../src/assets/TextThumbnail/books.webp'
import facts from '../src/assets/TextThumbnail/facts.webp';
import kingdoms from '../src/assets/TextThumbnail/kingdoms.webp';
import foods from '../src/assets/TextThumbnail/popularfoods.webp';
import dances from '../src/assets/TextThumbnail/dances.webp';
import africa from '../src/assets/TextThumbnail/africa.jpg';
import eastAfrica from '../src/assets/TextThumbnail/eastAfrica.jpg';
import MusicNaij from '../src/assets/TextThumbnail/musicNigeria.jpg';
import naij from '../src/assets/TextThumbnail/nigeria.jpg';
import sportsNaij from '../src/assets/TextThumbnail/sportsNigeria.jpg';
import factsThumb from '../src/assets/TextThumbnail/factsAfrica.jpg';
import geo from '../src/assets/TextThumbnail/geography.jpg';
import compImg from '../src/assets/TextThumbnail/computer.webp';
import festImg from '../src/assets/TextThumbnail/festivals.webp';
//text docs 
import txtToons from '../src/TextFiles/Literature/History/AfricanToons.txt';
import txtBooks from '../src/TextFiles/Literature/History/Booklist.txt';
import africatxt from '../src/TextFiles/Literature/Explore/AfricanCountries.txt'
import historicNigeria from '../src/TextFiles/Literature/History/HistoricalEventsNigeria.txt'
import historicAfrica from '../src/TextFiles/Literature/History/HistoricEvents.txt'
import musicNigeria from '../src/TextFiles/Literature/History/MusicNigeria.txt'
import sportsNigeria from '../src/TextFiles/Literature/History/SportsNigeria.txt'
import computerEastAfrica from '../src/TextFiles/Literature/History/FirstComputer.txt'
import festivals from '../src/TextFiles/Literature/History/Festivals.txt'
import eastAfricaTxt from '../src/TextFiles/Literature/Explore/EastAfrica.txt'
import cape from '../src/TextFiles/Literature/Explore/CapeVerde.txt';
import txtDances from '../src/TextFiles/Literature/Explore/Dances.txt';
import txtFoods from '../src/TextFiles/Literature/Explore/PopularFood.txt';
import txtKingdom from '../src/TextFiles/Literature/Explore/FamousAfricanKingdoms.txt';
import factAfrica from '../src/TextFiles/Literature/Explore/FactsAfrica.txt'
import Africageography from '../src/TextFiles/Literature/Explore/Culture.txt'

export const history =  [
    {
        "id" : 1,
        "name" : "African Toons",
        "thumbnail" : toons,
        "text" : txtToons
    },
    {
        "id" : 2,
        "name" : "African Books",
        "thumbnail" : books,
        "text" : txtBooks
    },
    {
        "id" : 3,
        "name" : "Historic Events in Nigeria",
        "thumbnail" : naij,
        "text" : historicNigeria
    },
    {
        "id" : 4,
        "name" : "Historic Events Africa",
        "thumbnail" : africa,
        "text" : historicAfrica
    },
    {
        "id" : 5,
        "name" : "Music in Nigeria",
        "thumbnail" : MusicNaij,
        "text" : musicNigeria
    },
    {
        "id" : 6,
        "name" : "Sports Development Nigeria",
        "thumbnail" : sportsNaij,
        "text" : sportsNigeria
    },
    {
        "id" : 7,
        "name" : "The First Computers in East Africa",
        "thumbnail" : compImg,
        "text" : computerEastAfrica
    },
    {
        "id" : 8,
        "name" : "Top african Festivals",
        "thumbnail" : festImg,
        "text" : festivals
    }
]


export const explore =  [
    {
        "id" : 1,
        "name" : "African Countries & Capital",
        "thumbnail" : africa,
        "text" : africatxt
    },
    {
        "id" : 2,
        "name" : "Cape Verde Facts",
        "thumbnail" : facts,
        "text" : cape
    },
    {
        "id" : 3,
        "name" : "Famout African Dances",
        "thumbnail" : dances,
        "text" : txtDances
    },
    {
        "id" : 4,
        "name" : "Countries in East Africa",
        "thumbnail" : eastAfrica,
        "text" : eastAfricaTxt
    },
    {
        "id" : 5,
        "name" : "Popular Foods",
        "thumbnail" : foods,
        "text" : txtFoods
    },
    {
        "id" : 7,
        "name" : "Famout African Kingdoms",
        "thumbnail" : kingdoms,
        "text" : txtKingdom
    },
    {
        "id" : 8,
        "name" : "Facts About Africa",
        "thumbnail" : factsThumb,
        "text" : factAfrica
    },
    {
        "id" : 9,
        "name" : "African Geography",
        "thumbnail" : geo,
        "text" : Africageography
    }
]