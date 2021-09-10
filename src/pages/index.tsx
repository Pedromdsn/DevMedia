import { prisma } from "../libs/Prisma";
import MainFooter from "../components/Footer";
import MainHeader from "../components/Header";
import NoticiasComponente from "../components/Itens";

import { GetServerSideProps } from "next";
import { Noticias } from "@prisma/client";

interface MainProps {
	noticias: Noticias[];
}

interface QueryProps {
	busca: string;
}

const index = ({ noticias }: MainProps) => {
	return (
		<div className="min-h-screen flex justify-between flex-col">
			<MainHeader />
			<NoticiasComponente noticias={noticias} />
			<MainFooter />
		</div>
	);
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	let noticias: Noticias[];

	const { busca } = ctx.query;

	if (!busca) noticias = await prisma.noticias.findMany();
	else
		noticias = await prisma.noticias.findMany({
			where: {
				OR: [
					{
						title: {
							contains: "" + busca,
						},
					},
					{
						title: {
							contains: "" + busca,
						},
					},
					{
						categoria: {
							nome: {
								contains: "" + busca,
							},
						},
					},
				],
			},
		});

	noticias = noticias.reverse();
	return {
		props: { noticias },
	};
};

export default index;
