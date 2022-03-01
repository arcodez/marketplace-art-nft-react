import React from "react";
import { Layout } from "../Layout";

export const CollectionsPage = () => {
  return (
    <Layout>
      <div className="pages-header" />
      <div className="pages-title">
        <h2>Collections</h2>
        <br />
        <b>
          <a href="https://edeline.ru/nft-demo/">Home</a>
          <i className="fas fa-chevron-right" aria-hidden="true" /> Collections
        </b>
      </div>
      <div className="container">
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
            <a href="https://edeline.ru/nft-demo/item.html">
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
            <a href="https://edeline.ru/nft-demo/item.html">
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
            <a href="https://edeline.ru/nft-demo/item.html">
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
            <a href="https://edeline.ru/nft-demo/item.html">
              <h5 className="card-title">Tranding Cards</h5>
            </a>
            <p className="b-t-l">ERC-654</p>
            <p className="b-t-r">198.2 k</p>
          </div>
        </div>
      </div>
      <div className="sec-1" style={{ marginTop: "-50px", marginBottom: 20 }}>
        <div className="card col-sm-4">
          <div className="card-body">
            <img
              className="card-img-top vl-img"
              src="https://edeline.ru/nft-demo/assets/img/coll/5.jpg"
              alt="Card image cap"
            />
            <a href="https://edeline.ru/nft-demo/item.html">
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
            <a href="https://edeline.ru/nft-demo/item.html">
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
            <a href="https://edeline.ru/nft-demo/item.html">
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
            <a href="https://edeline.ru/nft-demo/item.html">
              <h5 className="card-title">Flowers</h5>
            </a>
            <p className="b-t-l">ERC-876</p>
            <p className="b-t-r">343.2 k</p>
          </div>
        </div>
      </div>
      <div style={{ display: "block", textAlign: "center", marginBottom: 100 }}>
        <br />
        <br />
        <a href="#" className="button-vl">
          Load More
        </a>
      </div>
    </Layout>
  );
};

