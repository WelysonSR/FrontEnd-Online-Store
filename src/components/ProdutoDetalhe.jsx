import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { productDetail } from '../services/api';
import { pushAvaliacao, getAvaliacao } from '../func/avaliador';
import Header from './Header';
import ListaAvaliacao from './ListaAvaliacao';
import ApiContext from '../context/ApiContext';
import './ProdutoDetalhe.css';

function ProdutoDetalhe() {
  const avaliacoes = ['1', '2', '3', '4', '5'];
  const { addProduct } = useContext(ApiContext);
  const [detail, setDetail] = useState({});
  const [email, setEmail] = useState('');
  const [nota, setNota] = useState('');
  const [descricao, setDescricao] = useState('');
  const [listaAvaliacoes, setListaAvaliacoes] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const detalheProduto = async () => {
      const id = location.pathname.split('/produto-detalhe/');
      const detailId = await productDetail(id[1]);
      setDetail(detailId);
    };
    detalheProduto();
  }, [location.pathname]);

  const updateReview = () => {
    setListaAvaliacoes(getAvaliacao());
  };

  useEffect(() => {
    updateReview();
  }, []);

  const salvarAvaliacao = () => {
    const comentarioSobreProduto = {
      id: detail.id,
      email,
      nota,
      descricao,
    };

    if (email !== '' && nota !== '') {
      pushAvaliacao(comentarioSobreProduto);
      setEmail('');
      setNota('');
      setDescricao('');
      updateReview();
    }
  };

  const novaListaAvaliacoes = listaAvaliacoes
    .filter((avaliaco) => avaliaco.id === detail.id);

  return (
    <div className="body-detalhe">
      <Header />
      <div className="detalhe-item">
        <img src={ detail.thumbnail } alt={ detail.title } className="detalhe-img" />
        <p>{`${detail.title}  R$${detail.price}`}</p>
        <input
          type="button"
          value="Adicionar ao carrinho"
          className="btn btn-primary btn-detalhe1"
          onClick={ () => addProduct(detail) }
        />
      </div>
      <div className="detalhe-avaliacao">
        <form>
          <h3>Avaliação</h3>
          <input
            type="email"
            name="email"
            value={ email }
            className="form-control"
            onChange={ (e) => setEmail(e.target.value) }
            placeholder="Digite seu email"
          />
          {
            avaliacoes.map((avaliacao) => (
              <input
                key={ avaliacao }
                type="radio"
                name="avaliacao"
                value={ avaliacao }
                className="form-check-input"
                onChange={ (e) => setNota(e.target.value) }
              />
            ))
          }
          <textarea
            name="descricao"
            value={ descricao }
            className="form-control"
            onChange={ (e) => setDescricao(e.target.value) }
            placeholder="Mensagem (opcional)"
          />
          <input
            type="button"
            value="Avaliar"
            className="btn btn-primary btn-detalhe2"
            onClick={ salvarAvaliacao }
            data-testid="submit-review-btn"
          />
        </form>
        <hr />
        {
          (novaListaAvaliacoes.length > 0)
          && novaListaAvaliacoes.map((avaliacao, i) => (
            <ListaAvaliacao
              key={ i }
              avaliacao={ avaliacao }
            />
          ))
        }
      </div>
    </div>
  );
}

ProdutoDetalhe.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProdutoDetalhe;
