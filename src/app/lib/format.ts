export default function format(price: number) {
  return (price / 100).toLocaleString('pt-BR', {
    style: 'decimal',
  })
}
