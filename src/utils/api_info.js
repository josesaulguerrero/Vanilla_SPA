const 
   API = "https://rickandmortyapi.com/api",
   CHARACTER = `${API}/character/`,
   SEARCH_CHARACTER = `${API}/character/?name=`,
   NEXT = `${CHARACTER}?page=`,
   PREVIOUS = `${CHARACTER}?page=`;
   // NEXT,
   // PREVIOUS;

let page = 1;

export default {
   API,
   CHARACTER,
   SEARCH_CHARACTER,
   page,
   NEXT,
   PREVIOUS
}