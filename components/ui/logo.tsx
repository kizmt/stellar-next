import Link from 'next/link'
import Image from 'next/image'
import LogoImg from '@/public/images/logo.svg'

export default function Logo() {
  return (
    <Link className="inline-flex" href="/" aria-label="Cruip">
      <Image className="max-w-none" src={LogoImg} width={120} height={120} priority alt="Stellar" />
    </Link>
  )
}