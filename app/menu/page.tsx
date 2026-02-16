import Image from "next/image";
import Link from 'next/link'
import americano from '../menu/americano.webp'
import glyase from '../menu/glyase.webp'
import cappuchino from '../menu/cappuchino.webp'
import espresso from '../menu/espresso.webp'
import latte from '../menu/latte.webp'
import icecream from '../menu/icecream.png'
import tiramisu from '../menu/tiramisu.jpg'
import tort from '../menu/tort.jpg'

export default function Menu() {
  return (
    <div>
        <div className="relative h-32 text-center bg-blue-800 shadow-md">
            <div className="w-full absolute top-0 left-0 text-center mt-12">
                <span className="text-4xl font-bold text-white text-center">Меню</span>
            </div>
        </div>
        <div className="px-24 py-24 grid grid-cols-4 gap-4">
            <Link href='/menu/americano' className="relative w-72 h-[420px] bg-white shadow-md hover:shadow-xl rounded-2xl px-4 py-4 flex hover:-translate-y-1 transition delay-100 duration-300 ease-in-out">
                <div className="">
                    <Image src={americano} alt="" className="w-64 h-64 rounded-2xl absolute"></Image>
                </div>
                <div className="mt-68 text-left absolute">
                    <span className="text-2xl font-bold">Американо</span>
                </div>
                <div className="mt-76 text-left w-68 absolute">
                    <span className="">Классический кофе</span>
                </div>
                <div className="mt-88 absolute">
                    <span className="text-bold bg-blue-800 text-white rounded-3xl px-4 py-2">150 руб</span>
                </div>
            </Link>
            <Link href='/menu/glyase' className="relative w-72 h-[420px] bg-white shadow-md hover:shadow-xl rounded-2xl px-4 py-4 flex hover:-translate-y-1 transition delay-100 duration-300 ease-in-out">
                <div className="">
                    <Image src={glyase} alt="" className="w-64 h-64 rounded-2xl absolute"></Image>
                </div>
                <div className="mt-68 text-left absolute">
                    <span className="text-2xl font-bold">Глясе</span>
                </div>
                <div className="mt-76 text-left w-68 absolute">
                    <span className="">Кофе с мороженым</span>
                </div>
                <div className="mt-88 absolute">
                    <span className="text-bold bg-blue-800 text-white rounded-3xl px-4 py-2">250 руб</span>
                </div>
            </Link>
            <Link href='/menu/cappuchino' className="relative w-72 h-[420px] bg-white shadow-md hover:shadow-xl rounded-2xl px-4 py-4 flex hover:-translate-y-1 transition delay-100 duration-300 ease-in-out">
                <div className="">
                    <Image src={cappuchino} alt="" className="w-64 h-64 rounded-2xl absolute"></Image>
                </div>
                <div className="mt-68 text-left absolute">
                    <span className="text-2xl font-bold">Капучино</span>
                </div>
                <div className="mt-76 text-left w-68 absolute">
                    <span className="">Кофе с пенкой</span>
                </div>
                <div className="mt-88 absolute">
                    <span className="text-bold bg-blue-800 text-white rounded-3xl px-4 py-2">200 руб</span>
                </div>
            </Link>
            <Link href='/menu/espresso' className="relative w-72 h-[420px] bg-white shadow-md hover:shadow-xl rounded-2xl px-4 py-4 flex hover:-translate-y-1 transition delay-100 duration-300 ease-in-out">
                <div className="">
                    <Image src={espresso} alt="" className="w-64 h-64 rounded-2xl absolute"></Image>
                </div>
                <div className="mt-68 text-left absolute">
                    <span className="text-2xl font-bold">Эспрессо</span>
                </div>
                <div className="mt-76 text-left w-68 absolute">
                    <span className="">Шот кофе</span>
                </div>
                <div className="mt-88 absolute">
                    <span className="text-bold bg-blue-800 text-white rounded-3xl px-4 py-2">120 руб</span>
                </div>
            </Link>
            <Link href='/menu/latte' className="relative w-72 h-[420px] bg-white shadow-md hover:shadow-xl rounded-2xl px-4 py-4 flex hover:-translate-y-1 transition delay-100 duration-300 ease-in-out">
                <div className="">
                    <Image src={latte} alt="" className="w-64 h-64 rounded-2xl absolute"></Image>
                </div>
                <div className="mt-68 text-left absolute">
                    <span className="text-2xl font-bold">Латте</span>
                </div>
                <div className="mt-76 text-left w-68 absolute">
                    <span className="">Кофе с молоком</span>
                </div>
                <div className="mt-88 absolute">
                    <span className="text-bold bg-blue-800 text-white rounded-3xl px-4 py-2">220 руб</span>
                </div>
            </Link>
            <Link href='/menu/icecream' className="relative w-72 h-[420px] bg-white shadow-md hover:shadow-xl rounded-2xl px-4 py-4 flex hover:-translate-y-1 transition delay-100 duration-300 ease-in-out">
                <div className="">
                    <Image src={icecream} alt="" className="w-64 h-64 rounded-2xl absolute"></Image>
                </div>
                <div className="mt-68 text-left absolute">
                    <span className="text-2xl font-bold">Мороженое</span>
                </div>
                <div className="mt-76 text-left w-68 absolute">
                    <span className="">В ассортименте</span>
                </div>
                <div className="mt-88 absolute">
                    <span className="text-bold bg-blue-800 text-white rounded-3xl px-4 py-2">120 руб</span>
                </div>
            </Link>
            <Link href='/menu/tiramisu' className="relative w-72 h-[420px] bg-white shadow-md hover:shadow-xl rounded-2xl px-4 py-4 flex hover:-translate-y-1 transition delay-100 duration-300 ease-in-out">
                <div className="">
                    <Image src={tiramisu} alt="" className="w-64 h-64 rounded-2xl absolute"></Image>
                </div>
                <div className="mt-68 text-left absolute">
                    <span className="text-2xl font-bold">Тирамису</span>
                </div>
                <div className="mt-76 text-left w-68 absolute">
                    <span className="">Десерт с маскарпоне</span>
                </div>
                <div className="mt-88 absolute">
                    <span className="text-bold bg-blue-800 text-white rounded-3xl px-4 py-2">350 руб</span>
                </div>
            </Link>
            <Link href='/menu/tort' className="relative w-72 h-[420px] bg-white shadow-md hover:shadow-xl rounded-2xl px-4 py-4 flex hover:-translate-y-1 transition delay-100 duration-300 ease-in-out">
                <div className="">
                    <Image src={tort} alt="" className="w-64 h-64 rounded-2xl absolute"></Image>
                </div>
                <div className="mt-68 text-left absolute">
                    <span className="text-2xl font-bold">Торт Эстерхази</span>
                </div>
                <div className="mt-76 text-left w-68 absolute">
                    <span className="">Венский десерт</span>
                </div>
                <div className="mt-88 absolute">
                    <span className="text-bold bg-blue-800 text-white rounded-3xl px-4 py-2">390 руб</span>
                </div>
            </Link>
        </div>
    </div>
  );
}