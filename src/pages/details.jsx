import Link from "next/link";
import { useEffect, useState } from "react";

export default function Details({ ownersList }) {
	// const [owners, setOwners] = useState([]);
	// useEffect(() => {
	// 	async function loadData() {
	// 		const responcse = await fetch(
	// 			"https://jsonplaceholder.typicode.com/posts"
	// 		);
	// 		const ownersList = await responcse.json();
	// 		setOwners(ownersList);
	// 	}

	// 	loadData();
	// }, []);

	return (
		<div>
			{ownersList.map((e) => (
				<div key={e.id}>
					<Link as={`/${e.id}/${e.title}`} href="/[vehicle]/[person]">
						<a>
							Navigate to {e.title} of {e.id}
						</a>
					</Link>
				</div>
			))}
		</div>
	);
}

Details.getInitialProps = async () => {
	const responcse = await fetch("https://jsonplaceholder.typicode.com/posts");
	const ownersList = await responcse.json();
	return { ownersList: ownersList };
};
