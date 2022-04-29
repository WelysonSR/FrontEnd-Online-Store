import React from 'react';
import PropTypes from 'prop-types';

class ListaAvaliacao extends React.Component {
  constructor() {
    super();
    this.state = {
      avaliacaoProduto: ['1', '2', '3', '4', '5'],
    };
  }

  render() {
    const { avaliacao } = this.props;
    const { avaliacaoProduto } = this.state;

    return (
      <form>
        <p>{avaliacao.email}</p>
        {
          avaliacaoProduto.map((nota, i) => (
            <input
              key={ i }
              type="radio"
              name="avaliacao"
              value={ avaliacao.avaliacao }
              checked
              disabled
            />
          ))
        }
        <p>{avaliacao.descricao}</p>
        <hr />
      </form>
    );
  }
}

ListaAvaliacao.propTypes = {
  avaliacao: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default ListaAvaliacao;
