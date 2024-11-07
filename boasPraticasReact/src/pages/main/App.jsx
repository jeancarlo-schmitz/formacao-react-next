import styles from './App.module.css'
import ListaProfessores from '../../ui/partials/ListaProfessores';
import Header from '../../ui/components/surfaces/header/Header';
import Footer from '../../ui/components/surfaces/footer/Footer';
function App() {

  return (
    <div className={styles.mainContainer}>
      <Header />
      <main className={styles.container}>
        <h1>Encontre o professor perfeito</h1>
        <ListaProfessores />
      </main>
      <Footer />

    </div>
  );
}

export default App;