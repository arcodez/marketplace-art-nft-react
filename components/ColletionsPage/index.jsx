import Head from "next/head";
import Link from "next/link";
import React from "react";
import { Layout } from "../Layout";

const collectionsCards = [
  {
    imgUrl: "https://edeline.ru/nft-demo/assets/img/coll/1.png",
    title: "Digital Arts",
    price: 121.2,
    coin: "ERC-498",
  },
  {
    imgUrl: "https://edeline.ru/nft-demo/assets/img/coll/2.jpg",
    title: "Sports",
    price: 211.2,
    coin: "ERC-278",
  },
  {
    imgUrl: "https://edeline.ru/nft-demo/assets/img/coll/3.jpg",
    title: "Photography",
    price: 134.2,
    coin: "ERC-745",
  },
  {
    imgUrl: "https://edeline.ru/nft-demo/assets/img/coll/4.jpg",
    title: "Tranding Cards",
    price: 198.2,
    coin: "ERC-654",
  },
  {
    imgUrl: "https://edeline.ru/nft-demo/assets/img/coll/5.jpg",
    title: "Virtual World",
    price: 264.2,
    coin: "ERC-453",
  },
  {
    imgUrl: "https://edeline.ru/nft-demo/assets/img/coll/6.jpg",
    title: "Collectibles",
    price: 124.2,
    coin: "ERC-234",
  },
  {
    imgUrl: "https://edeline.ru/nft-demo/assets/img/coll/7.jpg",
    title: "UX/UI",
    price: 134.2,
    coin: "ERC-457",
  },
  {
    imgUrl: "https://edeline.ru/nft-demo/assets/img/coll/8.jpg",
    title: "Flowers",
    price: 343.2,
    coin: "ERC-876",
  },
  ,
];

const CardItem = ({
  imgUrl = "https://edeline.ru/nft-demo/assets/img/coll/1.png",
  title = "Digital Arts",
  price = 121.2,
  coin = "ERC-498",
}) => {
  return (
    <div className="card col-sm-4">
      <div className="card-body">
        <img className="card-img-top vl-img" src={imgUrl} alt={title} />

        <Link href="/item">
          <a>
            <h5 className="card-title">{title}</h5>
          </a>
        </Link>
        <p className="b-t-l">{coin}</p>
        <p className="b-t-r">{price} k</p>
      </div>
    </div>
  );
};

export const CollectionsPage = () => {
  return (
    <Layout>
      <Head>
        <title>Collections Art</title>
      </Head>
      <div className="pages-header" />
      <div className="pages-title">
        <h2>Collections</h2>
        <br />
        <b>
          <a href="/">Home</a>
          <i className="fas fa-chevron-right" aria-hidden="true" /> Collections
        </b>
      </div>
      <div className="container">
        <div className="row">
          <div className="sec-t">
            <b>Most Popular</b>
            <h2>Popular Collections</h2>
          </div>
        </div>
      </div>

      <div className="sec-1">
        {collectionsCards.map((item, index) => (
          <CardItem key={index} {...item} />
        ))}
      </div>

      <div className="sec-1" style={{ marginTop: "-50px", marginBottom: 20 }}>
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
