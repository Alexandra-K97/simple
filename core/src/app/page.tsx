"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import { title } from "process";
import { twMerge } from "tailwind-merge";

const SHEETS = [
  {
    image: "/img/sheets.png",
    title: "V.1",
    description: "Результат <br/> вашего обучения",
  },
  {
    image: "/img/sheets-two.png",
    title: "V.2",
    description: "Результат<br/> вашего обучения",
  },
  {
    image: "/img/sheets-three.png",
    title: "V.3",
    description: "Результат<br/> вашего обучения",
  },
];
const PRODUCTS = [
  {
    image: "/img/packaging.png",
    title: "Упаковка",
    item: "Тираж: от 50 штук",
    description:
      "Сделано из крафт-бумаги или плотного картона. Упаковки имеют различные формы и расцветки, изготовим форму под заказ.",
    link: "#!",
  },
  {
    image: "/img/pack.png",
    title: "Пакеты",
    item: "Тираж: от 200 штук",
    description:
      "С прямоугольным дном. От 10 см до 60 см повысоте. Материалы: картон, крафт-бумага. Различные расцветки и дизайн.",
    link: "#!",
  },

  {
    image: "/img/cases.png",
    title: "Кейсы",
    item: "Тираж: от 30 штук",
    description:
      "Подойдет для документов и других бумаг. Различные расцветки, размеры и плотность. Материал: прессованная бумага.",
    link: "#!",
  },
  {
    image: "/img/goods.png",
    title: "Другие изделия",
    item: "Тираж: от 100 штук",
    description:
      "Нестандартные упаковки, кейсы и другие изделия различных размеров и конфигураций. Изготовим в кратчайшие сроки.",
    link: "#!",
  },
];

export default function Home() {
  return (
    <>
      <main>
        <Header />
        <div className="container flex gap-[125px]">
          <div>
            <div className=" text-[#4c5866] text-6xl  pt-[130px]  w-[455px] max-lg:text-[50px]  max-lg:pt-[60px] max-md:text-3xl max-md:pt-[49px] max-md:w-full">
              <div>Простые вещи.</div>
              <div>Из бумаги</div>
            </div>
            <div className="text-[#85859B] text-lg  max-w-[445px] w-full pt-[30px] max-lg:max-w-[390px]  max-md:text-sm">
              <p>
                Бума́га (предположительно от итал. bombagia, первоисточником же
                считается иранский) — волокнистый материал с минеральными
                добавками.
              </p>
            </div>
            <button className="btn text-xl py-[20px]  px-[89px] mt-[30px]  text-[#7875FE] max-md:py-3.5 max-md:px-[38px] max-md:mt-5 max-md:mb-[60px]">
              Каталог
            </button>
          </div>
          <div className="pt-[60px] max-lg:hidden">
            <Image
              className="w-full"
              src="/img/simple.png"
              alt="simple"
              width={549}
              height={560}
            />
          </div>
          <div className="lg:hidden max-lg:pt-5 max-md:hidden">
            <Image
              className="max-w-[500px] w-full"
              src="/img/simple two.png"
              alt="simple"
              width={265}
              height={396}
            />
          </div>
        </div>
        <div className="bg-[#d1d0d0] pt-[90px] pb-[60px] max-md:py-[60px]">
          <div className="container">
            <div className="flex gap-[30px] max-sm:flex-col">
              {SHEETS.map((item, i) => (
                <div
                  key={i}
                  className="border-t  border-[#C0C0C0]  flex  gap-[30px] w-full  sm:max-lg:flex-col max-lg:gap-0 max-sm:justify-center max-sm:gap-[30px]"
                >
                  <div className="pt-5">
                    <Image
                      className="max-w-[160px] w-full max-md:max-w-[150px] max-sm:w-[130px]"
                      src={item.image}
                      alt="sheets"
                      width={160}
                      height={118}
                    />
                  </div>
                  <div className="mt-[37px] max-w-[160px] max-lg:mt-0">
                    <p className="text-[#666666] text-lg font-medium max-dm:text-base max-sm:pt-[32px]">
                      {item.title}
                    </p>
                    <p
                      dangerouslySetInnerHTML={{ __html: item.description }}
                      className="text-[#85859B]  text-lg font-normal max-w-[210px] max-md:text-sm"
                    ></p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex  gap-[60px] max-md:gap-[30px] max-sm:flex-col max-sm:gap-0">
              <div className="mt-[90px] max-md:mt-10 max-sm:mt-[60px]">
                <Image
                  className="w-full"
                  src="/img/sheets main.png"
                  alt="sheets"
                  width={700}
                  height={484}
                />
              </div>
              <div className="mt-[150px] max-w-[350px] max-md:max-w-[510px] max-md:mt-10">
                <p className="text-[#666666] text-[40px] leading-[100%] pb-5 max-md:text-3xl max-sm:text-2xl max-sm:max-w-[285px]">
                  Максимальная белизна
                </p>
                <p className="text-[#85859B] text-lg leading-[170%] max-md:text-base">
                  Для повышения белизны, гладкости и мягкости в состав бумажной
                  массы вводят белые минеральные вещества: мел, тальк, каолин и
                  др. Эта операция называется наполнением.
                </p>
                <div className="text-[#85859B] text-lg pt-[15px] leading-[170%] max-md:text-base">
                  <p>
                    Отлив бумажного листа осуществляют на бумагоделательной
                    машине, важнейшей частью которой является непрерывно
                    движущаяся (как транспортер) металлическая или капроновая
                    сетка.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#ffffff] py-[90px] max-md:py-[60px]">
          <div className="container">
            <div className="grid grid-cols-4 gap-[30px] max-lg:grid-cols-2 max-sm:grid-cols-1 max-lg:gap-[60px]">
              {PRODUCTS.map((item, i) => (
                <div key={i}>
                  <div className="bg-[#ebebeb] flex items-end justify-center h-[180px]">
                    <Image
                      className={twMerge(
                        "object-contain max-h-[180px] ",
                        i === 1 && "max-h-[170px]"
                      )}
                      src={item.image}
                      alt="packaging"
                      width={255}
                      height={180}
                    />
                  </div>
                  <div className="text-[#666666] text-3xl pt-[30px] max-md:text-2xl">
                    <h1>{item.title}</h1>
                  </div>
                  <div>
                    <p className="text-[#B5B5BD] text-sm pt-2">{item.item}</p>
                    <p className="text-[#85859B] text-lg pt-2 leading-[170%] text-left w-full max-md:text-base">
                      {item.description}
                    </p>
                  </div>
                  <div className="pt-5 flex gap-[5px] items-center max-md:pt-[30px]">
                    <a className="text-[#7875FE]" href={item.link}>
                      Подробнее
                    </a>
                    <Image
                      src="/icons/arrow.svg"
                      alt="arrow"
                      width={20}
                      height={0}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-[#F5F5F5] py-[90px] max-[570px]:py-[60px]">
          <div className="container flex gap-[30px] max-sm:overflow-x-scroll scroll-bar-none">
            <div>
              <Image
                className="max-sm:max-w-[150px]"
                src="/img/hahnemuhle.png"
                alt="one"
                width={255}
                height={135}
              />
            </div>
            <div>
              <Image
                className="max-sm:max-w-[150px]"
                src="/img/canson.png"
                alt="two"
                width={255}
                height={135}
              />
            </div>
            <div>
              <Image
                className="max-sm:max-w-[150px]"
                src="/img/royal talens.png"
                alt="three"
                width={255}
                height={135}
              />
            </div>
            <div>
              <Image
                className="max-sm:max-w-[150px]"
                src="/img/fabriano.png"
                alt="four"
                width={255}
                height={135}
              />
            </div>
          </div>
        </div>
        <div className="bg-[#FFFFFF] pt-[90px] max-md:py-[60px]">
          <div className="container flex gap-[30px] max-md:flex-col max-md:gap-[3px] max-md:justify-center">
            <div className="w-full md:hidden">
              <Image src="/img/book.png" alt="Книга" width={550} height={342} />
            </div>
            <div className="max-w-[350px] pt-6 max-md:max-w-[550px]">
              <div className="text-[#666666] text-[40px] max-md:text-2xl">
                <p>Simple скетчбук</p>
              </div>
              <div className="text-[#85859B] text-lg pt-2 max-md:text-base max-md:pt-5">
                <p>
                  80 листов, твердая обложка, бумага Fabriano 200 г/м2. Подойдет
                  и для графики и для акварели. Для самых смелых творческих
                  замыслов!
                </p>
              </div>
              <div className="btn py-[23px] px-[94px] max-w-[255px] mt-[30px] text-[#7875FE] max-md:py-[18px] max-md:px-[65px] max-md:max-w-[196px] max-sm:text-lg max-sm:py-[14px] max-sm:px-[38px] max-sm:max-w-[150px]">
                <button>Купить</button>
              </div>
            </div>
            <div className="w-full max-md:hidden">
              <Image src="/img/book.png" alt="Книга" width={730} height={410} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
