import Link from "next/link";

const peaple = [
	{ v: "car", name: "ali" },
	{ v: "car", name: "ali" },
	{ v: "car", name: "ali" },
	{ v: "bike", name: "reza" },
	{ v: "airplan", name: "ahmad" },
];

export default function Details() {
	return (
		<div>
			{peaple.map((e) => (
				<div>
					<Link as={`/${e.v}/${e.name}`} href="/[vehicle]/[person]">
						<a>
							Navigate to {e.name} of {e.v}
						</a>
					</Link>
				</div>
			))}
		</div>
	);
}
