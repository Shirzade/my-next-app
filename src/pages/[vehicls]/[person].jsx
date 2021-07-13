import { useRouter } from "next/router";

export default function Person() {
	const router = useRouter();
	console.log(router.query);
	return (
		<h2>
			{router.query.person} Of {router.query.vehicls}
		</h2>
	);
}
