import Image from "next/image";
import Link from 'next/link'
import latte from '../latte/latte.webp'

export default function Latte() {
  return (
    <div>
        <div className="px-24 py-20">
            <div className="">
                <span className="text-4xl font-bold">Латте</span>
                <div className="py-2">
                    <span className="mt-10">250 мл</span>
                </div>
                <div className="py-2">
                    <span className="text-xl">
                       Латте — это идеальный баланс насыщенного эспрессо и нежного взбитого молока, который дарит мягкий и бархатистый вкус с лёгкой кремовой пенкой. Этот классический кофейный напиток станет отличным выбором для тех, кто ценит утончённый аромат и гармоничное сочетание вкусов.
                    </span>
                </div>
                <div className="py-4">
                    <span className="rounded-4xl bg-blue-800 text-white px-4 py-2 text-xl">220 руб</span>
                </div>
                <div className="py-8">
                    <Image src={latte} alt="" className="rounded-3xl w-96 h-96 shadow-xl"></Image>
                </div>
                <div className="py-2">
                    <Link href='/menu' className="rounded-4xl bg-blue-800 text-white px-4 py-4 text-xl hover:bg-blue-300 transition delay-100 ease-in-out duration-300">Назад в меню</Link>
                </div>
            </div>
        </div>
    </div>
  );
}