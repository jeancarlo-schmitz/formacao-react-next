import { FormatterCurrency } from '../../../../data/services/FormatterCurrency';
import styles from './CardProfessor.module.css';

export default function CardProfessor({professor = {}}){
    return (
        <div key={professor.id} className={styles.card}>
            <img className={styles.image_card} src={professor.foto_perfil ?? '/person.png'} alt={professor.nome} />
            <div className={styles.conteudo_card}>
                <div>
                    <h3 className={styles.title}>{professor.nome}</h3>
                    <span> {FormatterCurrency.format(professor.valor_hora)}</span>
                    <p className={styles.descricao}>
                        {professor.descricao}
                    </p>

                </div>
                <button className={styles.button}>Marcar aula com {professor.nome}</button>
            </div>
        </div>
    )
}