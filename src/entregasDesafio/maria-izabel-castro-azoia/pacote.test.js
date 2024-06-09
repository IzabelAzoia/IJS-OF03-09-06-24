const {calcularPacote} = require("../../dominio/calculadora/Hora/valorHora");

describe("Retorna qual o pacote de acordo com o número de horas", () => {

    test("Retorna se é um pacote básico", () => {
        const totalHoras = 49;
        const result = calcularPacote(totalHoras);

        expect(result).toBe("pacote_basico");
    }); 
    
    test("Retorna se é um pacote basico", () => {
        const totalHoras = 50;
        const result = calcularPacote(totalHoras);

        expect(result).toBe("pacote_basico");
    });
    
    test("Retorna se é um pacote Intermediário", () => {
        const totalHoras = 51;
        const result = calcularPacote(totalHoras);

        expect(result).toBe("pacote_intermediario");
    });
    
    test("Retorna se é um pacote intermediario", () => {
        const totalHoras = 100;
        const result = calcularPacote(totalHoras);

        expect(result).toBe("pacote_intermediario");
    });
    
    test("Retorna se é um pacote premium", () => {
        const totalHoras = 101;
        const result = calcularPacote(totalHoras);

        expect(result).toBe("pacote_premium");
    });
    test("Retorna se é um pacote premium", () => {
        const totalHoras = 151;
        const result = calcularPacote(totalHoras);

        expect(result).toBe("pacote_premium");
    });
    
    test("Retorna se é um pacote premium", () => {
        const totalHoras = 199;
        const result = calcularPacote(totalHoras);

        expect(result).toBe("pacote_premium");
    });

    test("Retorna se é um pacote premium", () => {
        const totalHoras = 201;
        const result = calcularPacote(totalHoras);

        expect(result).toBe("pacote_premium");
    });
});
