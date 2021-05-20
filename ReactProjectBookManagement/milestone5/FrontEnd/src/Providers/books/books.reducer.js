import booksTypes from './books.types';
import { removeFromArray } from './books.utils'

export const BOOK_INITIAL_STATE = {
        books: [
        // {
        //     "id": "5f4fd116c277b45acc698bce",
        //     "isbn": "9781393495574",
        //     "title": "The Accursed God",
        //     "author": "Vivek Dutta Mishra",
        //     "pages": "380",
        //     "price": "199",
        //     "rating": "4.9",
        //     "votes": "49",
        //     "description": "THE LOST EPIC ============ The story of the epic battle of Kurukshetra has been told and retold for ages. Millennia of dust, fables, imaginations — and the epic itself is lost. What remained is the story of a family feud and ambition of Kauravas and Pandavas. But why, then, was this an epic war? Why entire Aryavart plunged into this first real world-war? Why the echo of this ancient war still resonates after all those centuries? Rediscover the lost epic whose origin lies in the birth of the Kurukshetra that had tasted its first blood over a hundred years before the final Mahabharata war. Discover the complete saga of Mahabharata which goes far and beyond just Kauravas and Pandavas and their ambitions. THE ACCURSED GOD ================ Long before the epic battle, long before even the birth of Kurukshetra, a man swore on his father’s pyre to avenge against the mightiest empire, any civilization had ever seen. Between his might and near-certain destruction of the Empire, stood a warrior, who rose like a phoenix from the ashes of his seven dead brothers — taking the mantle of a fabled Accursed God. In the clash that followed, Aryavart heard several more oaths by the side of more burning pyres, until, a young king decided that no price is too high for peace. Little did he know that the price would be a war engulfing the entire Aryavart, where few would live to tell the tale. And only one man can delay the inevitable if not prevent it. He is the accursed God and even he doesn’t know that destiny is like a quicksand, the more he tries to prevent it, the faster Aryavart moves towards the ultimate catastrophe. Discover the saga of a man’s journey to that of a legendary and universally hated Accursed God, the saga of the ruthless ambitions and unfulfilled loves, endless deceits and vengeful oaths, and the saga of the battles to prevent the ultimate war. TESTIMONIALS ============= When is the last time you finished a book and discover something? Here is a gripping and intriguing take on the greatest epic of all time through the eyes of its pivotal character that leaves your mind exhilarated, adding a fresh perspective to the tale that’s known, yet unknown. Throughout the fast action-packed book, the author masterfully blends politics, war and science and blurs the gap between love and hate, peace and war, and fiction and reality. A must-read novel which will leave you wanting for more. --- Colonel Avanish, Indian Army",
        //     "tags": [
        //         "epic",
        //         "indian",
        //         "mahabharata",
        //         "bhishma",
        //         "history"
        //     ],
        //     "series": "The Lost Epic",
        //     "seriesIndex": "1",
        //     "releaseDate": "2020-01-14T18:30:00.000Z",
        //     "cover": "http://thelostepic.com/wp-content/uploads/2021/04/THE-ACCURSED-GOD-Front-780x1100-1.jpg"
        // },
        // {
        //     "id": "5f4fb1e86980a8fb2b76e84b",
        //     "isbn": "9781408855652",
        //     "title": "Harry Potter and the Philosopher's Stone",
        //     "author": "JK Rowling",
        //     "pages": "352",
        //     "price": "340",
        //     "rating": "4.7",
        //     "votes": "10192",
        //     "description": "Harry Potter and the Philosopher's Stone was J.K. Rowling's first novel, followed by the subsequent six titles in the Harry Potter series, as well as three books written for charity: Fantastic Beasts and Where to Find Them, Quidditch Through the Ages and The Tales of Beedle the Bard. The Harry Potter novels have now sold over 450 million copies worldwide and been translated into 78 languages.",
        //     "tags": [
        //         "harry potter",
        //         "fiction",
        //         "fantasy",
        //         "best-seller"
        //     ],
        //     "seriesIndex": "1",
        //     "releaseDate": "1997-06-25T18:30:00.000Z",
        //     "cover": "https://images2.vudu.com/poster2/10617-338"
        // },
        // {
        //     "id": "5f4fb4e66980a8fb2b76e84c",
        //     "isbn": "1408855666",
        //     "title": "Harry Potter and theHarry Potter and the Chamber of Secrets ",
        //     "author": "JK Rowling",
        //     "pages": "384",
        //     "price": "259",
        //     "rating": "4.7",
        //     "votes": "8518",
        //     "description": "Harry Potter's summer has included the worst birthday ever, doomy warnings from a house-elf called Dobby, and rescue from the Dursleys by his friend Ron Weasley in a magical flying car! Back at Hogwarts School of Witchcraft and Wizardry for his second year, Harry hears strange whispers echo through empty corridors - and then the attacks start. Students are found as though turned to stone . Dobby's sinister predictions seem to be coming true.",
        //     "tags": [
        //         "harry potter",
        //         "fiction",
        //         "fantasy",
        //         "best-seller"
        //     ],
        //     "series": "Harry Potter",
        //     "seriesIndex": "2",
        //     "releaseDate": "1998-07-01T18:30:00.000Z",
        //     "cover": "https://kbimages1-a.akamaihd.net/1c469dcb-5d48-47cb-a61b-5298babdb0d3/1200/1200/False/harry-potter-and-the-chamber-of-secrets-6.jpg"
        // },
        // {
        //     "id": "5f4fb5fc6980a8fb2b76e84d",
        //     "isbn": "1408855674",
        //     "title": "Harry Potter and the Prisoner of Azkaban ",
        //     "author": "JK Rowling",
        //     "pages": "480",
        //     "price": "400",
        //     "rating": "4.6",
        //     "votes": "4850",
        //     "description": "Harry Potter and the Chamber of Secrets is a fantasy novel written by British author J. K. Rowling and the second novel in the Harry Potter series. The plot follows Harry's second year at Hogwarts School of Witchcraft and Wizardry, during which a series of messages on the walls of the school's corridors warn that the 'Chamber of Secrets' has been opened and that the 'heir of Slytherin' would kill all pupils who do not come from all-magical families. These threats are found after attacks that leave residents of the school petrified. Throughout the year, Harry and his friends Ron and Hermione investigate the attacks.",
        //     "tags": [
        //         "harry potter",
        //         "fiction",
        //         "fantasy",
        //         "best-seller"
        //     ],
        //     "series": "Harry Potter",
        //     "seriesIndex": "3",
        //     "releaseDate": "1999-07-08",
        //     "cover": "https://kbimages1-a.akamaihd.net/69eca8ca-652c-4641-b86f-42de460a6d4d/1200/1200/False/harry-potter-and-the-prisoner-of-azkaban-6.jpg"
        // },
        // {
        //     "id": "5f4fb70f6980a8fb2b76e84e",
        //     "isbn": "1408855682",
        //     "title": "Harry Potter and the Goblet of Fire",
        //     "author": "JK Rowling",
        //     "pages": "640",
        //     "price": "450",
        //     "rating": "4.7",
        //     "votes": "4503",
        //     "description": "Harry Potter and the Chamber of Secrets is a fantasy novel written by British author J. K. Rowling and the second novel in the Harry Potter series. The plot follows Harry's second year at Hogwarts School of Witchcraft and Wizardry, during which a series of messages on the walls of the school's corridors warn that the 'Chamber of Secrets' has been opened and that the 'heir of Slytherin' would kill all pupils who do not come from all-magical families. These threats are found after attacks that leave residents of the school petrified. Throughout the year, Harry and his friends Ron and Hermione investigate the attacks.",
        //     "tags": [
        //         "harry potter",
        //         "fiction",
        //         "fantasy",
        //         "best-seller"
        //     ],
        //     "series": "Harry Potter",
        //     "seriesIndex": "4",
        //     "releaseDate": "2000-07-08",
        //     "cover": "https://cdn11.bigcommerce.com/s-z7qq7adctg/images/stencil/500x659/products/674092/774560/btcl__84587.1522183285.jpg?c=2"
        // },
        // {
        //     "id": "5f4fb7b36980a8fb2b76e84f",
        //     "isbn": "9781408855690",
        //     "title": "Harry Potter and the Order of the Phoenix",
        //     "author": "JK Rowling",
        //     "pages": "816",
        //     "price": "509",
        //     "rating": "4.7",
        //     "votes": "4519",
        //     "description": "",
        //     "tags": [
        //         "harry potter",
        //         "fiction",
        //         "fantasy",
        //         "best-seller"
        //     ],
        //     "series": "Harry Potter",
        //     "seriesIndex": "5",
        //     "releaseDate": "2003-07-21",
        //     "cover": "https://images2.vudu.com/poster2/129092-338"
        // },
        // {
        //     "id": "5f4fb89d6980a8fb2b76e850",
        //     "isbn": "9781408855706",
        //     "title": "Harry Potter and the Half Blood Prince",
        //     "author": "JK Rowling",
        //     "pages": "560",
        //     "price": "400",
        //     "rating": "4.7",
        //     "votes": "5651",
        //     "description": "",
        //     "tags": [
        //         "harry potter",
        //         "fiction",
        //         "fantasy",
        //         "best-seller"
        //     ],
        //     "series": "Harry Potter",
        //     "seriesIndex": "6",
        //     "releaseDate": "2005-07-25",
        //     "cover": "https://cdn01.sapnaonline.com/product_media/9781408855706/md_9781408855706.jpg"
        // },
        // {
        //     "id": "5f4fb9596980a8fb2b76e851",
        //     "isbn": "1408894742",
        //     "title": "Harry Potter and the Deathly Hallows",
        //     "author": "JK Rowling",
        //     "pages": "640",
        //     "price": "550",
        //     "rating": "4.7",
        //     "votes": "7262",
        //     "description": "Harry Potter and the Deathly Hallows is a fantasy novel written by British author J. K. Rowling and the seventh and final novel of the Harry Potter series. It was released on 21 July 2007 in the United Kingdom by Bloomsbury Publishing, in the United States by Scholastic, and in Canada by Raincoast Books. The novel chronicles the events directly following Harry Potter and the Half-Blood Prince (2005) and the final confrontation between the wizards Harry Potter and Lord Voldemort.",
        //     "tags": [
        //         "harry potter",
        //         "fiction",
        //         "fantasy",
        //         "best-seller"
        //     ],
        //     "series": "Harry Potter",
        //     "seriesIndex": "7",
        //     "releaseDate": "2007-07-21",
        //     "cover": "https://images-na.ssl-images-amazon.com/images/I/811t1pfIZXL.jpg"
        // },
        // {
        //     "id": "5f4fbb7d6980a8fb2b76e852",
        //     "isbn": "9781509808694",
        //     "title": "Kane and Abel",
        //     "author": "Jeffrey Archer",
        //     "pages": "250",
        //     "price": "199",
        //     "rating": "4.1",
        //     "votes": "2367",
        //     "description": "They had only one thing in common . . . William Lowell Kane and Abel Rosnovski: one the son of a Boston millionaire, the other of a penniless Polish immigrant. Two men born on the same day, on opposite sides of the world, their paths destined to cross in the ruthless struggle to build a fortune. A memorable story, spanning sixty years, of two powerful men linked by an all-consuming hatred, brought together by fate to save – and finally destroy – each other. ‘The ultimate novel of sibling rivalry’ Dan Brown",
        //     "tags": [
        //         "fiction",
        //         "classic",
        //         "chronology",
        //         "english"
        //     ],
        //     "series": "",
        //     "seriesIndex": "",
        //     "releaseDate": "1979-01-01",
        //     "cover": "https://images-na.ssl-images-amazon.com/images/I/81Y8QLPFFlL.jpg"
        // },
        // {
        //     "id": "5f4fbd356980a8fb2b76e853",
        //     "isbn": " 8193387627",
        //     "title": "The Count of Monte Cristo",
        //     "author": "Alexandre Dumas",
        //     "pages": "932",
        //     "price": "350",
        //     "rating": "4.5",
        //     "votes": "1139",
        //     "description": "The Count of Monte Cristo (French: Le Comte de Monte-Cristo) is an adventure novel by French author Alexandre Dumas (père) completed in 1844. It is one of the author's more popular works, along with The Three Musketeers. Like many of his novels, it was expanded from plot outlines suggested by his collaborating ghostwriter Auguste Maquet.[1] Another important work by Dumas, written before his work with Maquet, was the 1843 short novel Georges; this novel is of particular interest to scholars because Dumas reused many of the ideas and plot devices later in The Count of Monte Cristo.[2] The story takes place in France, Italy, and islands in the Mediterranean during the historical events of 1815–1839: the era of the Bourbon Restoration through the reign of Louis-Philippe of France. It begins just before the Hundred Days period (when Napoleon returned to power after his exile). The historical setting is a fundamental element of the book, an adventure story primarily concerned with themes of hope, justice, vengeance, mercy, and forgiveness. It centres on a man who is wrongfully imprisoned, escapes from jail, acquires a fortune, and sets about exacting revenge on those responsible for his imprisonment. His plans have devastating consequences for both the innocent and the guilty. The book is considered a literary classic today. ",
        //     "tags": [
        //         "fiction",
        //         "classic",
        //         "best-seller",
        //         "historic fiction",
        //         "adventure"
        //     ],
        //     "series": "",
        //     "seriesIndex": "",
        //     "releaseDate": "1886-01-01",
        //     "cover": "https://images-na.ssl-images-amazon.com/images/I/61qF6xsWq3L.jpg"
        // },
        // {
        //     "id": "5f4fbe4c6980a8fb2b76e854",
        //     "isbn": "0007527519",
        //     "title": "Five Little Pigs",
        //     "author": "Agatha Christie",
        //     "pages": "288",
        //     "price": "180",
        //     "rating": "4.6",
        //     "votes": "605",
        //     "description": "The Count of Monte Cristo (French: Le Comte de Monte-Cristo) is an adventure novel by French author Alexandre Dumas (père) completed in 1844. It is one of the author's more popular works, along with The Three Musketeers. Like many of his novels, it was expanded from plot outlines suggested by his collaborating ghostwriter Auguste Maquet.[1] Another important work by Dumas, written before his work with Maquet, was the 1843 short novel Georges; this novel is of particular interest to scholars because Dumas reused many of the ideas and plot devices later in The Count of Monte Cristo.[2] The story takes place in France, Italy, and islands in the Mediterranean during the historical events of 1815–1839: the era of the Bourbon Restoration through the reign of Louis-Philippe of France. It begins just before the Hundred Days period (when Napoleon returned to power after his exile). The historical setting is a fundamental element of the book, an adventure story primarily concerned with themes of hope, justice, vengeance, mercy, and forgiveness. It centres on a man who is wrongfully imprisoned, escapes from jail, acquires a fortune, and sets about exacting revenge on those responsible for his imprisonment. His plans have devastating consequences for both the innocent and the guilty. The book is considered a literary classic today. ",
        //     "tags": [
        //         "fiction",
        //         "detective",
        //         "hercule poirot",
        //         "suspense",
        //         "murder"
        //     ],
        //     "series": "Hercule Poirot",
        //     "seriesIndex": "",
        //     "releaseDate": "1942-05-01",
        //     "cover": "https://kbimages1-a.akamaihd.net/d54608a2-1499-47eb-bd78-e96b384c49e5/1200/1200/False/five-little-pigs.jpg"
        // },
        // {
        //     "id": "5f4fc0396980a8fb2b76e855",
        //     "isbn": "8129135728",
        //     "title": "Half Girl Friend",
        //     "author": "Chetan Bhagat",
        //     "pages": "280",
        //     "price": "180",
        //     "rating": "3.2",
        //     "votes": "8300",
        //     "description": "Half Girlfriend is an Indian English coming of age, young adult romance novel by Indian author Chetan Bhagat.[1] The novel, set in rural Bihar, New Delhi, Patna, and New York, is the story of a Bihari boy in quest of winning over the girl he loves.[2][3] This is Bhagat's sixth novel which was released on 1 October 2014[4] by Rupa Publications. The novel has also been published in Hindi[5] and Gujarati[6] versions as well. Dedicated to 'non English-types', as Chetan Bhagat wrote, the book divulges the sentiments and linguistic struggles of a backward rural Bhojpuri-laced Hindi-speaking boy from Bihar as he enrolls himself at the prestigious English-medium St. Stephen’s College, New Delhi, and falls in love with a 'high class English-speaking rich Delhi girl' schooled at Modern School, New Delhi. The girl does not admit the relationship but agrees to be his 'half girlfriend'.[7] Chetan Bhagat commented, 'Half-Girlfriend, to me, is a unique Indian phenomenon, where boys and girls are not clear about their relationship status with each other. A boy may think he is more than friends with the girl, but the girl is still not his girlfriend. Hence, I thought we needed a term like 'Half girlfriend'. Because, in India, that is what most men get.'[7]",
        //     "tags": [
        //         "fiction",
        //         "indian",
        //         "young adult",
        //         "college",
        //         "romance"
        //     ],
        //     "series": "",
        //     "seriesIndex": "",
        //     "releaseDate": "2017-05-19",
        //     "cover": "https://images-na.ssl-images-amazon.com/images/I/712HEn9SNwL.jpg"
        // },
        // {
        //     "id": "300",
        //     "title": "wonderful Journey",
        //     "author": "Krishna",
        //     "price": "8888888",
        //     "cover": "https://images-na.ssl-images-amazon.com/images/I/419K8WN2KRL.jpg",
        //     "description": "Very Good Book"
        // },
        // {
        //     "id": "301",
        //     "title": "Village Panchayat Development",
        //     "author": "Krishna",
        //     "price": "580",
        //     "cover": "http://csrbox.org/company/proj_img/1571979072Rural_Development.jpg",
        //     "description": "This is my project, A wonderful idea"
        // },
        // {
        //     "id": "303",
        //     "title": "Ground Reality",
        //     "author": "Krishna",
        //     "price": "200",
        //     "cover": "https://pbs.twimg.com/profile_images/592649212992495616/KpkbUT3T_400x400.png",
        //     "description": "New Book with cover"
        // },
        // {
        //     "id": "d73aCOf",
        //     "title": "The Friendship of art",
        //     "author": "Bill Carman",
        //     "price": "240",
        //     "cover": "https://robertstephenparry.com/endymion/images/friendship-of-art.jpg",
        //     "description": "This is new book by Bill Carman"
        // },
        // {
        //     "id": "9u11rhV",
        //     "title": "Girl in snow",
        //     "author": "Danya Kukafta",
        //     "price": "340",
        //     "cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr53PmUcRvYmIDTpOGB39y4dREXlwRlHuxgwe9m_qhrk-5v0yziQH1agu12k9G0s2OOq4&usqp=CAU",
        //     "description": "This book is written by Danya Kukafta"
        // }
    ],
    users: [
        {
            "email" : "krishnagovindrao27@gmail.com",
            "username" : "Krishna",
            "password" : "Krishna"
        }
    ],
    searchedBook:[],
    toggleWhenBookSearched:false,
    authUser : false
}

const bookReducer = (state, action) => {
    switch (action.type) {
        case booksTypes.CREATE_BOOK:
            return{
                ...state, 
                books: [...state.books, action.payload]
            }
            break;
        case booksTypes.REMOVE_BOOK:
            return{
                ...state,
                books: removeFromArray( action.payload , state.books)
            }
        case booksTypes.SELECTED_BOOKS:
            return{
                ...state,
                searchedBook : action.payload
            }
        case booksTypes.TOGGLE_WHEN_BOOK_SEARCHED:
            return{
                ...state,
                toggleWhenBookSearched:action.payload
            }
        case booksTypes.CREATE_USER:
            return{
                ...state,
                users: [...state.users, action.payload]
            }
        case booksTypes.AUTH_USER:
            return{
                ...state,
                authUser : action.payload
            }
        case booksTypes.LOAD_BOOKS:
            return{
                ...state,
                books:action.payload
            }
    
        default:
            return state;
            break;
    }
}

export default bookReducer;