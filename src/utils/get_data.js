const GetData = async (url) => {
   const apiURL = id ? `${API}${id}` : API;
   try {
      const response = await fetch(apiURL)
      const data = await response.json();
      return data;
   } catch(error){ 
      console.error('fetch error: ', error)
   }
}

export default GetData;