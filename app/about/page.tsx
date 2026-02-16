import Image from "next/image";
import Link from 'next/link'
import about from '../about/about.jpg'

export default function About() {
  return (
    <div>
        <div className="relative h-32 text-center bg-blue-800 shadow-md">
            <div className="w-full absolute top-0 left-0 text-center mt-12">
                <span className="text-4xl font-bold text-white text-center">О нас</span>
            </div>
        </div>
        <div className="px-24 py-12">
            <span className="text-4xl font-bold">Добро пожаловать в CoffeeLife: Больше, чем просто кофе</span>
            <div className="py-2">
                <span className="mt-10">Живи ярко. Пей вкусно.</span>
            </div>
            <div className="py-2">
                <span className="text-2xl font-bold">Концепция</span>
            </div>
            <div className="py-2">
                <span className="text-xl">
                CoffeeLife — это уютное городское пространство, созданное для тех, кто ценит момент «здесь и сейчас». Мы объединили страсть к высококачественному кофе, современный комфорт и атмосферу живого общения. Это место, где утро начинается с бодрости, день проходит продуктивно, а вечер дарит расслабление.
                </span>
            </div>
            <div className="py-2">
                <span className="text-2xl font-bold">Миссия</span>
            </div>
            <div className="py-2">
                <span className="text-xl">
                Мы верим, что кофе — это не просто напиток, а важная часть жизни. Наша миссия — делать эту часть идеальной, используя лучшее зерно, профессиональный подход и искренний сервис.
                </span>
            </div>
            <div className="py-4">
                <span className="text-4xl font-bold">Наша философия в чашке</span>
            </div>
            <div className="py-2">
                <span className="text-2xl font-bold">Зерно и обжарка</span>
            </div>
            <div className="py-2">
                <span className="text-xl">
                Мы работаем только со спешелти (specialty) кофе. Зерно поставляется напрямую от мелких фермеров из Эфиопии, Кении, Колумбии и Бразилии. Обжарка производится на собственном производстве (или у проверенного партнера) малыми партиями, чтобы сохранить уникальный вкусовой профиль каждого сорта. Мы используем щадящую (медленную) обжарку, чтобы раскрыть природную сладость и фруктовые ноты зерна.
                </span>
            </div>
            <div className="py-2">
                <span className="text-2xl font-bold">Наши бариста - творцы</span>
            </div>
            <div className="py-2">
                <span className="text-xl">
                Наши бариста — не просто операторы кофемашины. Это увлеченные профессионалы, прошедшие обучение и регулярно участвующие в каппингах (профессиональных дегустациях). Они всегда подскажут, какой напиток выбрать под ваше настроение, и с радостью нарисуют на латте что-то особенное.
                </span>
            </div>
            <div className="py-4">
                <span className="text-4xl font-bold">Приходите заряжаться! ❤️</span>
            </div>
            <div className="py-8">
                <Image src={about} alt="" className="w-auto h-96 rounded-3xl"></Image>
            </div>
        </div>
    </div>
  );
}