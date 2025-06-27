"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../src/app");
describe('Función de cálculo de impuestos', () => {
    test('Calcula correctamente el impuesto', () => {
        expect((0, app_1.calculateTax)(100, 0.16)).toBe(16.00);
    });
    test('Calcula impuestos con decimales', () => {
        expect((0, app_1.calculateTax)(123.45, 0.08)).toBeCloseTo(9.88, 2);
    });
    test('Lanza error si el monto es negativo', () => {
        expect(() => (0, app_1.calculateTax)(-10, 0.16)).toThrow("Los valores no pueden ser negativos");
    });
    test('Lanza error si la tasa es negativa', () => {
        expect(() => (0, app_1.calculateTax)(100, -0.1)).toThrow("Los valores no pueden ser negativos");
    });
});
