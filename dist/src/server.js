"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app_1 = require("./app");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post('/loans', (req, res) => {
    const { amount, term } = req.body;
    if (!amount || !term) {
        return res.status(400).json({ error: 'Parámetros faltantes' });
    }
    const loan = (0, app_1.createLoan)(Number(amount), Number(term));
    res.status(201).json(loan);
});
app.post('/loans/:id/pay', (req, res) => {
    const id = Number(req.params.id);
    const { amount } = req.body;
    if (!amount) {
        return res.status(400).json({ error: 'Monto de pago requerido' });
    }
    try {
        const loan = (0, app_1.payLoan)(id, Number(amount));
        res.json(loan);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
});
app.get('/loans/:id', (req, res) => {
    const id = Number(req.params.id);
    try {
        const status = (0, app_1.getLoan)(id);
        res.json(status);
    }
    catch (err) {
        res.status(404).json({ error: err.message });
    }
});
exports.default = app;
