import Link from "next/link";



export default function Home() {
	console.log('Home !!');

	const baseUrl = process.env.PAFC_BASE_URI;
	
	return (
		<div className="relative">
            <img src="/images/PAFC_BG.png" className="w-full"/>
            <button className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Link href={`${baseUrl}/teams`} className="text-white text-9xl font-bold">PAFC</Link>
            </button>
        </div>
	);
};
