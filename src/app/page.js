import React from "react";
import styles from "./page.module.css";
import ItemJogo from "@/app/Componentes/ItemJogo/ItemJogo";
import JogosExclusivos from "@/app/Componentes/ColecaoDadosJogos/colecaoDeDadosJogos.js";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.containerCard}>
      { JogosExclusivos.map((jogo) => (
         <ItemJogo key={jogo.id} nome={jogo.nome} plataforma={jogo.plataforma}/> ))}
      </div>
    </main>
  );
}
