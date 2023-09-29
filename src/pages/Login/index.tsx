import { Link } from 'react-router-dom';
import styles from './Login.module.scss';

export default function Login() {
  const cadeado = require("../../assets/images/cadeado.png") as string;

  return (
    <div>
      <div className={styles.login}>
        <div className={styles.biblioteca}>
          <h1>Bem vindo(a)</h1>
          <h2>à Biblioteca Virtual.</h2>
        </div>
        <form className={styles.login__form}>
          <img
            src={cadeado}
            alt='cadeado'
            className={styles.cadeado}
          />
          <div className={styles.login__item}>
            <label className={styles.login__label}>
              Login
            </label>
            <input
              type="text"
              required
              value='admin'
              className={styles.login__input}
            />
          </div>
          <div className={styles.login__item}>
            <label className={styles.login__label}>
              Senha
            </label>
            <input
              type="password"
              required
              value='admin'
              className={styles.login__input}
            />
          </div>
          <button
            type='submit'
            className={styles.button}
            onClick={(e) => e.preventDefault()}
          >
            <Link
              className={styles.button__text}
              to='/home'
            >
              Entrar
            </Link>
          </button>
        </form>
      </div>
      <div className={styles.background}>
      </div>
    </div>

  );
}

