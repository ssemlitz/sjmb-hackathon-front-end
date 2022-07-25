import styles from './Landing.module.css'
import CodeCompiler from '../../components/CodeCompiler/CodeCompiler'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1>hello, {user ? user.name : 'friend'}</h1>
      <CodeCompiler />
    </main>
  )
}

export default Landing
