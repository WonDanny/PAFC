// next
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  console.log('Home !!');

  return (
    <div className="w-full h-full">
      <div className="flex text-base font-bold text-center px-6 py-4">HOME</div>
      <p className="text-3xl font-bold">HOME 인데용?</p>
    </div>
  );
}
