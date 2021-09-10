import {prisma} from "../../libs/Prisma"
import MainFooter from "../../components/Footer"
import MainHeader from "../../components/Header"
import RegistrarCategoriaComponente from "../../components/cadastrar/noticias"

import { GetServerSideProps } from "next"
import { Categorias } from "@prisma/client"

interface CategoriasType {
	categorias: Categorias[]
}

const CadastrarNoticia = ({ categorias }: CategoriasType) => {
	return (
		<div className="min-h-screen flex justify-between flex-col">
			<MainHeader />
			<RegistrarCategoriaComponente categorias={categorias} />
			<MainFooter />
		</div>
	)
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const categorias = await prisma.categorias.findMany()

	return {
		props: { categorias },
	}
}

export default CadastrarNoticia
