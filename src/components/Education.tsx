import React from 'react';

const Education = () => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md mt-4">
      <h2 className="text-2xl font-bold mb-4">Formação Académica</h2>
      <ul className="list-disc list-inside">
        <li className="mb-2">
          <strong>2023</strong> - PROGRAMADOR FULL STACK WEB DEVELOPMENT, Escola Professional FLAG, média 19
        </li>
        <li className="mb-2">
          <strong>2022</strong> - PYTHON FUNDAMENTALS, Harvard Online School
        </li>
        <li className="mb-2">
          <strong>2021</strong> - TÉCNICO DE CONTABILIDADE, FISCALIDADE E GESTÃO ADMINISTRATIVA, IEFP – FARO
        </li>
        <li className="mb-2">
          <strong>2007</strong> - CURSO AUTOCAD 2D, IEFP - FARO, Nota final de 17 Valores
        </li>
        <li className="mb-2">
          <strong>2006</strong> - FREQUÊNCIA UNIVERSITÁRIA, UNIVERSIDADE DO ALGARVE - FARO, Engenharia Civil (1º Ano)
        </li>
      </ul>
    </div>
  );
}

export default Education;
