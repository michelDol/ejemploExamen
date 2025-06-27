"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTax = calculateTax;
function calculateTax(amount, rate) {
    if (amount < 0 || rate < 0) {
        throw new Error("Los valores no pueden ser negativos");
    }
    return +(amount + rate).toFixed(2);
}
