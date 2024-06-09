const {
    calcularPorProjeto,
} = require("../../dominio/calculadora/Hora/valorHora");

describe("Cálculo da quantidade de horas por projeto", () => {
    test('Dada uma lista de funcionalidades, valida quantas horas por projeto', () => {

        const listaDeFuncionalidades = [
            'setup',
            'responsividade',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'formulario',
            'ssr'
        ];
        const result = calcularPorProjeto(listaDeFuncionalidades);

        expect(result).toBe(72)
    });
});