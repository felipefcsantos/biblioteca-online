import styles from './Modal.module.scss'
import Resultados from '../../interface/Resultados'

export default function Modal(props: Resultados) {
    const semImagem = require("../../assets/images/semImagem.jpg") as string;

    return (
        <div>
            <div className={styles.titulo}>
                <h1>{props.volumeInfo.title}</h1>
                <h2>{props.volumeInfo.subtitle}</h2>
            </div>

            <div className={styles.info__container}>
                <div>
                    {props.volumeInfo.imageLinks?.smallThumbnail
                        ? <img src={props.volumeInfo.imageLinks.smallThumbnail} alt="Capa" className={styles.capa} />
                        : <img src={semImagem} alt="Sem Imagem" className={styles.capa} />
                    }
                </div>
                <div>
                    <p><strong>Titulo:</strong> {props.volumeInfo.title}</p>
                    <p><strong>Subtitulo:</strong> {props.volumeInfo.subtitle}</p>
                    <p><strong>Autores(as):</strong>
                        {props.volumeInfo.authors !== undefined
                            ? props.volumeInfo.authors.map((autor) => (                               
                                    " "+ autor + "."                      
                            ))
                            : ' Sem autor cadastrado'
                        }
                    </p>
                    <p><strong>Publicado por:</strong> {props.volumeInfo.publisher}</p>
                    <p><strong>Publicado em:</strong> {props.volumeInfo.publishedDate}</p>
                    <p><strong>Categorias:</strong> {props.volumeInfo.categories}</p>
                    <p><strong>Idioma:</strong> {props.volumeInfo.language}</p>
                    <p><strong>Qtd de páginas:</strong> {props.volumeInfo.pageCount} páginas</p>
                    <p><strong>Descrição:</strong> {props.volumeInfo.description}</p>
                    <p><strong>Ver mais:</strong> <a href={props.volumeInfo.previewLink} target='_blank' rel='noopener noreferrer'>Clique aqui</a></p>
                </div>
            </div>
        </div>
    )
}
