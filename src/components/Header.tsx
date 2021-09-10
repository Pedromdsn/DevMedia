import Link from "next/link"

import { Formik, Form, Field } from "formik"
import { useRouter } from "next/router"

import { useState } from "react"
import { AiOutlineSearch } from "react-icons/ai"
import { GiHamburgerMenu } from "react-icons/gi"

const MainHeader = () => {
	const [menu, setMenu] = useState(false)
	const router = useRouter()

	return (
		<nav
			className={`bg-gray-300 flex justify-around items-center text-xl min-h-20 text-center px-10 ${
				menu && "lg:mb-40"
			}`}>
			<Link href="/" passHref>
				<div className="text-3xl cursor-pointer">Logo</div>
			</Link>
			<div
				className={`flex gap-10 lg:flex-col ${
					menu || "lg:hidden"
				} lg:absolute lg:top-20 lg:bg-gray-300 lg:w-full lg:items-center lg:pb-5 lg:pt-5`}>
				<Link href="/cadastrar/noticia" passHref>
					<button className="hover:bg-gray-200 py-1 px-3 rounded-3xl">Cadastrar Noticias</button>
				</Link>
				<Link href="/cadastrar/categoria" passHref>
					<button className="hover:bg-gray-200 py-1 px-3 rounded-3xl">Cadastrar Categoria</button>
				</Link>
				<div className="relative w-min my-auto">
					<Formik
						initialValues={{ busca: "" }}
						onSubmit={(e) => router.push({ href: "/", query: { busca: e.busca } })}>
						<Form>
							<Field type="text" name="busca" id="busca" className="px-5 rounded-xl" />
						</Form>
					</Formik>
					<AiOutlineSearch className="absolute top-1 right-1" />
				</div>
			</div>
			<GiHamburgerMenu onClick={(e) => setMenu(!menu)} className="hidden lg:flex" />
		</nav>
	)
}

export default MainHeader
