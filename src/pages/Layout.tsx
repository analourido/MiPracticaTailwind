import { Link, Outlet } from "react-router-dom"

function MainMenu() {
    return <nav>
        <ul className="flex flex-row gap-4">
            <li>
                <Link to="/E1">Ejercicio 1</Link>
            </li>
            <li>
                <Link to="/E2">Ejercicio 2</Link>
            </li>
        </ul>

    </nav>
}

const Footer = () => <footer> Página creada por Ana </footer>


function Layout() {
    return (
        < main className="flex flex-col ">
            <img src="" alt="" />
            <MainMenu />
            <Outlet />
            <Footer />
        </main >
    )

}

export default Layout