const 
   API = "https://rickandmortyapi.com/api",
   CHARACTER = `${API}/character/`,
   SEARCH_CHARACTER = `${API}/character/?name=`,
   NEXT = `${CHARACTER}?page=`
   PREVIOUS = `${CHARACTER}?page=`;

export default {
   API,
   CHARACTER,
   SEARCH_CHARACTER,
   NEXT,
   PREVIOUS
}