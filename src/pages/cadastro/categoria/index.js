import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000',
  };
  const [categorias, setCategoria] = useState([]);
  const [values, setValues] = useState(valoresIniciais);
  // console.log('[nomeCategoria]', nomeCategoria);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value, // nome: 'valor'
    });
  }
  function handleChange(infosEvento) {
    // console.log('[nomeCategoria]', nomeCategoria);
    // console.log('[infosEvento.target.value]', infosEvento.target.value);
    // const { getAttribute, value } = infosEvento.target;
    setValue(
      infosEvento.target.getAttribute('name'),
      infosEvento.target.value,
    );
  }

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:3000/categorias'
      : 'https://cassinoflix.herokuapp.com/';
    fetch(URL).then(async (respostaServidor) => {
      const resposta = await respostaServidor.json();
      setCategoria([
        ...resposta,
      ]);
    });

    // setTimeout(() => {
    //   setCategoria([
    //     ...categorias,
    //     {
    //       id: 1,
    //       nome: 'Front End',
    //       descricao: 'Uma categoria banaca',
    //       cor: '#cbd1ff',
    //     },
    //   ]);
    // }, 4 * 1000);
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {' '}
        {values.nome}
      </h1>
      <form onSubmit={function HandleSubmit(infosEvento) {
        infosEvento.preventDefault();
        // console.log('Tentou enviar o form');
        setCategoria([
          // pega tudo e n sobrescreve
          ...categorias,
          values,
        ]);
        setValues({ valoresIniciais });
      }}
      >
        {/* State */}
        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        {/* <div>
          <label>
            Cor:
            <input
              type="color"
              value={values['cor']}
              name="cor"
              onChange={handleChange}
            />
          </label>
        </div> */}

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {/* {categorias.lenght === 0 && (
        <div>
          Loading...
        </div>
      )} */}

      <ul>
        {categorias.map((categorias) => (
          <li key={`${categorias.nome}`}>
            {categorias.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
