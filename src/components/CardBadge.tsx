import React from "react";
import Image from "next/image";
import { SocialLinksType } from "@/app/context/AccountFormContext";
import SocialLinks from "./SocialLinks";

export interface DataCardInterface {
  page: string;
  pixKey: string;
  description: string;
  socialLinks: SocialLinksType[];
}

interface CardBadgeInterface {
  user: { photoURL: string; username: string };
  data: DataCardInterface;
}

type SocialLinksTypeName = SocialLinksType["name"];

export default function CardBadge(props: CardBadgeInterface) {
  const svgIconsSocialMedia = (name: SocialLinksTypeName) => {
    switch (name) {
      case "youtube":
        return (
          <>
            <svg
              width="34"
              height="28"
              viewBox="0 0 24 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.7009 8.3236L10.8259 5.0736C10.7035 4.99194 10.5613 4.94505 10.4143 4.93793C10.2674 4.93081 10.1212 4.96373 9.99151 5.03317C9.8618 5.10261 9.75338 5.20598 9.67782 5.33223C9.60226 5.45848 9.5624 5.60287 9.5625 5.75V12.25C9.5624 12.3971 9.60226 12.5415 9.67782 12.6678C9.75338 12.794 9.8618 12.8974 9.99151 12.9668C10.1212 13.0363 10.2674 13.0692 10.4143 13.0621C10.5613 13.055 10.7035 13.0081 10.8259 12.9264L15.7009 9.67641C15.8124 9.60224 15.9038 9.50169 15.967 9.38368C16.0302 9.26567 16.0633 9.13388 16.0633 9C16.0633 8.86613 16.0302 8.73433 15.967 8.61633C15.9038 8.49832 15.8124 8.39777 15.7009 8.3236ZM11.1875 10.7316V7.27344L13.7855 9L11.1875 10.7316ZM22.7991 3.06063C22.7034 2.68622 22.5201 2.33992 22.2642 2.05032C22.0083 1.76071 21.6873 1.5361 21.3275 1.395C17.8459 0.0503163 12.3047 0.0625039 12 0.0625039C11.6953 0.0625039 6.15406 0.0503163 2.6725 1.395C2.31273 1.5361 1.99166 1.76071 1.73578 2.05032C1.47991 2.33992 1.29656 2.68622 1.20086 3.06063C0.937813 4.07422 0.625 5.92672 0.625 9C0.625 12.0733 0.937813 13.9258 1.20086 14.9394C1.29641 15.314 1.4797 15.6605 1.73558 15.9503C1.99147 16.2401 2.31261 16.4648 2.6725 16.606C6.00781 17.8928 11.2281 17.9375 11.933 17.9375H12.067C12.7719 17.9375 17.9952 17.8928 21.3275 16.606C21.6874 16.4648 22.0085 16.2401 22.2644 15.9503C22.5203 15.6605 22.7036 15.314 22.7991 14.9394C23.0622 13.9238 23.375 12.0733 23.375 9C23.375 5.92672 23.0622 4.07422 22.7991 3.06063ZM21.2259 14.5372C21.195 14.6618 21.1349 14.7773 21.0507 14.8742C20.9665 14.9711 20.8605 15.0467 20.7415 15.0948C17.527 16.3359 12.0599 16.3135 12.0071 16.3135H12C11.9452 16.3135 6.48211 16.3338 3.26562 15.0948C3.14656 15.0467 3.04058 14.9711 2.95638 14.8742C2.87217 14.7773 2.81212 14.6618 2.78117 14.5372C2.53437 13.6099 2.25 11.9016 2.25 9C2.25 6.09836 2.53437 4.39008 2.77406 3.46789C2.80444 3.34255 2.86422 3.22623 2.94846 3.12857C3.0327 3.03091 3.13898 2.9547 3.25852 2.90625C6.3582 1.70883 11.5521 1.6875 11.9777 1.6875H12.0051C12.0599 1.6875 17.528 1.66922 20.7395 2.90625C20.8585 2.95431 20.9645 3.02989 21.0487 3.12681C21.1329 3.22373 21.193 3.33923 21.2239 3.46383C21.4656 4.39008 21.75 6.09836 21.75 9C21.75 11.9016 21.4656 13.6099 21.2259 14.5321V14.5372Z"
                fill="#2D5BFF"
              />
            </svg>
          </>
        );
      case "twitch":
        return (
          <>
            <svg
              width="34"
              height="38"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M21.125 3.25H4.875C4.44402 3.25 4.0307 3.4212 3.72595 3.72595C3.4212 4.0307 3.25 4.44402 3.25 4.875V19.5C3.25 19.931 3.4212 20.3443 3.72595 20.649C4.0307 20.9538 4.44402 21.125 4.875 21.125H6.5V24.375C6.49994 24.5294 6.5439 24.6807 6.62673 24.811C6.70955 24.9414 6.82781 25.0454 6.96765 25.111C7.10749 25.1765 7.26311 25.2009 7.41628 25.1811C7.56946 25.1614 7.71383 25.0984 7.8325 24.9996L12.482 21.125H16.768C17.1484 21.1251 17.5168 20.9918 17.809 20.7482L22.165 17.1173C22.3484 16.9652 22.496 16.7744 22.5971 16.5587C22.6982 16.3429 22.7504 16.1074 22.75 15.8691V4.875C22.75 4.44402 22.5788 4.0307 22.274 3.72595C21.9693 3.4212 21.556 3.25 21.125 3.25ZM21.125 15.8691L16.768 19.5H12.482C12.1016 19.4999 11.7332 19.6332 11.441 19.8768L8.125 22.6403V20.3125C8.125 20.097 8.0394 19.8903 7.88702 19.738C7.73465 19.5856 7.52799 19.5 7.3125 19.5H4.875V4.875H21.125V15.8691ZM16.25 13.8125V8.9375C16.25 8.72201 16.3356 8.51535 16.488 8.36298C16.6403 8.2106 16.847 8.125 17.0625 8.125C17.278 8.125 17.4847 8.2106 17.637 8.36298C17.7894 8.51535 17.875 8.72201 17.875 8.9375V13.8125C17.875 14.028 17.7894 14.2347 17.637 14.387C17.4847 14.5394 17.278 14.625 17.0625 14.625C16.847 14.625 16.6403 14.5394 16.488 14.387C16.3356 14.2347 16.25 14.028 16.25 13.8125ZM11.375 13.8125V8.9375C11.375 8.72201 11.4606 8.51535 11.613 8.36298C11.7653 8.2106 11.972 8.125 12.1875 8.125C12.403 8.125 12.6097 8.2106 12.762 8.36298C12.9144 8.51535 13 8.72201 13 8.9375V13.8125C13 14.028 12.9144 14.2347 12.762 14.387C12.6097 14.5394 12.403 14.625 12.1875 14.625C11.972 14.625 11.7653 14.5394 11.613 14.387C11.4606 14.2347 11.375 14.028 11.375 13.8125Z"
                fill="#2D5BFF"
              />
            </svg>
          </>
        );
      case "twitter":
        return (
          <>
            <svg
              width="34"
              height="28"
              viewBox="0 0 24 24"
              aria-label="X"
              role="img">
              <g>
                <path
                  d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                  fill="#2D5BFF"></path>
              </g>
            </svg>
          </>
        );
      case "tabnews":
        return (
          <>
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="32"
              width="32"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.9999 4C20.6568 4 21.9999 5.34315 21.9999 7V17C21.9999 18.6569 20.6568 20 18.9999 20H4.99994C3.34308 20 1.99994 18.6569 1.99994 17V7C1.99994 5.34315 3.34308 4 4.99994 4H18.9999ZM19.9999 9.62479H13C12.4478 9.62479 11.8442 9.20507 11.652 8.68732L10.6542 6H4.99994C4.44765 6 3.99994 6.44772 3.99994 7V17C3.99994 17.5523 4.44765 18 4.99994 18H18.9999C19.5522 18 19.9999 17.5523 19.9999 17V9.62479Z"
                fill="#2D5BFF"></path>
            </svg>
          </>
        );
      default:
        <></>;
    }
  };
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
            <p className="w-48 text-xl whitespace-nowrap text-ellipsis overflow-hidden">{props.user?.username}</p>
            {props.data.page?.length > 0 ? (
              <p className="text text-gray-500">
                <span className="text-primary-500">/</span>
                {props.data?.page}
              </p>
            ) : (
              <p className="text text-gray-300">/suapagina</p>
            )}
          </div>
        </div>
        {props.data.description?.length > 0 ? (
          <div className="flex w-full p-4">
            <p
              className="text-sm text-gray-500 font-normal break-words max-w-full"
              style={{
                fontSize: "12px",
                lineHeight: "1rem",
                wordWrap: "break-word",
              }}>
              {props.data.description}
            </p>
          </div>
        ) : (
          <></>
        )}
        <SocialLinks data={props.data} />
        <div className="w-full flex flex-col justify-center items-center gap-4">
          {props.data.pixKey?.length > 20 ? (
            <>
              <div>
                <p>
                  Me apoie com a quantia que quiser. <br />{" "}
                </p>
                <p className="text-sm text-gray-500">
                  <span className="text-primary-500">Via pix</span>. Receberei
                  100% desse valor :)
                </p>
              </div>
              <Image
                src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${props.data.pixKey}`}
                alt="Pix qr code."
                width={250}
                height={250}
                priority
              />
            </>
          ) : (
            <>
              <Image
                src={"/waiting.gif"}
                className="rounded"
                alt="Gif de garoto azul."
                width={250}
                height={250}
                priority
              />
              <p className="text-sm text-gray-900 ml-4">
                Cole a{" "}
                <span className="text-primary-500">chave aleatória pix</span>{" "}
                para gerarmos seu qr-code.
              </p>
            </>
          )}
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
