import { prisma } from "../../../libs/Prisma";

import { NextApiRequest, NextApiResponse } from "next";

const CadastrarCategoria = async (
	req: NextApiRequest,
	res: NextApiResponse
) => {
	const { nome } = req.body;
	if (!nome) return res.status(405).json({ status: false });

	const teste = await prisma.categorias.create({
		data: {
			nome: nome,
		},
	});

	res.status(201).json({ status: !!teste });
};

export default CadastrarCategoria;
