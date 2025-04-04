import { Link, Outlet } from 'react-router'

const Layout = () => {
    return (
        <div>
            {/* <nav>
                <ul>
                    <li>
                        <Link to="/admin">Home (react router SPA navigation)</Link>
                    </li>
                    <li>
                        <Link to="/admin/products">Products</Link>
                    </li>
                    <li>
                        <Link to="/admin/config">Config</Link>
                    </li>
                </ul>
            </nav>
            <hr /> */}
            <Outlet />
        </div>
    );
}

export default Layout