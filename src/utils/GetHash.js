const GetHash = () => {
   console.log(location.hash);
   // return location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';
   return location.hash.replace(/#\/(\d{1,3})\/?/, "$1").toLocaleLowerCase() || '/';
}
export default GetHash;