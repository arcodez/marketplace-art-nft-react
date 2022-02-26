import React from 'react'
import { Layout } from '../Layout'

const WalletPage = () => {
    return (
        <Layout>
        <div className="pages-header" />
        <div className="pages-title">
          <h2>Wallet Connect</h2>
          <br />
          <b>
            <a href="https://edeline.ru/nft-demo/">Home</a>
            <i className="fas fa-chevron-right" aria-hidden="true" /> Wallet Connect
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
                    obcaecati dignissimos quae quo ad iste ipsum officiis deleniti
                    asperiores sit.
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center items">
              <div className="col-12 col-md-6 col-lg-4 item">
                {/* Single Wallet */}
                <div className="card single-wallet">
                  <a
                    className="d-block text-center"
                    href="https://edeline.ru/nft-demo/login.html"
                  >
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
                  <a
                    className="d-block text-center"
                    href="https://edeline.ru/nft-demo/login.html"
                  >
                    <img
                      className="avatar-lg"
                      src="https://edeline.ru/nft-demo/assets/img/wallet/authereum.png"
                      alt=""
                    />
                    <h4 className="mb-0">Authereum</h4>
                    <p>
                      A user-friendly wallet that allows you to sign up with your
                      phone number on any device
                    </p>
                  </a>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 item">
                {/* Single Wallet */}
                <div className="card single-wallet">
                  <a
                    className="d-block text-center"
                    href="https://edeline.ru/nft-demo/login.html"
                  >
                    <img
                      className="avatar-lg"
                      src="https://edeline.ru/nft-demo/assets/img/wallet/walletconnect.png"
                      alt=""
                    />
                    <h4 className="mb-0">WalletConnect</h4>
                    <p>
                      Pair with Trust, Argent, MetaMask &amp; more. Works from any
                      browser, without an extension
                    </p>
                  </a>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 item">
                {/* Single Wallet */}
                <div className="card single-wallet">
                  <a
                    className="d-block text-center"
                    href="https://edeline.ru/nft-demo/login.html"
                  >
                    <img
                      className="avatar-lg"
                      src="https://edeline.ru/nft-demo/assets/img/wallet/dapper.png"
                      alt=""
                    />
                    <h4 className="mb-0">Dapper</h4>
                    <p>
                      A security-focused cloud wallet with pin codes and multi-factor
                      authentication
                    </p>
                  </a>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 item">
                {/* Single Wallet */}
                <div className="card single-wallet">
                  <a
                    className="d-block text-center"
                    href="https://edeline.ru/nft-demo/login.html"
                  >
                    <img
                      className="avatar-lg"
                      src="https://edeline.ru/nft-demo/assets/img/wallet/kaikas.png"
                      alt=""
                    />
                    <h4 className="mb-0">Kaikas</h4>
                    <p>
                      A simple-to-use wallet that works on both mobile and through a
                      browser extension
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
      
    )
}

export default WalletPage
