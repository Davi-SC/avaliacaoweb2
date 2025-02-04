import banco from "../config/banco.js";

const Aluno = banco.sequelize.define("alunos", {
  id: {
    type: banco.Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: banco.Sequelize.STRING(150),
  },
  telefone: {
    type: banco.Sequelize.INTEGER,
  },
  email: {
    type: banco.Sequelize.STRING(250),
  },
  nota1: {
    type: banco.Sequelize.FLOAT,
  },
  nota2: {
    type: banco.Sequelize.FLOAT,
  },
  nota3: {
    type: banco.Sequelize.FLOAT,
  },
  situacao: {
    type: banco.Sequelize.STRING(30),
  },
});

Aluno.sync();

export default Aluno;
