import Image from "next/image";
import Link from 'next/link'
import icecream from '../icecream/icecream.png'

export default function IceCream() {
  return (
    <div>
        <div className="px-24 py-20">
            <div className="">
                <span className="text-4xl font-bold">Мороженое в ассортименте</span>
                <div className="py-2">
                    <span className="mt-10">120 гр</span>
                </div>
                <div className="py-2">
                    <span className="text-xl">
                       (Клубника, шоколад, ваниль) Мороженое в ассортименте предлагает разнообразие вкусов и текстур, которые порадуют каждого. Нежное сливочное основание, насыщенные фруктовые и шоколадные нотки создают идеальное лакомство для любого настроения и времени дня. Выберите свой любимый вкус и насладитесь моментом сладкого наслаждения.
                    </span>
                </div>
                <div className="py-4">
                    <span className="rounded-4xl bg-blue-800 text-white px-4 py-2 text-xl">120 руб</span>
                </div>
                <div className="py-8">
                    <Image src={icecream} alt="" className="rounded-3xl w-96 h-96 shadow-xl"></Image>
                </div>
                <div className="py-2">
                    <Link href='/menu' className="rounded-4xl bg-blue-800 text-white px-4 py-4 text-xl hover:bg-blue-300 transition delay-100 ease-in-out duration-300">Назад в меню</Link>
                </div>
            </div>
        </div>
    </div>
  );
}