import { Product } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'
import PriceTag from './PriceTag'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const isNew =
    Date.now() - new Date(product.createdAt).getTime() < 1000 * 60 * 60 * 24 * 7

  return (
    <Link
      className="card w-full bg-base-100 transition hover:shadow-xl"
      href={'/products/' + product.id}
    >
      <figure>
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={800}
          height={400}
          className="h-48 w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        {isNew && <div className="badge-secundary badge">New</div>}
        <p>{product.description}</p>
      </div>
    </Link>
  )
}
