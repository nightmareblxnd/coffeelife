import Image from "next/image";
import Link from 'next/link'
import find from '../find/find.png'

export default function Find() {
  return (
    <div>
        <div className="relative h-32 text-center bg-blue-800 shadow-md">
            <div className="w-full absolute top-0 left-0 text-center mt-12">
                <span className="text-4xl font-bold text-white text-center">Где нас найти</span>
            </div>
        </div>
        <div className="px-24 py-12">
            <div className="py-4">
                <span className="text-4xl font-bold">Приходите пить кофе!</span>
            </div>
            <div className="py-2">
                <span className="text-2xl font-bold">Часы работы</span>
            </div>
            <div className="py-2">
                <span className="text-xl">
                CoffeeLife работает каждый день без перерывов с 8:00 до 20:00
                </span>
            </div>
            <div className="py-2">
                <span className="text-2xl font-bold">Адрес кофейни</span>
            </div>
            <div className="py-2">
                <span className="text-xl">
                Мы находимся по адресу: г. Москва, ул. Ясногорская, д. 17, к. 1
                </span>
            </div>
            <div className="py-8">
                <Image src={find} alt="" className="w-auto h-96 rounded-3xl"></Image>
            </div>
            <div className="py-2">
                <span className="text-2xl font-bold">Контактная информация</span>
            </div>
            <div className="py-2">
                <span className="text-xl">
                Поддержка: support@coffeelife.ru
                <br/>
                Номер телефона: +7 495 890-72-89
                <br/>
                Телеграм канал: @CoffeeLife
                <br/>
                Отдел кадров: job@coffeelife.ru
                <br/>
                ИП: Шарова Виктория Павловна
                </span>
            </div>
        </div>
    </div>
  );
}