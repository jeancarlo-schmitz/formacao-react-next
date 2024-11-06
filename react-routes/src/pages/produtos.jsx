import { useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";

export default function Produtos(){
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if(location.pathname.includes(2)){
            navigate('/produtos/1')//aqui dá para implementar para o scrol voltar para o inicio, aplicar transição, entre outros
            navigate(-1)//para implementar um voltar trilha de migalhas
        }
    }, [location, navigate])

    return (
        <div>
            <h1>Produtos</h1>
            <ul>
                <li>
                    <Link to='1'>Produto 1</Link>
                </li>
                <li>
                    <Link to='2'>Produto 2</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    )
}

export function Produto(){
    const params = useParams();

    return (
        <div>
            <h3>Produto - {params.id}</h3>
        </div>
    )
}