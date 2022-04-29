export function pushCarinho(obj) {
  if (localStorage.getItem('Carrinho') === null) {
    localStorage.setItem('Carrinho', JSON.stringify([]));
  }
  const carrinho = JSON.parse(localStorage.getItem('Carrinho'));
  localStorage.setItem('Carrinho', JSON.stringify([...carrinho, obj]));
}

export function getCarinho() {
  if (localStorage.getItem('Carrinho') === null) {
    localStorage.setItem('Carrinho', JSON.stringify([]));
  }
  return JSON.parse(localStorage.getItem('Carrinho'));
}

export function newCarinho(obj) {
  if (localStorage.getItem('Carrinho') === null) {
    localStorage.setItem('Carrinho', JSON.stringify([]));
  }
  localStorage.setItem('Carrinho', JSON.stringify(obj));
}
