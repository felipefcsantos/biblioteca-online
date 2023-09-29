import styles from './Home.module.scss'
import Header from '../../components/Header'
import { useEffect, useState } from 'react'
import api from '../../api/api'
import Resultados from '../../interface/Resultados'
import Livro from '../../components/Livro'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Loading from '../../components/Loading'

export default function Home() {
  const [data, setData] = useState<Resultados[]>([])
  const [pesquisa, setPesquisa] = useState('')
  const [paginacao, setPaginacao] = useState(0)
  const [primeiraPagina, setPrimeiraPagina] = useState(true)
  const [loading, setLoading] = useState(true)



  useEffect(() => {
    setLoading(true)
    api
      .get(`${pesquisa.replace(' ', '+')}&startIndex=${paginacao}&maxResults=10&key=AIzaSyBAcbJ-gN8oo8LOn1kCtkqwXHOIG3xaFzE`)
      .then((response) => setData(response.data.items))
      .then(() => setLoading(false))
      .catch((err) => {
        alert("API não carregada com sucesso. Tente de novo mais tarde. " + err)
      })

  }, [pesquisa, paginacao])


  function verificarPaginacao(numero: number) {
    numero < 0 ? setPaginacao(0) : setPaginacao(numero)
  }

  return (
      <main className={styles.main}>
        <Header />
        <div className={styles.pesquisa}>
          <h1>Digite o livro que deseja pesquisar:</h1>
          <div className={styles.campoPesquisa}>
            <input className={styles.input} type='text' value={pesquisa} onChange={(event) => {
              setPesquisa(event.target.value)
              setPrimeiraPagina(false)
              setPaginacao(0)
            }} />
            <button className={styles.button} onClick={() => {
              setPesquisa('')
              setPrimeiraPagina(true)
              setPaginacao(0)
            }}>
              Limpar
            </button>
          </div>
        </div>

        {loading
          ? <div className={styles.load}>
            <Loading />
          </div>
          : <div className={styles.resultados__container}>
            <h2 className={styles.subtitulo}>Clique no livro para ver mais informações:</h2>
            <div className={styles.resultados}>

              {data.map((livro) => {
                return (
                  <Livro
                    {...livro}
                  />
                )

              })}

            </div>
            {!primeiraPagina && <div className={styles.paginacao}>
              <ArrowBackIosIcon
                sx={{ margin: 2, cursor: 'pointer' }}
                onClick={() => verificarPaginacao(paginacao - 11)}
              />
              {(paginacao / 11) + 1}
              <ArrowForwardIosIcon
                sx={{ margin: 3, cursor: 'pointer' }}
                onClick={() => verificarPaginacao(paginacao + 11)}
              />
            </div>
            }
          </div>}
      </main>
  )
}
