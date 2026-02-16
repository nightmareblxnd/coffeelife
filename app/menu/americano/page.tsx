import Image from "next/image";
import Link from 'next/link'
import americano from '../americano/americano.webp'

export default function Americano() {
  return (
    <div>
        <div className="px-24 py-20">
            <div className="">
                <span className="text-4xl font-bold">Американо</span>
                <div className="py-2">
                    <span className="mt-10">150 мл</span>
                </div>
                <div className="py-2">
                    <span className="text-xl">
                        Американо — классический кофейный напиток, который сочетает в себе насыщенный вкус эспрессо и мягкость добавленной горячей воды. Этот кофе сохраняет богатый аромат и тонкую бодрящую горчинку, идеально подходящую для тех, кто предпочитает крепкий, но при этом сбалансированный напиток.
                    </span>
                </div>
                <div className="py-4">
                    <span className="rounded-4xl bg-blue-800 text-white px-4 py-2 text-xl">150 руб</span>
                </div>
                <div className="py-8">
                    <Image src={americano} alt="" className="rounded-3xl w-96 h-96 shadow-xl"></Image>
                </div>
                <div className="py-2">
                    <Link href='/menu' className="rounded-4xl bg-blue-800 text-white px-4 py-4 text-xl hover:bg-blue-300 transition delay-100 ease-in-out duration-300">Назад в меню</Link>
                </div>
            </div>
        </div>
    </div>
  );
}