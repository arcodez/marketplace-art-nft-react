export const Footer = () => (
  <footer
    className="lead-footer lead-main-footer lead-footer-dark"
    style={{ backgroundColor: "rgb(18, 17, 24)" }}
  >
    <div className="container" style={{ marginBottom: "-100px" }}>
      <div className="row">
        <div className="col-lg-5 col-md-6">
          <div className="footer-brand-wrapper">
            <img
              src="https://edeline.ru/nft-demo/assets/img/logo.png"
              alt="logo white"
              width={160}
            />
          </div>
          <nav className="lead-social-menu">
            <a href="#">
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
                className="feather feather-twitter"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </a>
            <a href="#">
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
                className="feather feather-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="#">
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
                className="feather feather-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x={2} y={9} width={4} height={12} />
                <circle cx={4} cy={4} r={2} />
              </svg>
            </a>
            <a href="#">
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
                className="feather feather-instagram"
              >
                <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </nav>
        </div>
        <div className="col-lg-5 col-md-6 ml-md-auto">
          <div className="row">
            <div className="col">
              <nav className="nav footer-nav nav-vertical my-4 my-md-0">
                <a href="/author.html" className="nav-link">
                  Profile
                </a>
                <a href="/login.html" className="nav-link">
                  Login
                </a>
                <a href="/create.html" className="nav-link">
                  Create
                </a>
                <a href="/wallet.html" className="nav-link">
                  Wallet
                </a>
              </nav>
            </div>
            <div className="col">
              <nav className="nav footer-nav nav-vertical my-4 my-md-0">
                <a href="/auctions.html" className="nav-link">
                  Auctions
                </a>
                <a href="/collections.html" className="nav-link">
                  Collections
                </a>
                <a href="/contacts.html" className="nav-link">
                  Contact
                </a>
                <a href="/item.html" className="nav-link">
                  Items
                </a>
              </nav>
            </div>
            <div className="col">
              <nav className="nav footer-nav nav-vertical my-4 my-md-0">
                <a href="#" className="nav-link">
                  Community
                </a>
                <a href="#" className="nav-link">
                  Help center
                </a>
                <a href="#" className="nav-link">
                  Support
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <p className="footer-text" style={{ textAlign: "center" }}>
        ©2022 KTX-NFT. All rights reserved.
      </p>
    </div>
  </footer>
);
