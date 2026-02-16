import Image from "next/image";
import Link from 'next/link'
import glyase from '../glyase/glyase.webp'

export default function Glyase() {
  return (
    <div>
        <div className="px-24 py-20">
            <div className="">
                <span className="text-4xl font-bold">Глясе</span>
                <div className="py-2">
                    <span className="mt-10">250 мл</span>
                </div>
                <div className="py-2">
                    <span className="text-xl">
                        Глясе — это освежающий напиток с насыщенным фруктовым вкусом и приятной мягкой сладостью. Отличный выбор для расслабляющих вечеров и тёплых встреч, который подарит заряд энергии и хорошее настроение.
                    </span>
                </div>
                <div className="py-4">
                    <span className="rounded-4xl bg-blue-800 text-white px-4 py-2 text-xl">250 руб</span>
                </div>
                <div className="py-8">
                    <Image src={glyase} alt="" className="rounded-3xl w-96 h-96 shadow-xl"></Image>
                </div>
                <div className="py-2">
                    <Link href='/menu' className="rounded-4xl bg-blue-800 text-white px-4 py-4 text-xl hover:bg-blue-300 transition delay-100 ease-in-out duration-300">Назад в меню</Link>
                </div>
            </div>
        </div>
    </div>
  );
}