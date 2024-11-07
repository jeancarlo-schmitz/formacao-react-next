import useIndex from '../../data/hooks/partials/useIndex';
import CardProfessor from '../components/cards/cardProfessor/CardProfessor';
import Fetch from '../components/feedback/fetch/Fetch';
import styles from './ListaProfessores.module.css';

export default function ListaProfessores() {

    const { data } = useIndex();

    return (
        <Fetch data={data}>
            <Professores professores={data}/>
        </Fetch>
    )
}

function Professores({ professores = {} }) {
    return (
    <div className={styles.box_card}>
        {professores?.map((professor) => {
            return (
                <CardProfessor key={professor.id} professor={professor} />
            )
        })}
    </div>);
}