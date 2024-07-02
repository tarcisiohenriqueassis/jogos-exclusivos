import Image from "next/image";

import style from "@/app/Componentes/ItemJogo/style.module.css";

import Playstation from "@/../public/playstation.svg";
import Xbox from "@/../public/xbox.png";
import Nitendo from "@/../public/nitendo.png";

export default function ItemJogo({nome, plataforma}){
    return(
        <section className={style.card}>
            <div className={style.containerImagem}>
                <Image className={style.imagem} src={plataforma === "playstation" ?Playstation : plataforma === "xbox" ?Xbox :Nitendo} alt="Logo"/>
            </div>
            <p>{nome}</p>
        </section>
    )
}