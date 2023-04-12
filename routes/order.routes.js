const OrderController=require('../controllers/order.controller');

module.exports=function(app){
    app.post("/delivery-service/orders", OrderController.create);
    app.put('/delivery-service/orders/:id', OrderController.update);
    app.get('/delivery-service/orders/:id', OrderController.findById);
    app.get('/delivery-service/orders',OrderController.findAll);
    app.delete('/delivery-service/orders/:id', OrderController.remove);
}
