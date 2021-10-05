import express from 'express';
import { shabbatBlockerMiddleware } from 'shabbatpackage';
import './connect.mjs';
import { getProducts, getProduct, addProduct, deletePoduct, updateProduct } from './connect.mjs'

const app = express();

app.use(express.json());
app.use(shabbatBlockerMiddleware());
app.use(express.static('../client/build/'));

app.get('/products', async(req, res) => {
    res.send(await getProducts(req.query));
});

app.post('/products', async(req, res) => {
    try {
        res.send(await addProduct(req.body));
    } catch (err) {
        console.log(err.message)
        res.status(400)
        res.send(err.message)
    }
})

app.get('/products/:_id', async(req, res) => {
    try {
        res.send(await getProduct(req.params._id));
    } catch (err) {
        console.log(err.message)
        res.status(400)
        res.send(err.message)
    }
})

app.delete('/products/:id', async(req, res) => {
    try {
        res.send(await deletePoduct(req.params.id))
    } catch (err) {
        console.log(err.message)
        res.status(400)
        res.send(err.message)
    }
})

app.put('/products/:id', async(req, res) => {
    try {
        res.send(await updateProduct(req.params.id, req.body))
    } catch (err) {
        console.log(err.message)
        res.status(400)
        res.send(err.message)
    }
})

const port = process.env.PORT || 8000;
app.listen(port);