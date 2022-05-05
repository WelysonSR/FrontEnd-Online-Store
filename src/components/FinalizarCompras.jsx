import React from 'react';
import Header from './Header';

class FinalizarCompras extends React.Component {
  render() {
    return (
      <>
        <Header />
        <section>
          <h5>Revise seus Produtos</h5>
        </section>
        <hr />
        <section>
          <h5>Informaçoes do Comprador</h5>
          <form>
            <input
              type="text"
              name="fullname"
              data-testid="checkout-fullname"
              placeholder="Nome Completo"
            />
            <input
              type="text"
              name="cpf"
              data-testid="checkout-cpf"
              placeholder="CPF"
            />
            <input
              type="email"
              name="email"
              data-testid="checkout-email"
              placeholder="Email"
            />
            <input
              type="text"
              name="number"
              data-testid="checkout-phone"
              placeholder="Telefone"
            />
            <input
              type="text"
              name="cep"
              data-testid="checkout-cep"
              placeholder="CEP"
            />
            <input
              type="text"
              name="address"
              data-testid="checkout-address"
              placeholder="Endereço"
            />
            <input
              type="text"
              name="complement"
              placeholder="Complemento"
            />
            <input
              type="text"
              name="cit"
              placeholder="Cidade"
            />
            <input
              type="text"
              name="number"
              placeholder="Número"
            />
            <select>
              <option>Estado</option>
              <option value="BA">Bahia</option>
              <option value="MG">Minas gerais</option>
              <option value="AM">Amazonas</option>
              <option value="MA">Maranhão</option>
            </select>
          </form>
        </section>
        <hr />
        <section>
          <h5>Método de pagamento</h5>
        </section>
        <hr />
        <input
          type="button"
          value="Comprar"
        />
      </>
    );
  }
}

export default FinalizarCompras;
