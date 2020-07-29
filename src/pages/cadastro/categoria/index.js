import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria(){
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000',
  }
  const [categorias, setCategoria] = useState([]);
  const [values, setValues] = useState(valoresIniciais);
  //console.log('[nomeCategoria]', nomeCategoria); 
  
  
  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value, //nome: 'valor'
    })
  }
  function handleChange (infosEvento){
    //console.log('[nomeCategoria]', nomeCategoria);
    //console.log('[infosEvento.target.value]', infosEvento.target.value);
    //const { getAttribute, value } = infosEvento.target;
    setValue(
      infosEvento.target.getAttribute('name'),
      infosEvento.target.value
    );
  }

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria: {values.nome}
      </h1>
      <form onSubmit={function HandleSubmit(infosEvento) {
        infosEvento.preventDefault();
        //console.log('Tentou enviar o form');
        setCategoria([
          //pega tudo e n sobrescreve
          ...categorias,
          values
        ])
        setValues({valoresIniciais})
      }}>
        {/* State */}
        <FormField 
          label = "Nome da Categoria"
          type = "text"
          name ="nome"
          value = { values.nome }
          onChange = {handleChange}
        />
          
        <div>
          <label>
            Descrição:
            <textarea 
              type="text"
              name="descricao"
              value={values.descricao}
              onChange={handleChange}
            />
          </label>
        </div>

        {/* <FormField 
          label = "Descrição"
          type= "???"
          name="descricao"
          value = { values.descricao }
          onChange = {handleChange}
        /> */}

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
          label = "Cor"
          type= "color"
          name="cor"
          value = { values.cor }
          onChange = {handleChange}
        />

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categorias, indice) => {
          return (
            <li key={`${categorias}${indice}`}>
              {categorias.nome}
            </li>
          );
        })}
      </ul>

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;