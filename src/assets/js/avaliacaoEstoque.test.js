const test = require('node:test');
const assert = require('node:assert/strict');

const { estoqueBaixo, classificarVinho } = require('./avaliacaoEstoque.js');

test('estoqueBaixo indica quando o estoque está abaixo do limite', () => {
  assert.equal(estoqueBaixo(4), true);
  assert.equal(estoqueBaixo(5), false);
  assert.equal(estoqueBaixo(10), false);
});

test('classificarVinho classifica a safra pela idade', () => {
  assert.equal(classificarVinho(2024), 'jovem');
  assert.equal(classificarVinho(2019), 'amadurecido');
  assert.equal(classificarVinho(2014), 'antigo');
});
