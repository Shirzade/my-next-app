import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Person({ ownersList }) {
	const router = useRouter();
	const { query } = useRouter();
	const [owners, setOwners] = useState(ownersList);
	useEffect(() => {
		async function loadData() {
			const responcse = await fetch(
				"https://jsonplaceholder.typicode.com/posts/" + router.query.vehicls
			);
			const ownersList = await responcse.json();
			setOwners(ownersList);
		}

		if (ownersList.length == 0) {
			loadData();
		}
	}, []);

	console.log(owners);

	if (!owners) {
		return <div>Loading ....</div>;
	}
	return <pre>{owners.body}</pre>;
}

Person.getInitialProps = async (ctx) => {
	if (!ctx.req) {
		return { ownersList: [] };
	}

	const { query } = ctx;
	const responcse = await fetch(
		"https://jsonplaceholder.typicode.com/posts/" + query.vehicls
	);
	const ownersList = await responcse.json();
	return { ownersList: ownersList };
};
