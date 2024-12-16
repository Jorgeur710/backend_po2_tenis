const { json } = require('express');
const adapter = require('../databases/adapter_tenis')
const getMatches = async(req,res)=>{
    try {
        const partido =  await adapter.getPendingMatch();
    res.status(200).send({status:"OK",data:Object.fromEntries(partido)})
    } catch (error) {
        res.status(error.status || 500).send({status:"FAILED",message:error.message})
    }
    
}
const getMatchesEnded= async(req,res)=>{
    try {
        const partido =  await adapter.getPendingMatchesTrue();
       
    res.status(200).send({status:"OK",data:Object.fromEntries(partido)})
    } catch (error) {
        res.status(error.status || 500).send({status:"FAILED",message:error.message})
    }
    
}
const getMatchesPending = async(req,res)=>{
    try {
        const partidos =  await adapter.getPendingMatchesTrue();
    res.status(200).send({status:"OK",data:partidos})
    } catch (error) {
        res.status(error.status || 500).send({status:"FAILED",message:error.message})
    }
    
}
const patchPartido = async(req,res)=>{
    const{
        body,
        params:{id}
    }= req;
    try {
        const partidos =  await adapter.patchPartidoFinalizado(id,body);
    res.status(200).send({status:"OK",data:partidos})
    } catch (error) {
        res.status(error.status || 500).send({status:"FAILED",message:error.message})
    }
    
}
module.exports = {
    getMatches,
    patchPartido,
    getMatchesPending,
    getMatchesEnded
}