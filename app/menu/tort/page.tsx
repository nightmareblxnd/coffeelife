import Image from "next/image";
import Link from 'next/link'
import tort from '../tort/tort.jpg'

export default function Tort() {
  return (
    <div>
        <div className="px-24 py-20">
            <div className="">
                <span className="text-4xl font-bold">Торт Эстерхази</span>
                <div className="py-2">
                    <span className="mt-10">115 гр</span>
                </div>
                <div className="py-2">
                    <span className="text-xl">
                       Торт Эстерхази — классический венский десерт с изысканным вкусом. Нежные миндально-меренговые коржи сочетаются с воздушным сливочным кремом на основе заварного крема и сливочного масла, создавая неповторимую гармонию сладости и лёгкой текстуры. Идеальный выбор для ценителей изысканных кондитерских традиций.
                    </span>
                </div>
                <div className="py-4">
                    <span className="rounded-4xl bg-blue-800 text-white px-4 py-2 text-xl">390 руб</span>
                </div>
                <div className="py-8">
                    <Image src={tort} alt="" className="rounded-3xl w-96 h-96 shadow-xl"></Image>
                </div>
                <div className="py-2">
                    <Link href='/menu' className="rounded-4xl bg-blue-800 text-white px-4 py-4 text-xl hover:bg-blue-300 transition delay-100 ease-in-out duration-300">Назад в меню</Link>
                </div>
            </div>
        </div>
    </div>
  );
}