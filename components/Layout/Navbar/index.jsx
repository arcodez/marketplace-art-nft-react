export const Navbar = () => (
  <>
    <header className="lead-demo menu-fix" style={{ zIndex: 9999999999 }}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="https://edeline.ru/nft-demo/">
            <img
              src="https://edeline.ru/nft-demo/assets/img/logo.png"
              alt="logo"
              width={70}
            />
          </a>
          <div className="ml-auto d-lg-none">
            <a
              href="https://edeline.ru/nft-demo/login.html"
              className="user-mob"
            >
              <i className="fas fa-user" aria-hidden="true" />
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#leadUIDemoNav-2"
            aria-controls="leadUIDemoNav-2"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onclick="toggleNavbar()"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line x1={3} y1={12} x2={21} y2={12} />
              <line x1={3} y1={6} x2={21} y2={6} />
              <line x1={3} y1={18} x2={21} y2={18} />
            </svg>
          </button>
          <div
            className="collapse navbar-collapse mostrar"
            id="leadUIDemoNav-2"
          >
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/index.html">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/explore.html">
                  Explore
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/auctions.html">
                  Auctions
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/collections.html">
                  Collections
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/author.html">
                  Author
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/authors.html">
                  Authors
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/create.html">
                  Craete
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contacts.html">
                  Contacts
                </a>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item d-none d-lg-block">
                <a className="nav-link" href="/login.html">
                  <i className="fas fa-user" aria-hidden="true" /> Login
                </a>
              </li>
              <li className="nav-item">
                <a href="/wallet.html" className="btn btn-rounded btn-info">
                  <i className="fas fa-wallet" aria-hidden="true" /> Wallet
                  Connect
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </>
);

