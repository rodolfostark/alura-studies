import { useEffect, useState } from "react";
import Button from "../Button";
import Watch from "./Watch";
import { ITarefa } from "../../types/tarefa";
import { TempoParaSegundos } from "../../common/utils/time";

import style from "./stopwatch.module.scss";

interface Props {
    selecionado: ITarefa | undefined;
}

export default function Stopwatch({ selecionado }: Props) {
    const [ tempo, setTempo ] = useState<number>();
    useEffect(() => {
        if(selecionado?.tempo) {
            setTempo(TempoParaSegundos(selecionado.tempo));
        }
    }, [selecionado]);
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Watch tempo={tempo}/>
            </div>
            <Button>Começar</Button>
        </div>
    );
}