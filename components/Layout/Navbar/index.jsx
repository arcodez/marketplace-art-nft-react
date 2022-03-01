import Link from "next/link";

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
            <Link href="/login">
              <a className="user-mob">
                <i className="fas fa-user" aria-hidden="true" />
              </a>
            </Link>
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
                <Link href="/">
                  <a className="nav-link">Home</a>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/explore">
                  <a className="nav-link">Explore</a>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/auctions">
                  <a className="nav-link">Auctions</a>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/collections">
                  <a className="nav-link">Collections</a>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/author">
                  <a className="nav-link">Author</a>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/authors">
                  <a className="nav-link">Authors</a>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/create">
                  <a className="nav-link">Craete</a>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/contacts">
                  <a className="nav-link">Contacts</a>
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav">
              <li className="nav-item d-none d-lg-block">
                <Link href="/login">
                  <a className="nav-link">
                    <i className="fas fa-user" aria-hidden="true" /> Login
                  </a>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/wallet">
                  <a className="btn btn-rounded btn-info">
                    <i className="fas fa-wallet" aria-hidden="true" /> Wallet
                    Connect
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </>
);
