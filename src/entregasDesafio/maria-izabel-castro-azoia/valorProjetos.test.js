const {
    calcularValorTotalProjeto,
} = require("../../dominio/calculadora/Hora/valorHora");
const pacote = require("../../dominio/calculadora/Projeto/pacote");

jest.mock("../../dominio/calculadora/Projeto/pacote.js");

describe("calcular Valor Total Projeto", () => {
    beforeEach( () => {        
       pacote.calcularPacote.mockReturnValue("pacote_basico");
        
    });
    test("Valida valor total do projeto de acordo com as funcionalidades e valor hora da desenvolvedora", () => {
        const funcionalidades = [
            'setup',
            'responsividade',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'formulario',
            'ssr'
        ];
        const valorHora = 70;
        const resulado = calcularValorTotalProjeto(funcionalidades, valorHora);
        expect(resultado).toBe(3696);
    });
    
        
});