import Link from 'next/link'
import Image from 'next/image'
import logo from '@/assets/logo.jpg'
export default function NavBar() {
  return (
    <div className="bg-base-100">
      <div className="navbar m-auto max-w-7xl flex-col gap-2 sm:flex-row">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-xl normal-case">
            <Image src={logo} height={40} width={40} alt="ecommerce logo" />
            Ecommerce
          </Link>
        </div>
      </div>
    </div>
  )
}
