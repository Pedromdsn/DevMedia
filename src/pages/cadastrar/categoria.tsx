import CategoriaComponente from "../../components/cadastrar/categoria"
import MainFooter from "../../components/Footer"
import MainHeader from "../../components/Header"

import { Categorias } from "@prisma/client"


interface CategoriasType {
	categorias: Categorias[]
}

const CadastrarNoticia = () => {
	return (
		<div className="min-h-screen flex justify-between flex-col">
			<MainHeader />
			<CategoriaComponente/>
			<MainFooter />
		</div>
	)
}

export default CadastrarNoticia
