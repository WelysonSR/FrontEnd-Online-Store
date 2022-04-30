import React from 'react';
import PropTypes from 'prop-types';
import { productDetail } from '../services/api';
import Header from './Header';
import { pushCarinho } from '../func/carrinhoDeCompras';
import { pushAvaliacao, getAvaliacao } from '../func/avaliador';
import ListaAvaliacao from './ListaAvaliacao';

class ProdutoDetalhe extends React.Component {
  constructor() {
    super();
    this.state = {
      detail: {},
      notas: ['1', '2', '3', '4', '5'],
      email: '',
      avaliacao: '',
      descricao: '',
      listaAvaliacoes: [],
    };
  }

  async componentDidMount() {
    this.detalheProduto();
    this.listaAvaliacoes();
  }

  detalheProduto = async () => {
    const { location } = this.props;
    const id = location.pathname.split('/produto-detalhe/');
    const detail = await productDetail(id[1]);
    this.setState({ detail });
  }

  addToCart = (produto) => {
    pushCarinho(produto);
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  salvarAvaliacao = () => {
    const { detail, email, avaliacao, descricao } = this.state;
    const comentarioSobreProduto = {
      id: detail.id,
      email,
      avaliacao,
      descricao,
    };

    if (email !== '' && avaliacao !== '') {
      pushAvaliacao(comentarioSobreProduto);
      this.setState({
        email: '',
        descricao: '',
      });
      this.listaAvaliacoes();
    }
  }

  listaAvaliacoes = () => {
    const listaAvaliacoes = getAvaliacao();
    this.setState({ listaAvaliacoes });
  }

  render() {
    const { detail, notas, email, descricao, listaAvaliacoes } = this.state;
    const novaListaAvaliacoes = listaAvaliacoes
      .filter((avaliaco) => avaliaco.id === detail.id);
    return (
      <div>
        <Header />
        <img src={ detail.thumbnail } alt={ detail.title } />
        <p data-testid="product-detail-name">{`${detail.title}  R$${detail.price}`}</p>
        <input
          type="button"
          data-testid="product-detail-add-to-cart"
          value="Adicionar ao carrinho"
          onClick={ () => this.addToCart(detail) }
        />
        <hr />
        <form>
          <h3>Avaliação</h3>
          <input
            type="email"
            name="email"
            value={ email }
            onChange={ this.handleChange }
            placeholder="Digite seu email"
            data-testid="product-detail-email"
          />
          {
            notas.map((nota, i) => (
              <input
                key={ i }
                type="radio"
                name="avaliacao"
                value={ nota }
                onChange={ this.handleChange }
                data-testid={ `${nota}-rating` }
              />
            ))
          }
          <br />
          <textarea
            name="descricao"
            value={ descricao }
            onChange={ this.handleChange }
            placeholder="Mensagem (opcional)"
            data-testid="product-detail-evaluation"
          />
          <br />
          <input
            type="button"
            value="Avaliar"
            onClick={ this.salvarAvaliacao }
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
    );
  }
}

ProdutoDetalhe.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProdutoDetalhe;
