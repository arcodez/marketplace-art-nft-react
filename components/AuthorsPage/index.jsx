import Head from "next/head";
import { author } from "../AuthorPage";
import { Layout } from "../Layout";

export const AuthorsPage = () => {
  return (
    <Layout>
      <Head>
        <title>Authors</title>
      </Head>
      <div className="pages-header" />
      <div className="pages-title">
        <h2>Authors</h2>
        <br />
        <b>
          <a href="https://edeline.ru/nft-demo/">Home</a>
          <i className="fas fa-chevron-right" aria-hidden="true" /> Authors
        </b>
      </div>
      <div className="container">
        <div className="row">
          <div className="sec-t">
            <b>- Authors</b>
            <h2>Our Creators</h2>
          </div>
          <div
            className="sec-1"
            style={{ marginTop: "-20px", marginBottom: 100 }}
          >
            <div className="card col-sm-4">
              <img
                className="card-img-top"
                src="https://edeline.ru/nft-demo/assets/img/cards/auction_1.jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <div className="avatar-a">
                  <img src={author.profile_img} alt="Card image cap" />
                </div>
                <div className="a-det">
                  <a href="https://edeline.ru/nft-demo/author.html">
                    <h2>John Doe</h2>
                  </a>
                  <a href="#" className="button-vl">
                    Follow{" "}
                  </a>
                </div>
                <br />
                <br />
              </div>
            </div>
            <div className="card col-sm-4">
              <img
                className="card-img-top"
                src="https://edeline.ru/nft-demo/assets/img/cards/auction_2.jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <div className="avatar-a">
                  <img
                    src="https://edeline.ru/nft-demo/assets/img/users/avatar_2.jpg"
                    alt="Card image cap"
                  />
                </div>
                <div className="a-det">
                  <a href="https://edeline.ru/nft-demo/author.html">
                    <h2>Melisa</h2>
                  </a>
                  <a href="#" className="button-vl">
                    Follow{" "}
                  </a>
                </div>
                <br />
                <br />
              </div>
            </div>
            <div className="card col-sm-4">
              <img
                className="card-img-top"
                src="https://edeline.ru/nft-demo/assets/img/cards/auction_3.jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <div className="avatar-a">
                  <img
                    src="https://edeline.ru/nft-demo/assets/img/users/avatar_3.jpg"
                    alt="Card image cap"
                  />
                </div>
                <div className="a-det">
                  <a href="https://edeline.ru/nft-demo/author.html">
                    <h2>William</h2>
                  </a>
                  <a href="#" className="button-vl">
                    Follow{" "}
                  </a>
                </div>
                <br />
                <br />
              </div>
            </div>
            <div className="card col-sm-4">
              <img
                className="card-img-top"
                src="https://edeline.ru/nft-demo/assets/img/cards/auction_4.jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <div className="avatar-a">
                  <img
                    src="https://edeline.ru/nft-demo/assets/img/users/avatar_4.jpg"
                    alt="Card image cap"
                  />
                </div>
                <div className="a-det">
                  <a href="https://edeline.ru/nft-demo/author.html">
                    <h2>Tommy</h2>
                  </a>
                  <a href="#" className="button-vl">
                    Follow{" "}
                  </a>
                </div>
                <br />
                <br />
              </div>
            </div>
            <div className="card col-sm-4">
              <img
                className="card-img-top"
                src="https://edeline.ru/nft-demo/assets/img/cards/5.jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <div className="avatar-a">
                  <img
                    src="https://edeline.ru/nft-demo/assets/img/users/avatar_5.jpg"
                    alt="Card image cap"
                  />
                </div>
                <div className="a-det">
                  <a href="https://edeline.ru/nft-demo/author.html">
                    <h2>Lisi</h2>
                  </a>
                  <a href="#" className="button-vl">
                    Follow{" "}
                  </a>
                </div>
                <br />
                <br />
              </div>
            </div>
            <div className="card col-sm-4">
              <img
                className="card-img-top"
                src="https://edeline.ru/nft-demo/assets/img/cards/6.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <div className="avatar-a">
                  <img
                    src="https://edeline.ru/nft-demo/assets/img/users/avatar_6.jpg"
                    alt="Card image cap"
                  />
                </div>
                <div className="a-det">
                  <a href="https://edeline.ru/nft-demo/author.html">
                    <h2>Marine</h2>
                  </a>
                  <a href="#" className="button-vl">
                    Follow{" "}
                  </a>
                </div>
                <br />
                <br />
              </div>
            </div>
            <div className="card col-sm-4">
              <img
                className="card-img-top"
                src="https://edeline.ru/nft-demo/assets/img/cards/7.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <div className="avatar-a">
                  <img src={author.profile_img} alt="Card image cap" />
                </div>
                <div className="a-det">
                  <a href="https://edeline.ru/nft-demo/author.html">
                    <h2>Jeck</h2>
                  </a>
                  <a href="#" className="button-vl">
                    Follow{" "}
                  </a>
                </div>
                <br />
                <br />
              </div>
            </div>
            <div className="card col-sm-4">
              <img
                className="card-img-top"
                src="https://edeline.ru/nft-demo/assets/img/cards/8.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <div className="avatar-a">
                  <img
                    src="https://edeline.ru/nft-demo/assets/img/users/avatar_2.jpg"
                    alt="Card image cap"
                  />
                </div>
                <div className="a-det">
                  <a href="https://edeline.ru/nft-demo/author.html">
                    <h2>Rosa</h2>
                  </a>
                  <a href="#" className="button-vl">
                    Follow{" "}
                  </a>
                </div>
                <br />
                <br />
              </div>
            </div>
            <div style={{ display: "block", textAlign: "center" }}>
              <br />
              <br />
              <a href="#" className="button-vl">
                Load More
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
