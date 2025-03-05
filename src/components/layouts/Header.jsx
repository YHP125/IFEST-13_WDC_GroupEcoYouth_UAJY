function Header() {
    return (
        <header className="header fixed-top text-bg-dark d-flex flex-wrap justify-content-between py-2 px-5 mb-4 shadow-sm">
            <div id="Logo"></div>
            <ul className="nav nav-pills d-flex align-items-center">
                <li className="nav-item">Product</li>
                <li className="nav-item">News</li>
                <li className="nav-item">Join us</li>
                <li className="nav-item">Login</li>
            </ul>
        </header>
    );
}

export default Header;