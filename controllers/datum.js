const dataModel = require('../models/data');

const getDetails = async(req, res) =>{

    try{
        let details = await dataModel.find({}).sort({createdAt: "desc"});;

        if(details){
            res.json(details)
        }
    }catch(err){
        console.log(err)
    }   
}

const getDetail = async(req, res) =>{

    try{
        let details = await dataModel.findById(req.params.id);

        if(details){
            res.json(details)
        }
    }catch(err){
        console.log(err)
    }   
}

const createDetail = async(req, res) => {
    try{
        const detail = new dataModel({
            name: req.body.name,
            age: req.body.age,
            mother: req.body.mother,
            father: req.body.father,
            location: req.body.location,
            occupation: req.body.occupation,
            createdAt: new Date()
        })

        const createData = await detail.save();

        if(createData){
            res.send(createData)
        }
    } catch(err){
        console.log(err)
    }
}

const updateDetail = async (req, res) =>{
    try{
        let detail = await dataModel.findByIdAndUpdate(req.params.id, req.body)

        if(detail){
            res.send("Updated Successfully")
        }
    } catch(err){
        console.log(err)
    }
}

const deleteDetail = async(req, res) => {
    try{
        let detail = await dataModel.findByIdAndDelete(req.params.id)
        if(detail) {
            res.send("Item deleted Successfully")
        }
    } catch(e) {
        console.log(e)
    }
}

module.exports = {getDetails, getDetail, createDetail, updateDetail, deleteDetail}