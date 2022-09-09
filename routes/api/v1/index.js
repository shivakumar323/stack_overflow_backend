var express = require('express');
var router = express.Router();
const greetController = require('../../../src/controllers/greetController');
const productController = require('../../../src/controllers/productController');
const orderController = require('../../../src/controllers/orderController');
const userController = require('../../../src/controllers/userController');
const questionController = require('../../../src/controllers/questionController');
const answerController = require('../../../src/controllers/answerController');

router.get("/greet", greetController.greetings);
router.post("/product/all", productController.listProducts);
router.post("/product/add", productController.addProduct); /* have to call isAuthenticated before adding product
router.post("/product/add", userController.isAuthenticated, productController.addProduct); try this for checking if the user is authenticated or not
you have to pass authtoken in payload for this*/
router.post("/order/all", orderController.listOrders);
router.post("/user/signup", userController.signUp);
router.post("/user/signin", userController.login);
router.post("/user/changepassword", userController.changePassword);
router.post("/order/add", orderController.createOrder);
router.post("/order/edit", orderController.editOrder);
router.post("/order/editstatus", orderController.editOrderstatus);

router.post("/question/add", questionController.addQuestion);
router.post("/answer/add", answerController.addAnswer);
router.post("/answer/vote", answerController.addVote);
router.post("/answer/comment", answerController.addComment);
router.post("/question/comment", questionController.addComment);


module.exports = router;