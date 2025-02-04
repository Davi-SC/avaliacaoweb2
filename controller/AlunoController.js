import Aluno from "../models/aluno.js";

class AlunoController {
  index = async function (req, res) {
    const aluno = await Aluno.findAll();
    res.render("aluno/index", { aluno: aluno });
  };
  cadastrar = function (req, res) {
    res.render("aluno/cadastrar");
  };
  salvar = function (req, res) {
    let aluno = {
      nome: req.body.nome,
      telefone: req.body.telefone,
      email: req.body.email,
      nota1: req.body.nota1,
      nota2: req.body.nota2,
      nota3: req.body.nota3,
      //media de 3 notas maior que 7 para aprovar
      situacao:
        req.body.nota1 / 3 + req.body.nota2 / 3 + req.body.nota3 / 3 > 7
          ? "Aprovado"
          : "Reprovado",
    };
    Aluno.create(aluno).then(function () {
      console.log("Aluno cadastrado com sucesso");
      res.redirect("/aluno");
    });
  };
}

export default new AlunoController();
