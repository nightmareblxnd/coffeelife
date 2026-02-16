import Image from "next/image";
import Link from 'next/link'
import tiramisu from '../tiramisu/tiramisu.jpg'

export default function Tiramisu() {
  return (
    <div>
        <div className="px-24 py-20">
            <div className="">
                <span className="text-4xl font-bold">Тирамису</span>
                <div className="py-2">
                    <span className="mt-10">110 гр</span>
                </div>
                <div className="py-2">
                    <span className="text-xl">
                       Тирамису маскарпоне — классический итальянский десерт, в котором нежные бисквиты пропитаны ароматным кофе и обогащены мягким сливочным сыром маскарпоне. Лёгкая текстура и гармоничное сочетание вкусов подарят удовольствие каждому сладкоежке.
                    </span>
                </div>
                <div className="py-4">
                    <span className="rounded-4xl bg-blue-800 text-white px-4 py-2 text-xl">350 руб</span>
                </div>
                <div className="py-8">
                    <Image src={tiramisu} alt="" className="rounded-3xl w-96 h-96 shadow-xl"></Image>
                </div>
                <div className="py-2">
                    <Link href='/menu' className="rounded-4xl bg-blue-800 text-white px-4 py-4 text-xl hover:bg-blue-300 transition delay-100 ease-in-out duration-300">Назад в меню</Link>
                </div>
            </div>
        </div>
    </div>
  );
}