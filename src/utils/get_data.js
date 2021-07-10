const GetData = async (URL) => {
   try {
      const response = await fetch(URL)
      // if(response.status !== 'ok') {
      //    // console.error('error')
      // }
      const data = await response.json();
      return data;
   } catch(error){ 
      console.log('fetch error')
   }
}

export default GetData;