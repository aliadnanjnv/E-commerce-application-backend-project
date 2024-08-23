import express from "express";
import { registerController, testController, loginController, forgotPasswordController, updateProfileController, getOrdersController, getAllOrdersController, orderStatusController } from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//router  object
const router = express.Router();


//routing
//register || method post
router.post('/register', registerController)

//LOGIN || POST
router.post('/login', loginController)

//forgot password
router.post('/forgot-password', forgotPasswordController)

//test routes
router.get('/test', requireSignIn, isAdmin, testController)

//protected user route path
router.get("/user-auth", requireSignIn, (req, res) => {
    res.status(200).send({ ok: true })
});
//protected admin route path
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
    res.status(200).send({ ok: true })
});
//  update profile
router.get('/profile', requireSignIn, updateProfileController)

//orders
router.get('/orders', requireSignIn, getOrdersController)

//all orders
router.get('/all-orders', requireSignIn, isAdmin, getAllOrdersController)

//order status updated
router.put('/order-status/:orderId', requireSignIn, isAdmin, orderStatusController)

export default router;