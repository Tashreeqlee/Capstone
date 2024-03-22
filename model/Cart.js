import {connection as db} from '../config/index.js'

class Cart {
    fetchOrders(req, res) {
        const query = `
        SELECT cartId, userID, prodID, quantity 
        FROM Cart
        `;
        db.query(query, (err, results) => {
            if (err) throw (err);
            res.json({
                status: res.statusCode,
                results
            })
        })
    }

    fetchCart(req, res) {
        const query = `
        SELECT prodName, prodPrice, prodUrl
        FROM Users
        INNER JOIN Cart ON Users.userID = Cart.userID
        INNER JOIN Products ON Cart.prodID = Products.prodID
        WHERE Cart.userID = Users.userID
        `;
        db.query(query, (err, results) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                results
            })
        })
    }

    insertCart(req, res) {
        const query = `
        INSERT INTO Cart SET ?
        `;
        db.query(query, [req.body], (err) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                message: "Product has been added to cart!",
            })
        })
    }

    updateCart(req, res) {
        const query = `
        UPDATE Cart SET ?
        WHERE cartID = ?
        `;
        db.query(query, [req.body, req.params.id], (err) => {
            if (err) throw (err);
            res.json({
                status: res.statusCode,
                message: "Cart has been updated"
            })
        })
    }

    clearCart(req, res) {
        const query = `
        DELETE FROM cart 
        WHERE userID = ${req.params.id}
        `;
        db.query(query, (err) => {
            if (err) throw (err);
            res.json({
                status: res.statusCode,
                message: "Cart has been cleared"
            })
        })
    }

    deleteCart(req, res) {
        const query = `
        DELETE FROM Cart
        WHERE prodID = ${req.params.id}
        `;
        db.query(query, (err) => {
            if(err) throw err;
            res.json({
                status: res.statusCode,
                message: "Product deleted from cart!"
            })
        })
    }
}  
 

export {
    Cart
}