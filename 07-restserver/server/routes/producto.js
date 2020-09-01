
const express = require('express');

let { verificaToken } = require('../middlewares/authentication');

let app = express();

let Producto = require('../models/producto');
const categoria = require('../models/categoria');


// =======================
// Obtener todos los productos
// =======================
app.get('/producto', verificaToken, (req, res) => {

    let desde = req.query.desde || 0;
    desde = Number(desde);
    let limite = req.query.limite || 5;
    limite = Number(limite);

    Producto.find({disponible: true})
    .skip(desde)
    .limit(limite)
    .populate('usuario', 'nombre email')
    .populate('categoria', 'descripcion')
    .exec( (err, productos) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        Producto.countDocuments({disponible: true}, (err, conteo) => {
            res.json({
                ok: true,
                productos,
                cuantos: conteo
            });
        });
    });

});

// =======================
// Obtener un producto por id
// =======================
app.get('/producto/:id', verificaToken, (req, res) => {

    let id = req.params.id;

    Producto.findById(id)
    .populate('usuario', 'nombre email')
    .populate('categoria', 'descripcion')
    .exec( (err, productoDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        if (!productoDB) {
            return res.status(404).json({
                ok: false,
                err: {
                    message: 'ID no encontrado'
                }
            });
        }

        res.json({
            ok: true,
            producto: productoDB
        });

    });

});

// =======================
// Obtener todos los productos
// =======================
app.get('/producto/buscar/:termino', verificaToken, (req, res) => {

    let termino = req.params.termino;

    let reqex = new RegExp(termino, 'i');

    Producto.find({ nombre: reqex})
    .populate('usuario', 'nombre email')
    .populate('categoria', 'descripcion')
    .exec( (err, productos) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        Producto.countDocuments({ nombre: reqex}, (err, conteo) => {
            res.json({
                ok: true,
                productos,
                cuantos: conteo
            });
        });
    });
});

// =======================
// Crear nuevo producto
// =======================
app.post('/producto', verificaToken, (req, res) => {

    let body = req.body;

    let producto = new Producto({
        usuario: req.usuario._id,
        nombre: body.nombre,
        precioUni: body.precioUni,
        descripcion: body.descripcion,
        disponible: body.disponible,
        categoria: body.categoria
    });

    producto.save((err, productoDB) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!productoDB) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.status(201).json({
            ok: true,
            producto: productoDB
        });

    });
});

// =======================
// Actualiza producto
// =======================
app.put('/producto/:id', verificaToken, (req, res) => {

    let id = req.params.id;
    let body = req.body;

    Producto.findById(id,  (err, productoDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!productoDB) {
            return res.status(404).json({
                ok: false,
                err: {
                    message: 'ID no encontrado'
                }
            });
        }

        productoDB.nombre = body.nombre;
        productoDB.precioUni = body.precioUni;
        productoDB.categoria = body.categoria;
        productoDB.disponible = body.disponible;
        productoDB.descripcion = body.descripcion;

        productoDB.save((err, productoGuardado) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }
            res.json({
                ok: true,
                producto: productoGuardado
            });
        });

    });

});

// =======================
// Borrar un producto
// =======================
app.delete('/producto/:id', verificaToken, (req, res) => {
    let id = req.params.id;

    Producto.findById(id,  (err, productoDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!productoDB) {
            return res.status(404).json({
                ok: false,
                err: {
                    message: 'ID no encontrado'
                }
            });
        }

        productoDB.disponible = false;

        productoDB.save((err, productoBorrado) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }
            res.json({
                ok: true,
                producto: productoBorrado,
                message: 'Producto borrado'
            });
        });

    });

});

module.exports = app;