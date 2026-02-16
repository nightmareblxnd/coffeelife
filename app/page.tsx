import Image from "next/image";
import promo from '../public/promo.jpg'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="relative text-center">
      <Image src={promo} alt="" className="w-screen"></Image>
      <div className="w-full absolute top-0 left-0 text-center mt-64">
        <span className="text-4xl text-white text-center font-bold">Вкуснейший кофе только в CoffeeLife!</span>
        <div className="py-2">
          <span className="text-2xl text-white text-center">Ознакомьтесь с нашим меню скорее</span>
        </div>
        <div className="py-8">
          <Link className="text-xl text-white py-4 px-6 rounded-4xl bg-blue-800 hover:bg-blue-300 transition delay-100 duration-300 ease-in-out" href='/menu'>Перейти к меню</Link>
        </div>
      </div>
    </div>
  );
}
