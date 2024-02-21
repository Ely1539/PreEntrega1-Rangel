import { Link } from 'react-router-dom'
const Categories = () => {
    return (
        <>
            <li>
                <Link to={'/'}>
                    <button className="btn">
                        home
                    </button>
                </Link>
            </li>
            <li >
                <Link to={'/category/interior'}>
                    <button className="btn">
                        Productos De Interior
                    </button>
                </Link>
            </li>
            <li >
                <Link to={'/category/exterior'}>
                    <button className="btn">
                        Productos De Exterior
                    </button>
                </Link>
            </li>
            <li >
                <Link to={'/category/insumos'}>
                    <button className="btn">
                        Insumos Para Detailing
                    </button>
                </Link>
            </li>
            <li>
                <Link to={'/category/kit'}>
                    <button className="btn">
                        Kits De lavado
                    </button>
                </Link>
            </li>
        </>
    )
}

export default Categories