const axios = require('axios');
const url = 'https://po2-tenis-default-rtdb.europe-west1.firebasedatabase.app/';
const getPendingMatch = async ()=>{
   const partidos = await axios.get(url+'partidosPendientes.json')
   console.log(partidos.data['-ODpmkmD74n7VT3f9G_N']['finalizado'])
   var mapAux = new Map;
   for(const id in partidos.data){
      const datos = partidos.data[id];
      if(!datos.finalizado){
         mapAux.set(id,datos)
      }
      
   }
   const firstKey = mapAux.keys().next().value;
      const firstValue = mapAux.get(firstKey);
      console.log(mapAux)
      return {id: firstKey,...firstValue};
   
}
const getPendingMatchesFalse= async ()=>{
   const partidos = await axios.get(url+'partidosPendientes.json')
   console.log(partidos.data['-ODpmkmD74n7VT3f9G_N']['finalizado'])
   var mapAux = new Map;
   for(const id in partidos.data){
      const datos = partidos.data[id];
      if(!datos.finalizado){
         mapAux.set(id,datos)
      }
      console.log(mapAux)
   }
   return mapAux;
}
const getPendingMatchesTrue= async ()=>{
   const partidos = await axios.get(url+'partidosPendientes.json')
   console.log(partidos.data['-ODpmkmD74n7VT3f9G_N']['finalizado'])
   var mapAux = new Map;
   for(const id in partidos.data){
      const datos = partidos.data[id];
      console.log(`ID:${id}`)
      console.log(`Finalizado:${datos.finalizado}`)
      if(datos.finalizado){
         mapAux.set(id,datos)
      }
   }
   return mapAux;
}
const patchPartidoFinalizado = async (id,partido)=>{
   await axios.patch(url+'partidosPendientes/'+id+'.json',partido)
}

module.exports = {
    getPendingMatch,
    getPendingMatchesFalse,
    patchPartidoFinalizado,
    getPendingMatchesTrue,
}