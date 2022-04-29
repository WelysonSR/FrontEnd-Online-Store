export function pushAvaliacao(obj) {
  if (localStorage.getItem('Avaliação') === null) {
    localStorage.setItem('Avaliação', JSON.stringify([]));
  }
  const avaliacoes = JSON.parse(localStorage.getItem('Avaliação'));
  localStorage.setItem('Avaliação', JSON.stringify([...avaliacoes, obj]));
}

export function getAvaliacao() {
  if (localStorage.getItem('Avaliação') === null) {
    localStorage.setItem('Avaliação', JSON.stringify([]));
  }
  return JSON.parse(localStorage.getItem('Avaliação'));
}
