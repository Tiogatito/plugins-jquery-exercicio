$(document).ready(function () {
  // 1. Carrossel Slick
  $('#carousel-imagens').slick({
    autoplay: true,
    arrows: false
  });

  // 2. Máscaras dos campos
  $('#telefone').mask('(00) 00000-0000', {
    placeholder: '(DDD) 12345-6789'
  });

  $('#cpf').mask('000.000.000-00', {
    placeholder: '123.456.789-00'
  });

  $('#cep').mask('00000-000', {
    placeholder: '01234-567'
  });

  // 3. Validação do formulário
  $('#form').validate({
    rules: {
      nome: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      telefone: {
        required: true
      },
      cpf: {
        required: true
      },
      endereco: {
        required: true
      },
      cep: {
        required: true
      }
    },
    messages: {
      nome: 'Por favor, insira o seu nome completo',
      email: 'Por favor, insira um e-mail válido',
      telefone: 'Por favor, insira o seu telefone celular',
      cpf: 'Por favor, insira o seu CPF',
      endereco: 'Por favor, insira o seu endereço completo',
      cep: 'Por favor, insira o seu CEP'
    },
    submitHandler: function (form) {
      alert('Formulário enviado com sucesso!');
      form.reset();
    },
    invalidHandler: function (evento, validador) {
      const erros = validador.numberOfInvalids();
      if (erros) {
        alert(`Por favor, preencha os ${erros} campos pendentes antes de enviar.`);
      }
    }
  });
});
