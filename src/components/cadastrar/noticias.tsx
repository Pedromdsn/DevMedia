import axios from "axios"
import Link from "next/link"

import { Formik, Form, Field } from "formik"
import { toast, ToastContainer } from "react-toastify"
import { Categorias } from "@prisma/client"

interface initialValuesType {
	title: string
	text: string
	categoria: string
}

interface CategoriasType {
	categorias: Categorias[]
}

const RegistrarCategoriaComponente = ({ categorias }: CategoriasType) => {
	const initialValues: initialValuesType = { title: "", text: "", categoria: "" }

	const submit = async (e: initialValuesType) => {
		const id = toast.loading("Cadastrando...", { position: "bottom-right", autoClose: 10000 })
		const res = await axios.post("/api/cadastrar/noticia", {
			title: e.title,
			text: e.text,
			categoria: e.categoria,
		})

		const { status } = res.data

		if (status)
			toast.update(id, { render: "Noticia Cadastrada", type: "success", isLoading: false, autoClose: 5000 })
		else toast.update(id, { render: "Erro ao cadastrar noticia", type: "error", isLoading: false, autoClose: 5000 })
	}

	return (
		<>
			<div className=" flex justify-center flex-col items-center">
				<Formik initialValues={initialValues} onSubmit={submit}>
					<Form className="w-2/3 mx-auto flex flex-col gap-5">
						<Field
							name="title"
							type="text"
							className="border border-gray-300 focus:border-gray-400 text-2xl outline-none px-5 py-3 rounded-2xl w-full"
							placeHolder="Titulo da Noticia"
							required
						/>
						<Field
							name="categoria"
							type="textarea"
							as="select"
							className="border border-gray-300 focus:border-gray-400 text-lg  px-5 py-3 rounded-2xl w-full text-gray-400"
							required>
							<option value="" selected disabled hidden>
								Selecione uma categoria
							</option>
							{categorias.map((categoria) => (
								<option value={categoria.id} key={categoria.id}>
									{categoria.nome}
								</option>
							))}
						</Field>

						<Field
							name="text"
							as="textarea"
							className="border border-gray-300 focus:border-gray-400 text-xl outline-none px-5 py-3 rounded-2xl w-full"
							placeHolder="Texto da categoria"
							rows={5}
							required
						/>

						<div className="flex justify-end mt-5 gap-5">
							<Link href="/" passHref>
								<div className="border px-5 py-2 rounded-xl border-gray-300 cursor-pointer">Voltar</div>
							</Link>
							<button
								type="submit"
								className="border px-5 py-2 rounded-xl bg-gray-300 hover:brightness-95">
								Cadastrar
							</button>
						</div>
					</Form>
				</Formik>
			</div>
			<ToastContainer />
		</>
	)
}

export default RegistrarCategoriaComponente
