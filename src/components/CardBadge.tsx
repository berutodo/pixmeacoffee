import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CardBadgeInterface {
  user: any;
  description: string;
  socialLinks: {
    link: string;
    name: string;
    svg: React.ReactNode;
  }[];
}

export default function CardBadge(props: CardBadgeInterface) {
  return (
    <div className="flex flex-col w-80 bg-transparent">
      <Image
        src="/dash.svg"
        alt="Cordao azul do cracha"
        width={100}
        height={100}
        className="ml-28"
        style={{ marginTop: "-20px", zIndex: "1", marginBottom: "-24px" }}
        priority
      />
      <div className="flex flex-col w-80 bg-white rounded-2xl shadow-xl px-4 pb-4">
        <div className="w-full h-8 flex justify-center items-center">
          <div className="bg-gray-300 w-16 h-4 rounded-full shadow-inner"></div>
        </div>
        <div className="flex w-full h-16">
          <Image
            src={props.user?.photoURL || ""}
            alt="Foto do usuario"
            className="w-14 h-14 rounded-full cursor-pointer bg-primary-500 p-1"
            width={80}
            height={80}
            priority
          />
          <div className="ml-2">
            <p className="text-xl">{props.user?.displayName}</p>
            <p className="text text-gray-500">/daniellimae</p>
          </div>
        </div>
        <div className="flex w-full p-4">
          <p
            className="text-sm text-gray-500 font-normal break-words max-w-full"
            style={{
              fontSize: "12px",
              lineHeight: "1rem",
              wordWrap: "break-word",
            }}>
            {props.description}
          </p>
        </div>
        <div className="w-full h-16">
          <div className="flex justify-center items-center w-full gap-8 h-12 cursor-pointer">
            {props.socialLinks?.map((item) => (
              <>
                <Link key={item.name} href={item.link}>
                  {item.svg}
                </Link>
              </>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <div>
            <p>
              Me apoie com a quantia que quiser. <br />{" "}
            </p>
            <p className="text-sm text-gray-500">
              <span className="text-primary-500">Via pix</span>. Receberei 100%
              desse valor :)
            </p>
          </div>
          <Image
            src={
              "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=00020126460014BR.GOV.BCB.PIX0124danielunivap@outlook.com5204000053039865802BR5925DANIEL ALVES LIMA E SILVA6009SAO PAULO622605227XYeTvpL1ebPnPktWnIWbJ6304D81D"
            }
            alt="Pix me a coffe escrito com coracoes azuis rodeando."
            width={250}
            height={250}
            priority
          />
          <Image
            src={"pixmeacoffee.svg"}
            alt="Pix me a coffe escrito com coracoes azuis rodeando."
            width={120}
            height={120}
            priority
          />
        </div>
      </div>
    </div>
  );
}
