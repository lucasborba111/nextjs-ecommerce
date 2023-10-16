import format from '../lib/format'

interface PriceTagProps {
  price: number
  className?: string
}

export default function PriceTag({ price, className }: PriceTagProps) {
  return <span className={`badge ${className}`}>{format(price)}</span>
}
