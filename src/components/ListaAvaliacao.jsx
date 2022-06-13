import React from 'react';
import PropTypes from 'prop-types';

function ListaAvaliacao({ avaliacao }) {
  return (
    <section>
      <p>{avaliacao.email}</p>
      <p>{`Nota: ${avaliacao.nota}`}</p>
      <p>{avaliacao.descricao}</p>
      <hr />
    </section>
  );
}

ListaAvaliacao.propTypes = {
  avaliacao: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default ListaAvaliacao;
