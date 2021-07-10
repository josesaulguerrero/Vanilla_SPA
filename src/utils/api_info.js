let page = 1;
let pageSearch = 1;

const 
   API = "https://rickandmortyapi.com/api",
   CHARACTER = `${API}/character/`,
   SEARCH_CHARACTER = `${API}/character/?name=`,
   NEXT = `${CHARACTER}?page=`;
   // NEXT_SEARCH = `${CHARACTER}?page=`;
   // PREVIOUS = `${CHARACTER}?page=`;
   // NEXT,
   // PREVIOUS;


export default {
   API,
   CHARACTER,
   SEARCH_CHARACTER,
   page,
   NEXT,
   pageSearch
   // NEXT_SEARCH,
}