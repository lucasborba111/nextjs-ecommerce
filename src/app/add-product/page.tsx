import FormSubmitButton from '../components/FormSubmitButton'
import prisma from '../lib/db/prisma'
import { redirect } from 'next/navigation'
export const metadata = {
  title: 'Add product - Ecommerce',
}

async function addProduct(formData: FormData) {
  'use server' //fara o processamento no lado do servidor apenas

  const name = formData.get('name')?.toString()
  const description = formData.get('description')?.toString()
  const imageUrl = formData.get('imageUrl')?.toString()
  const price = Number(formData.get('price') || 0)

  if (!name || !description || !imageUrl || !price) {
    throw Error('Missign required fields')
  }

  await prisma.product.create({
    data: { name, description, imageUrl, price },
  })

  redirect('/')
}

export default function AddProductPage() {
  return (
    <div className="container">
      <h1 className="mb-3 text-lg">Add product</h1>
      <form action={addProduct}>
        <input
          required
          name="name"
          type="text"
          placeholder="Name"
          className="input input-bordered mb-3 w-full"
        />
        <textarea
          required
          name="description"
          placeholder="Description"
          className="textarea textarea-bordered mb-3 w-full"
        />
        <input
          required
          name="imageUrl"
          type="url"
          placeholder="Image Url"
          className="input input-bordered mb-3 w-full"
        />
        <input
          required
          name="price"
          type="number"
          placeholder="Price"
          className="input input-bordered mb-3 w-full"
        />

        <FormSubmitButton className="btn-block">Add product</FormSubmitButton>
      </form>
    </div>
  )
}
