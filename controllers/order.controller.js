const Order=require("../models/order.model");


exports.findAll= function (req, res) {
        Order.find(req.query)
            .then(orders => res.status(200).send(orders))
            .catch(error => res.status(422).send({
                message: "Internal server error"
            }))
},
 exports.create=async (req, res)=> {
        try {
            let order=await Order.create(req.body);
            if(order){
                return res.status(200).send({
                    message:"Order Successfully",
                    data:order
                })
            }
            
        } catch (error) {
            return res.status(500).send({
                message:"Something went wrong!",
                data:null
            })
        }
},
exports.findById= function (req, res) {
        Order.findById(req.params.id)
            .then(order => res.status(200).send(order))
            .catch(err => res.status(422).send({
                "Something wennt wrong": err
            }))
},
exports.update= function (req, res) {
        Order.findByIdAndUpdate(req.params.id, req.body)
            .then(order => res.status(200).send(order))
            .catch(err => res.status(422).send({
                "Something went wrong": err
            }))
},
 exports.remove= function (req, res) {
        Order.findByIdAndRemove(req.params.id)
            .then(data => res.status(200).send(data))
            .catch(err => res.status(422).send({
                "Something went wrong": err
            }))
}
