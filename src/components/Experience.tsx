import React from 'react';

const Experience = () => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md mt-4">
      <h2 className="text-2xl font-bold mb-4">Percurso Profissional</h2>
      <ul className="list-disc list-inside">
        <li className="mb-2">
          <strong>2023</strong> - FULL STACK WEB DEVELOPER FRONT-END FREELANCER
          <ul className="list-disc list-inside ml-4">
            <li className="mb-2">Plataforma de venda de Cursos Online: ReactJs, JavaScript, Tailwind</li>
            <li className="mb-2">API gestora de Inventário: NodeJs, TypeScript, Prisma ORM, Postgrest</li>
          </ul>
        </li>
        <li className="mb-2">
          <strong>2021</strong> - FORMADOR E-LEARNING E B-LEARNING
          <p className="ml-4">Mais de 200h como formador de TI, Microsoft Excel, Access, etc.</p>
        </li>
        <li className="mb-2">
          <strong>2020</strong> - TÉCNICO CONTABILISTA E ADMINISTRATIVO, DINAMICA PLURAL LDA
        </li>
        <li className="mb-2">
          <strong>2018</strong> - COLABORADOR CRUZ VERMELHA PORTUGUESA, CENTRO HUMANITÁRIO DE TAVIRA
        </li>
        <li className="mb-2">
          <strong>2017</strong> - K21 SHOP, ADMINISTRATIVO / GERENTE / TÉCNICO INFORMÁTICA
        </li>
      </ul>
    </div>
  );
}

export default Experience;
