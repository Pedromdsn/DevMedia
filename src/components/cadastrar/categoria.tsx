import axios from "axios"
import Link from "next/link"

import { Formik, Form, Field } from "formik"
import { toast, ToastContainer } from "react-toastify"

interface initialValuesType {
	nome: string
}

const CategoriaComponente = () => {
	const initialValues: initialValuesType = { nome: "" }

	const submit = async (e: initialValuesType) => {
		const id = toast.loading("Cadastrando...", { position: "bottom-right", autoClose: 10000 })
		const res = await axios.post("/api/cadastrar/categoria", {
			nome: e.nome,
		})

		const { status } = res.data

		if (status)
			toast.update(id, { render: "Categoria Cadastrada", type: "success", isLoading: false, autoClose: 5000 })
		else
			toast.update(id, { render: "Erro ao carregar categoria", type: "error", isLoading: false, autoClose: 5000 })
	}

	return (
		<>
			<div className="-mt-20 flex justify-center flex-col items-center">
				<Formik initialValues={initialValues} onSubmit={submit}>
					<Form className="w-2/3 mx-auto">
						<Field
							name="nome"
							type="text"
							className="border border-gray-300 focus:border-gray-400 text-2xl outline-none px-5 py-3 rounded-2xl w-full"
							placeHolder="Nome da Categoria"
							list="suggestions"
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

export default CategoriaComponente
