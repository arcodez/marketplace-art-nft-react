import Head from "next/head";
import React from "react";
import { Layout } from "../Layout";

export const author = {
  nombre: "Abel Rodriguez",
  profile_img: "https://avatars.githubusercontent.com/u/69878476?v=4",
};

export const AuthorPage = () => {
  return (
    <Layout>
      <Head>
        <title>Author | Arcodez </title>
      </Head>
      <div>
        <div className="pages-header" />
        <div className="pages-title">
          <h2>{author.nombre}</h2>
          <br />
          <b>
            <a href="https://edeline.ru/nft-demo/author.html">Authors</a>
            <i className="fas fa-chevron-right" aria-hidden="true" />{" "}
            {author.nombre}
          </b>
        </div>
        <div className="container">
          <br />
          <br />
          <br />
          <br />
          <div className="row profile">
            <div className="col-md-3">
              <div className="profile-sidebar" style={{ textAlign: "center" }}>
                {/* SIDEBAR USERPIC */}
                <div className="profile-userpic">
                  <img
                    src={author.profile_img}
                    className="img-responsive pavatar"
                    alt="user"
                  />
                </div>
                {/* END SIDEBAR USERPIC */}
                {/* SIDEBAR USER TITLE */}
                <div className="profile-usertitle">
                  <div className="profile-usertitle-name">{author.nombre}</div>
                  <div className="profile-usertitle-job">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </div>
                </div>
                <input
                  type="text"
                  name="id"
                  className="a-input"
                  placeholder="hdsuaVYSCHnjknlahsucmau89yca7cb"
                />
                <br />
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
                      style={{ color: "#ccc" }}
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
                      style={{ color: "#ccc" }}
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
                      style={{ color: "#ccc" }}
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
                      style={{ color: "#ccc" }}
                    >
                      <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </a>
                </nav>
                <br />
                <br />
                <a href="#" className="button-vl">
                  Follow{" "}
                </a>
              </div>
            </div>
            <div className="col-md-9">
              <div className="profile-content">
                <div
                  className="container rty"
                  style={{ marginBottom: "100px" }}
                >
                  <div className="sec-1">
                    <div className="card col-sm-4">
                      <img
                        className="card-img-top"
                        src="https://edeline.ru/nft-demo/assets/img/cards/auction_1.jpg"
                        alt="Card image cap"
                      />
                      <div className="card-body">
                        <a href="/item">
                          <h5 className="card-title">Virtual Worlds</h5>
                        </a>
                        <div className="avatar">
                          <img
                            src={author.profile_img}
                            alt="Card image cap"
                          />
                        </div>
                        <a
                          href="https://edeline.ru/nft-demo/author.html"
                          className="avatar-text"
                        >
                          @Marcus
                        </a>
                        <br />
                        <p className="b-t-l">2.3 BNB</p>
                        <p className="b-t-r">1 of 1</p>
                      </div>
                    </div>
                    <div className="card col-sm-4">
                      <img
                        className="card-img-top"
                        src="https://edeline.ru/nft-demo/assets/img/cards/auction_2.jpg"
                        alt="Card image cap"
                      />
                      <div className="card-body">
                        <a href="/item">
                          <h5 className="card-title">Collectibles</h5>
                        </a>
                        <div className="avatar">
                          <img
                            src={author.profile_img}
                            alt="Card image cap"
                          />
                        </div>
                        <a
                          href="https://edeline.ru/nft-demo/author.html"
                          className="avatar-text"
                        >
                          @Marcus
                        </a>
                        <br />
                        <p className="b-t-l">2.3 BNB</p>
                        <p className="b-t-r">1 of 1</p>
                      </div>
                    </div>
                    <div className="card col-sm-4">
                      <img
                        className="card-img-top"
                        src="https://edeline.ru/nft-demo/assets/img/cards/auction_3.jpg"
                        alt="Card image cap"
                      />
                      <div className="card-body">
                        <a href="/item">
                          <h5 className="card-title">Arts</h5>
                        </a>
                        <div className="avatar">
                          <img
                            src={author.profile_img}
                            alt="Card image cap"
                          />
                        </div>
                        <a
                          href="https://edeline.ru/nft-demo/author.html"
                          className="avatar-text"
                        >
                          @Marcus
                        </a>
                        <br />
                        <p className="b-t-l">2.3 BNB</p>
                        <p className="b-t-r">1 of 1</p>
                      </div>
                    </div>
                    <div className="card col-sm-4">
                      <img
                        className="card-img-top"
                        src="https://edeline.ru/nft-demo/assets/img/cards/auction_4.jpg"
                        alt="Card image cap"
                      />
                      <div className="card-body">
                        <a href="/item">
                          <h5 className="card-title">Robotix</h5>
                        </a>
                        <div className="avatar">
                          <img
                            src={author.profile_img}
                            alt="Card image cap"
                          />
                        </div>
                        <a
                          href="https://edeline.ru/nft-demo/author.html"
                          className="avatar-text"
                        >
                          @Marcus
                        </a>
                        <br />
                        <p className="b-t-l">2.3 BNB</p>
                        <p className="b-t-r">1 of 1</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="container" style={{ marginTop: "-150px" }}>
          <div className="row">
            <div className="sec-t">
              <b>- Most Popular</b>
              <h2>Popular Collections</h2>
            </div>
          </div>
        </div>
        <div className="sec-1">
          <div className="card col-sm-4">
            <div className="card-body">
              <img
                className="card-img-top vl-img"
                src="https://edeline.ru/nft-demo/assets/img/coll/1.png"
                alt="Card image cap"
              />
              <a href="/item">
                <h5 className="card-title">Digital Arts</h5>
              </a>
              <p className="b-t-l">ERC-498</p>
              <p className="b-t-r">121.2 k</p>
            </div>
          </div>
          <div className="card col-sm-4">
            <div className="card-body">
              <img
                className="card-img-top vl-img"
                src="https://edeline.ru/nft-demo/assets/img/coll/2.jpg"
                alt="Card image cap"
              />
              <a href="/item">
                <h5 className="card-title">Sports</h5>
              </a>
              <p className="b-t-l">ERC-278</p>
              <p className="b-t-r">211.2 k</p>
            </div>
          </div>
          <div className="card col-sm-4">
            <div className="card-body">
              <img
                className="card-img-top vl-img"
                src="https://edeline.ru/nft-demo/assets/img/coll/3.jpg"
                alt="Card image cap"
              />
              <a href="/item">
                <h5 className="card-title">Photography</h5>
              </a>
              <p className="b-t-l">ERC-745</p>
              <p className="b-t-r">134.2 k</p>
            </div>
          </div>
          <div className="card col-sm-4">
            <div className="card-body">
              <img
                className="card-img-top vl-img"
                src="https://edeline.ru/nft-demo/assets/img/coll/4.jpg"
                alt="Card image cap"
              />
              <a href="/item">
                <h5 className="card-title">Tranding Cards</h5>
              </a>
              <p className="b-t-l">ERC-654</p>
              <p className="b-t-r">198.2 k</p>
            </div>
          </div>
        </div>
        <div
          className="sec-1"
          style={{ marginTop: "-50px", marginBottom: "50px" }}
        >
          <div className="card col-sm-4">
            <div className="card-body">
              <img
                className="card-img-top vl-img"
                src="https://edeline.ru/nft-demo/assets/img/coll/5.jpg"
                alt="Card image cap"
              />
              <a href="/item">
                <h5 className="card-title">Virtual World</h5>
              </a>
              <p className="b-t-l">ERC-453</p>
              <p className="b-t-r">264.2 k</p>
            </div>
          </div>
          <div className="card col-sm-4">
            <div className="card-body">
              <img
                className="card-img-top vl-img"
                src="https://edeline.ru/nft-demo/assets/img/coll/6.jpg"
                alt="Card image cap"
              />
              <a href="/item">
                <h5 className="card-title">Collectibles</h5>
              </a>
              <p className="b-t-l">ERC-234</p>
              <p className="b-t-r">124.2 k</p>
            </div>
          </div>
          <div className="card col-sm-4">
            <div className="card-body">
              <img
                className="card-img-top vl-img"
                src="https://edeline.ru/nft-demo/assets/img/coll/7.jpg"
                alt="Card image cap"
              />
              <a href="/item">
                <h5 className="card-title">UX/UI</h5>
              </a>
              <p className="b-t-l">ERC-457</p>
              <p className="b-t-r">134.2 k</p>
            </div>
          </div>
          <div className="card col-sm-4">
            <div className="card-body">
              <img
                className="card-img-top vl-img"
                src="https://edeline.ru/nft-demo/assets/img/coll/8.jpg"
                alt="Card image cap"
              />
              <a href="/item">
                <h5 className="card-title">Flowers</h5>
              </a>
              <p className="b-t-l">ERC-876</p>
              <p className="b-t-r">343.2 k</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
