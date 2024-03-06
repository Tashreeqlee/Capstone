import express from "express";
import bodyParser from "body-parser";
import { cart } from "../model/index.js";

const cartRouter = express.Router();

cartRouter.get('/user/:id/carts', (req, res) => {
    try {
        cart.fetchCart(req, res);
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Error'
        })
    }
});

cartRouter.post('/user/:id/cart', bodyParser.json(), (req, res) => {
    try {
        cart.addToCart(req, res);
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to add to cart'
        })
    }
});

cartRouter.put('/user/:id/cart/:id', bodyParser.json(), (req, res) => {
    try {
        cart.updateCart(req, res)
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Error'
        })
    }
});

cartRouter.patch('/user/:id/cart/:id', bodyParser.json(), (req, res) => {
    try {
        cart.updateCart(req, res);
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to update cart'
        })
    }
});

cartRouter.delete('/user/:id/cart', (req, res) => {
    try {
        cart.deleteCart(req, res);
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to clear cart'
        })
    }
});

cartRouter.delete('user/:id/cart/:id', (req, res) => {
    try {
        cart.removeFromCart(req, res);
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to remove from cart'
        })
    }
});

export {
    cartRouter,
    express
};