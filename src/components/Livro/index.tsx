import ReactModal from 'react-modal';
import './Livro.css'
import { useState } from 'react';
import Resultados from '../../interface/Resultados';
import Modal from '../Modal';


export default function Livro(props: Resultados) {

    const semImagem = require("../../assets/images/semImagem.jpg") as string;
    const [modalIsOpen, setIsOpen] = useState(false);

    function openCloseModal() {
        setIsOpen(!modalIsOpen)
      }

    return (
        <div key={props.id} className='livro' onClick={() => openCloseModal()}>
            {props.volumeInfo.imageLinks?.smallThumbnail
                ? <img src={props.volumeInfo.imageLinks.smallThumbnail} alt="Capa" className='capa' />
                : <img src={semImagem} alt="Sem Imagem" className='capa' />
            }

            <p className='titulo'>{props.volumeInfo.title}</p>
            {props.volumeInfo.authors !== undefined
                ? props.volumeInfo.authors.length > 2
                    ? (
                        <div>
                            <p>{props.volumeInfo.authors[0]}</p>
                            <p>{props.volumeInfo.authors[1]}</p>
                            <p>...</p>
                        </div>
                    )
                    : props.volumeInfo.authors.map((autor) => {
                        return (
                            <p className='autor'>{autor}</p>

                        )
                    })
                : 'Sem autor cadastrado'
            }

            <ReactModal
                isOpen={modalIsOpen}
                onRequestClose={openCloseModal}
                contentLabel="Info do Livro"
                closeTimeoutMS={500}
                className='modal'
            >
                <Modal {...props}/>
            </ReactModal>
        </div>
    )
}
