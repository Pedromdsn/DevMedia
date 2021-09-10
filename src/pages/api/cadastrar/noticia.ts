import prisma from "../../../libs/Prisma"

import { NextApiRequest, NextApiResponse } from "next"

const CadastrarCategoria = async (req: NextApiRequest, res: NextApiResponse) => {

	const { title, text, categoria } = req.body
	
	if (!title || !text || !categoria) return res.status(405).json({ status: false })

	const teste = await prisma.noticias.create({
		data: {
			title: title,
			text: text,
			categoriaID: +categoria
		},
	})

	res.status(201).json({ status: !!teste})
}

export default CadastrarCategoria
