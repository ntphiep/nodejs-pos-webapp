const express = require('express');
const router = express.Router();
const adminController = require('../app/controllers/admin.controller');
const productsController = require('../app/controllers/products.controller');


// [GET] /admin
router.get('/', adminController.index);

// [POST] /admin
router.post('/', adminController.addEmpl);

// [GET] /admin/extra/:c
router.get('/extra/:c', adminController.extra);

// [GET] /admin/products
router.get('/products', productsController.index);

// [POST] /admin/products
router.post('/products', productsController.addPrd);


// [GET] /admin/stat
router.get('/stat', adminController.stat);

// [GET] /admin/e/:m
router.get('/e', adminController.detailEmpl);

// [GET] /admin/p/update
router.get('/p/update', adminController.passUpdate);

// [POST] /admin/p/update
router.post('/p/update', adminController.passC);

// [POST] /admin/l/employee
router.post('/l/employee', adminController.lockEmpl)

// [POST] /admin/send/employee
router.post('/send/employee', adminController.sendMail);


router.get('/products/update', productsController.getUpdate);


router.post('/products/update/e', productsController.thisPrd);


router.post('/products/update', productsController.postUpdate);



router.delete('/products/del/:id', productsController.delPrd);

module.exports = router;