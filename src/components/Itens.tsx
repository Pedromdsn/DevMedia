import { Noticias } from "@prisma/client"

interface NoticiasProps {
	noticias: Noticias[]
}

const NoticiasComponente = ({noticias} : NoticiasProps) => {
	return <section className="w-2/3 mx-auto py-20 -mt-20 flex justify-center items-center flex-wrap gap-10">
		{noticias.length == 0 ? <div className="text-4xl font-semibold">Sem Noticias</div> : noticias.map((noticia, index) => <Noticia titulo={noticia.title} text={noticia.text} key={index}/>)}
	</section>
}

interface NoticiaProps {
	titulo: string
	text: string
}

function Noticia(props: NoticiaProps) {
	return (
		<div className="flex flex-col w-60 break-words text-center h-60 justify-between">
			<h1 className="text-xl font-bold">{props.titulo}</h1>
			<p className="overflow-ellipsis">{props.text}</p>
			<button className="bg-gray-300 mx-6 py-3 mt-20 rounded-xl hover:brightness-95">Acessar</button>
		</div>
	)
}

export default NoticiasComponente
