import Head from "next/head";
import Link from "next/link";
import React from "react";
import { Layout } from "../Layout";

const WalletPage = () => {
  return (
    <Layout>
      <Head>
        <title>Wallet Connect</title>
      </Head>
      <div className="pages-header" />
      <div className="pages-title">
        <h2>Wallet Connect</h2>
        <br />
        <b>
          <a href="/">Home</a>
          <i className="fas fa-chevron-right" aria-hidden="true" /> Wallet
          Connect
        </b>
      </div>
      <section className="wallet-connect-area" style={{ marginBottom: 100 }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-7">
              {/* Intro */}
              <div className="intro text-center vl-wallet">
                <span>Wallet Connect</span>
                <h3 className="mt-3 mb-0">Connect your Wallet</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laborum obcaecati dignissimos quae quo ad iste ipsum officiis
                  deleniti asperiores sit.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center items">
            <div className="col-12 col-md-6 col-lg-4 item">
              {/* Single Wallet */}
              <div className="card single-wallet">
                <a className="d-block text-center" href="/login">
                  <img
                    className="avatar-lg"
                    src="https://edeline.ru/nft-demo/assets/img/wallet/metamask.png"
                    alt=""
                  />
                  <h4 className="mb-0">MetaMask</h4>
                  <p>
                    A browser extension with great flexibility. The web's most
                    popular
                    <br />
                    wallet
                  </p>
                </a>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 item">
              {/* Single Wallet */}
              <div className="card single-wallet">
                <Link href="/login">
                  <a className="d-block text-center">
                    <img
                      className="avatar-lg"
                      src="https://edeline.ru/nft-demo/assets/img/wallet/authereum.png"
                      alt=""
                    />
                    <h4 className="mb-0">Authereum</h4>
                    <p>
                      A user-friendly wallet that allows you to sign up with
                      your phone number on any device
                    </p>
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 item">
              {/* Single Wallet */}
              <div className="card single-wallet">
                <Link href="/login">
                  <a className="d-block text-center">
                    <img
                      className="avatar-lg"
                      src="https://edeline.ru/nft-demo/assets/img/wallet/walletconnect.png"
                      alt=""
                    />
                    <h4 className="mb-0">WalletConnect</h4>
                    <p>
                      Pair with Trust, Argent, MetaMask &amp; more. Works from
                      any browser, without an extension
                    </p>
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 item">
              {/* Single Wallet */}
              <div className="card single-wallet">
                <Link href="/login">
                  <a className="d-block text-center">
                    <img
                      className="avatar-lg"
                      src="https://edeline.ru/nft-demo/assets/img/wallet/dapper.png"
                      alt=""
                    />
                    <h4 className="mb-0">Dapper</h4>
                    <p>
                      A security-focused cloud wallet with pin codes and
                      multi-factor authentication
                    </p>
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 item">
              {/* Single Wallet */}
              <div className="card single-wallet">
                <Link href="/login">
                  <a className="d-block text-center">
                    <img
                      className="avatar-lg"
                      src="https://edeline.ru/nft-demo/assets/img/wallet/kaikas.png"
                      alt=""
                    />
                    <h4 className="mb-0">Kaikas</h4>
                    <p>
                      A simple-to-use wallet that works on both mobile and
                      through a browser extension
                    </p>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        /*! CSS Used from: https://edeline.ru/nft-demo/css/style.css ; media=all */
        @media all {
          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }
          section {
            display: block;
          }
          h3,
          h4 {
            margin-top: 0;
            margin-bottom: 0.5rem;
          }
          p {
            margin-top: 0;
            margin-bottom: 1rem;
          }
          a {
            color: #007bff;
            text-decoration: none;
            background-color: transparent;
          }
          a:hover {
            color: #0056b3;
            text-decoration: underline;
          }
          img {
            vertical-align: middle;
            border-style: none;
          }
          h3,
          h4 {
            margin-bottom: 0.5rem;
            font-weight: 600;
            line-height: 1.5;
          }
          h3 {
            font-size: 1.75rem;
          }
          h4 {
            font-size: 1.5rem;
          }
          .container {
            width: 100%;
            padding-right: 15px;
            padding-left: 15px;
            margin-right: auto;
            margin-left: auto;
          }
          @media (min-width: 576px) {
            .container {
              max-width: 540px;
            }
          }
          @media (min-width: 768px) {
            .container {
              max-width: 720px;
            }
          }
          @media (min-width: 992px) {
            .container {
              max-width: 960px;
            }
          }
          @media (min-width: 1200px) {
            .container {
              max-width: 1140px;
            }
          }
          @media (min-width: 576px) {
            .container {
              max-width: 540px;
            }
          }
          @media (min-width: 768px) {
            .container {
              max-width: 720px;
            }
          }
          @media (min-width: 992px) {
            .container {
              max-width: 960px;
            }
          }
          @media (min-width: 1200px) {
            .container {
              max-width: 1140px;
            }
          }
          .row {
            display: flex;
            flex-wrap: wrap;
            margin-right: -15px;
            margin-left: -15px;
          }
          .col-12,
          .col-md-6,
          .col-md-8,
          .col-lg-4,
          .col-lg-7 {
            position: relative;
            width: 100%;
            padding-right: 15px;
            padding-left: 15px;
          }
          .col-12 {
            flex: 0 0 100%;
            max-width: 100%;
          }
          @media (min-width: 768px) {
            .col-md-6 {
              flex: 0 0 50%;
              max-width: 50%;
            }
            .col-md-8 {
              flex: 0 0 66.66667%;
              max-width: 66.66667%;
            }
          }
          @media (min-width: 992px) {
            .col-lg-4 {
              flex: 0 0 33.33333%;
              max-width: 33.33333%;
            }
            .col-lg-7 {
              flex: 0 0 58.33333%;
              max-width: 58.33333%;
            }
          }
          .card {
            position: relative;
            display: flex;
            flex-direction: column;
            min-width: 0;
            word-wrap: break-word;
            background-color: #fff;
            background-clip: border-box;
            border: 1px solid rgba(0, 0, 0, 0.125);
            border-radius: 0.25rem;
          }
          .d-block {
            display: block !important;
          }
          .justify-content-center {
            justify-content: center !important;
          }
          .mb-0 {
            margin-bottom: 0 !important;
          }
          .mt-3 {
            margin-top: 1rem !important;
          }
          .text-center {
            text-align: center !important;
          }
          @media print {
            *,
            *::before,
            *::after {
              text-shadow: none !important;
              box-shadow: none !important;
            }
            a:not(.btn) {
              text-decoration: underline;
            }
            img {
              page-break-inside: avoid;
            }
            p,
            h3 {
              orphans: 3;
              widows: 3;
            }
            h3 {
              page-break-after: avoid;
            }
            .container {
              min-width: 992px !important;
            }
          }
          p {
            line-height: 1.69;
          }
          .avatar-lg {
            width: 50px;
            height: 50px;
            font-size: calc(50px * 0.35);
          }
        }
        /*! CSS Used from: https://edeline.ru/nft-demo/css/styles.css ; media=all */
        @media all {
          .vl-wallet {
            margin-top: 50px;
          }
          .vl-wallet > span {
            color: #5000e6;
            font-size: 20px;
            font-weight: 800;
          }
          .vl-wallet > h3 {
            color: white;
            font-weight: 900;
            padding-bottom: 10px;
          }
          .vl-wallet > p {
            color: #888;
            font-size: 17px;
            padding-bottom: 50px;
          }
          .single-wallet {
            margin-bottom: 30px;
            background-color: rgb(21, 22, 31);
            padding: 15px;
            border-radius: 10px;
            transition: 0.3s;
          }
          .single-wallet:hover {
            margin-bottom: 30px;
            background-color: rgb(33, 34, 48);
            padding: 15px;
            border-radius: 10px;
            transition: 0.3s;
          }
          .single-wallet > a > h4 {
            color: white;
            padding-bottom: 10px;
            padding-top: 20px;
          }
          .avatar-lg {
            width: 100px;
            height: 100px;
          }
          .single-wallet > a > p {
            color: #888;
          }
          a {
            text-decoration: none !important;
          }
          ::-webkit-scrollbar {
            width: 10px;
          }
          ::-webkit-scrollbar-track {
            background: #182029;
          }
          ::-webkit-scrollbar-thumb {
            background: rgba(57, 48, 82, 0.808);
          }
          ::-webkit-scrollbar-thumb:hover {
            background: rgba(57, 48, 82, 0.623);
            transition: 0.3s;
          }
        }
      `}</style>
    </Layout>
  );
};

export default WalletPage;
