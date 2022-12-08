const axios = require('axios')
const cryptoModel = require('../model/cryptoModel')

const cryptoFunction = async function(req,res){
    try{

        const requiredData =  {
            method: `get`,
            url: `https://api.coincap.io/v2/assets`,
            headers : {Authorization: `Bearer f0ad27fc-6703-4a18-80cb-86230a59a41c`}
        }

        let findData = await axios(requiredData)
        if(!findData){
            return res.status(500).send({message:`internal server error`})
        }

        const data = findData.data.data;

        const sortData = data.sort((a, b)=> {return a.changePercent24Hr - b.changePercent24Hr})

        await cryptoModel.deleteMany()

        const createdData = await cryptoModel.insertMany(sortData)

        res.status(200).send({ status:true , data: createdData})
        return
        
    }catch(error){
        res.status(500).send({status:false, message: error.message})
    }
}

module.exports.cryptoFunction = cryptoFunction
