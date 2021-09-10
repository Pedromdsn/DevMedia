import Head from "next/head"

import "../libs/Prisma"

import "tailwindcss/tailwind.css"
import "react-toastify/dist/ReactToastify.css"

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Dev Media</title>
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
				<meta name="description" content="Projeto de contratação DevMedia" />
				<meta name="author" content="Coco Blanco" />
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
