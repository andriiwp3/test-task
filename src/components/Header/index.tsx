import { NextPage } from "next"
import Link from "next/link"

const Header: NextPage = () => {
  return (
	<header className="flex justify-between items-center p-4">
	<Link className="text-lg font-bold" href="/">
	Logo
	</Link>
	<nav>
	  <Link href="/dashboard" className="text-blue-500 hover:text-blue-700">
	Toilet List
	  </Link>
	</nav>
  	</header>
  )
}

export default Header