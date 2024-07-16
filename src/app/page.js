"use client"
import React,{useState} from "react";

import styles from "./page.module.css";

import JogosExclusivos from "@/app/Componentes/ColecaoDadosJogos/colecaoDeDadosJogos.js";

import Header from "./Componentes/Header/header";
import ItemJogo from "@/app/Componentes/ItemJogo/ItemJogo";
import jogosExclusivos from "@/app/Componentes/ColecaoDadosJogos/colecaoDeDadosJogos.js";

export default function Home(){
  
const[listaJogo, setListaJogo] = useState(JogosExclusivos);
const[textoBuscar,setTextoBuscar] = useState("");


 const FiltrarPlataforma = (plataforma)=>{
  setTextoBuscar("")
  return setListaJogo(jogosExclusivos.filter((jogo)=> jogo.plataforma === plataforma ))
    
 }
 const LimparPesquisa= () => {
  setTextoBuscar("") 
  return setListaJogo(jogosExclusivos)
   
 }
 const PesquisarJogo = (textoDigitado) =>{  
  setTextoBuscar(textoDigitado)
  setListaJogo(listaJogo.filter((jogo)=>{return jogo.nome.toLocaleLowerCase().includes(textoDigitado.toLocaleLowerCase()) || jogo.plataforma.toLocaleLowerCase().includes(textoDigitado.toLocaleLowerCase()) }))
 }
  return( 
    <main className={styles.main}>
      <Header FiltrarJogoNitendo={()=>FiltrarPlataforma("nintendo")} FiltrarJogoXbox={()=>FiltrarPlataforma("xbox")} FiltrarJogoPlaystation={()=>FiltrarPlataforma("playstation")} btnLimparPesquisa={()=>LimparPesquisa()} value={textoBuscar} FuncaoPesquisar={(event)=>PesquisarJogo(event.target.value)} />
      <div><h1>Jogos exclusivos</h1></div>
      <div className={styles.containerCard}>
      {listaJogo.map((jogo) => (<ItemJogo key={jogo.id} nome={jogo.nome} plataforma={jogo.plataforma}/>))}
      </div>
    </main>
  );

}
