import Image from "next/image";

import style from "@/app/Componentes/Header/style.module.css";

import LupaPesquisar from "@/../public/lupa.png";

export default function Header(props){
    return( 
        <header className={style.Header }>
            <div className={style.containerBtn}>
                <button onClick={props.FiltrarJogoNitendo} className={style.BtnNitendo}>Nitendo</button>
                <button onClick={props.FiltrarJogoXbox} className={style.BtnXbox}>Xbox</button>
                <button onClick={props.FiltrarJogoPlaystation} className={style.BtnPlaystation}>Playstation</button>
            </div>
            <div className={style.containerPesquisar}>
                <Image className={style.ImagemLupa} src={LupaPesquisar} width={50} height={50} alt="lupa de pesquisa"/>
                <input  type="text" value={props.value} onChange={props.FuncaoPesquisar} placeholder="Pesquise um jogo ou plataforma" />
            </div>
            <div className={style.containerLimparPesquisa}>
                <button className={style.LimparPesquisa} onClick={props.btnLimparPesquisa}>Limpar Pesquisa</button>
            </div>
        </header>
    )
}