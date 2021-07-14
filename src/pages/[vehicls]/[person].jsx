import { useRouter } from "next/router";

export default function Person({ ownersList }) {
	const router = useRouter();
	const { query } = useRouter();
	console.log(router.query);
	return (
		// <>
		// 	<h2>
		// 		{router.query.person} Of {router.query.vehicls}
		// 	</h2>
		// 	<div>{JSON.stringify(query)}</div>
		// </>
		<pre>{JSON.stringify(ownersList, null, 4)}</pre>
	);
}

Person.getInitialProps = async (ctx) => {
	// if (!ctx.req) {
	// 	return { ownersList: [] };
	// }

	const { query } = ctx;
	const responcse = await fetch(
		"https://jsonplaceholder.typicode.com/posts/" + query.vehicls
	);
	const ownersList = await responcse.json();
	return { ownersList: ownersList };
};
