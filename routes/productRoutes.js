import express from "express";

import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";
import { brainTreePaymentController, braintreeTokenController, createProductController, deleteProductController, getProductController, getSingleProductController, productCategoryController, productCountController, productFiltersController, productListController, productPhotoController, searchProductController, updateProductController } from "../controllers/productController.js";

const router = express.Router();

//routes
router.post(
    "/create-product",
    requireSignIn,
    isAdmin,
    formidable(),
    createProductController
);
router.put(
    "/update-product/:pid",
    requireSignIn,
    isAdmin,
    formidable(),
    updateProductController
);
//get products
router.get("/get-product", getProductController);

//single product
router.get("/get-product/:slug", getSingleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);

//delete product
router.delete("/delete-product/:pid", deleteProductController);

// filter product
router.post('/product-filters', productFiltersController)

//product count
router.get("/product-count", productCountController)

//product per page
router.get('/product-list/:pagr', productListController)

//search product
router.get('/search/:keyword', searchProductController)

//similiar product
router.get('/related-product/:pid/:cid', searchProductController)

//category wise product
router.get('/product-category/:slug', productCategoryController)

//payments route
//token
router.get('/braintree/token', braintreeTokenController)

//payment

router.get('/braintree/payment', requireSignIn, brainTreePaymentController)
export default router;