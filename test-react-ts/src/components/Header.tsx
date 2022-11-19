import {FC} from "react";

//Requerimos crear un interface para recibir 
interface ObjetoProps {
    titulo: string;
    subtitulo: string;
}

const Header: FC<ObjetoProps> = (props) : JSX.Element => {
    const {titulo, subtitulo} = props;

    return (
        <div>
            <h1>{titulo}</h1>
            <h2>{subtitulo}</h2>
        </div>
    )
}

export default Header;