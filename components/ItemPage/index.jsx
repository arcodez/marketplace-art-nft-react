import React from 'react'
import { Layout } from '../Layout'

const ItemPage = () => {
    return (
        <Layout>
        <div className="pages-header" />
        <div className="pages-title">
          <h2>Item Details</h2>
          <br />
          <b>
            <a href="https://edeline.ru/nft-demo/">Home</a>
            <i className="fas fa-chevron-right" aria-hidden="true" /> Item Details
          </b>
        </div>
        {/* ***** Item Details Area Start ***** */}
        <section className="item-details-area">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-12 col-lg-5">
                <div className="item-info">
                  <div className="item-thumb text-center">
                    <img
                      src="https://edeline.ru/nft-demo/assets/img/cards/auction_1.jpg"
                      alt="Item Details"
                    />
                  </div>
                  {/* Netstorm Tab */}
                  <ul className="netstorm-tab nav nav-tabs" id="nav-tab">
                    <li>
                      <a
                        className="active"
                        id="nav-home-tab"
                        data-toggle="pill"
                        href="#nav-home"
                      >
                        <h5 className="m-0">Bids</h5>
                      </a>
                    </li>
                    <li>
                      <a id="nav-profile-tab" data-toggle="pill" href="#nav-profile">
                        <h5 className="m-0">History</h5>
                      </a>
                    </li>
                    <li>
                      <a id="nav-contact-tab" data-toggle="pill" href="#nav-contact">
                        <h5 className="m-0">Details</h5>
                      </a>
                    </li>
                  </ul>
                  {/* Tab Content */}
                  <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home">
                      <ul className="list-unstyled">
                        {/* Single Tab List */}
                        <li className="single-tab-list d-flex align-items-center">
                          <img
                            className="avatar-sm rounded-circle mr-3"
                            src="https://edeline.ru/nft-demo/assets/img/users/avatar_1.jpg"
                            alt=""
                          />
                          <p className="m-0 vfgg">
                            Bid listed for <strong>14 ETH</strong> 4 hours ago
                            <br />
                            by
                            <a href="https://edeline.ru/nft-demo/author.html">
                              @arham
                            </a>
                          </p>
                        </li>
                        {/* Single Tab List */}
                        <li className="single-tab-list d-flex align-items-center">
                          <img
                            className="avatar-sm rounded-circle mr-3"
                            src="https://edeline.ru/nft-demo/assets/img/users/avatar_2.jpg"
                            alt=""
                          />
                          <p className="m-0 vfgg">
                            Bid listed for <strong>10 ETH</strong> 8 hours ago
                            <br />
                            by
                            <a href="https://edeline.ru/nft-demo/author.html">
                              @junaid
                            </a>
                          </p>
                        </li>
                        {/* Single Tab List */}
                        <li className="single-tab-list d-flex align-items-center">
                          <img
                            className="avatar-sm rounded-circle mr-3"
                            src="https://edeline.ru/nft-demo/assets/img/users/avatar_3.jpg"
                            alt=""
                          />
                          <p className="m-0 vfgg">
                            Bid listed for <strong>12 ETH</strong> 3 hours ago
                            <br />
                            by
                            <a href="https://edeline.ru/nft-demo/author.html">
                              @yasmin
                            </a>
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div className="tab-pane fade" id="nav-profile">
                      <ul className="list-unstyled">
                        {/* Single Tab List */}
                        <li className="single-tab-list d-flex align-items-center">
                          <img
                            className="avatar-sm rounded-circle mr-3"
                            src="https://edeline.ru/nft-demo/assets/img/users/avatar_4.jpg"
                            alt=""
                          />
                          <p className="m-0 vfgg">
                            Bid listed for <strong>32 ETH</strong> 10 hours ago
                            <br />
                            by
                            <a href="https://edeline.ru/nft-demo/author.html">
                              @hasan
                            </a>
                          </p>
                        </li>
                        {/* Single Tab List */}
                        <li className="single-tab-list d-flex align-items-center">
                          <img
                            className="avatar-sm rounded-circle mr-3"
                            src="https://edeline.ru/nft-demo/assets/img/users/avatar_5.jpg"
                            alt=""
                          />
                          <p className="m-0 vfgg">
                            Bid listed for <strong>24 ETH</strong> 6 hours ago
                            <br />
                            by
                            <a href="https://edeline.ru/nft-demo/author.html">
                              @artnox
                            </a>
                          </p>
                        </li>
                        {/* Single Tab List */}
                        <li className="single-tab-list d-flex align-items-center">
                          <img
                            className="avatar-sm rounded-circle mr-3"
                            src="https://edeline.ru/nft-demo/assets/img/users/avatar_6.jpg"
                            alt=""
                          />
                          <p className="m-0 vfgg">
                            Bid listed for <strong>29 ETH</strong> 12 hours ago
                            <br />
                            by
                            <a href="https://edeline.ru/nft-demo/author.html">
                              @meez
                            </a>
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div className="tab-pane fade" id="nav-contact">
                      {/* Single Tab List */}
                      <div className="owner-meta d-flex align-items-center mt-3">
                        <span className="vfgg">Owner</span>
                        <a
                          className="owner d-flex align-items-center ml-2"
                          href="https://edeline.ru/nft-demo/author.html"
                        >
                          <img
                            className="avatar-sm rounded-circle"
                            src="https://edeline.ru/nft-demo/assets/img/users/avatar_1.jpg"
                            alt=""
                          />
                          <p className="ml-2" style={{ marginTop: 15 }}>
                            @Morfeus
                          </p>
                        </a>
                      </div>
                      <p className="mt-2 vfgg">Created : 15 Jul 2021</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                {/* Content */}
                <div className="content mt-5 mt-lg-0">
                  <h3 className="m-0 qwertyy">Virtual World</h3>
                  <p className="qwertyt">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
                    obcaecati dignissimos quae quo ad iste ipsum officiis deleniti
                    asperiores sit.
                  </p>
                  {/* Owner */}
                  <div className="owner d-flex align-items-center">
                    <span className="qwertyt">Owned By</span>
                    <a
                      className="owner-meta d-flex align-items-center ml-3"
                      href="https://edeline.ru/nft-demo/author.html"
                    >
                      <img
                        className="avatar-sm rounded-circle"
                        src="https://edeline.ru/nft-demo/assets/img/users/avatar_1.jpg"
                        alt=""
                      />
                      <h6 className="ml-2">Morfeus</h6>
                    </a>
                  </div>
                  {/* Item Info List */}
                  <div className="item-info-list mt-4">
                    <ul className="list-unstyled">
                      <li className="price d-flex justify-content-between">
                        <span className="qwertyt">Current Price 1.5 ETH</span>
                        <span className="qwertyt">$500.89</span>
                        <span className="qwertyt">1 of 5</span>
                        <br />
                      </li>
                      <li>
                        <span className="qwertyt">Size</span>
                        <span className="qwertyt">14000 x 14000 px</span>
                        <br />
                      </li>
                      <li>
                        <span className="qwertyt">Volume Traded</span>
                        <span className="qwertyt">64.1</span>
                        <br />
                      </li>
                    </ul>
                  </div>
                  <div className="row items">
                    <div className="col-12 item px-lg-2">
                      <div className="card no-hover vbh-c">
                        <h4 className="mt-0 mb-2 qwertyy">Highest Bid</h4>
                        <div className="price d-flex justify-content-between align-items-center">
                          <span className="qwertyt">2.9 BNB</span>
                          <span className="qwertyt">1 of 5</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <br />
                  <a
                    className="button-vl mt-4"
                    href="https://edeline.ru/nft-demo/wallet.html"
                    style={{ textAlign: "center", width: "100%", display: "block" }}
                  >
                    Place a Bid
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ***** Item Details Area End ***** */}
        <div className="container" style={{ marginBottom: 100, marginTop: "-100px" }}>
          <div className="row">
            <div className="sec-t">
              <b>- Auctions</b>
              <h2>Live Auctions</h2>
            </div>
            <div className="sec-1">
              <div className="card col-sm-4">
                <img
                  className="card-img-top"
                  src="https://edeline.ru/nft-demo/assets/img/cards/auction_1.jpg"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <a href="https://edeline.ru/nft-demo/item.html">
                    <h5 className="card-title">Virtual Worlds</h5>
                  </a>
                  <div className="avatar">
                    <img
                      src="https://edeline.ru/nft-demo/assets/img/users/avatar_1.jpg"
                      alt="Card image cap"
                    />
                  </div>
                  <a
                    href="https://edeline.ru/nft-demo/author.html"
                    className="avatar-text"
                  >
                    @John Doe
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
                  <a href="https://edeline.ru/nft-demo/item.html">
                    <h5 className="card-title">Collectibles</h5>
                  </a>
                  <div className="avatar">
                    <img
                      src="https://edeline.ru/nft-demo/assets/img/users/avatar_4.jpg"
                      alt="Card image cap"
                    />
                  </div>
                  <a
                    href="https://edeline.ru/nft-demo/author.html"
                    className="avatar-text"
                  >
                    @Gabriel
                  </a>
                  <br />
                  <p className="b-t-l">1.3 BNB</p>
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
                  <a href="https://edeline.ru/nft-demo/item.html">
                    <h5 className="card-title">Arts</h5>
                  </a>
                  <div className="avatar">
                    <img
                      src="https://edeline.ru/nft-demo/assets/img/users/avatar_3.jpg"
                      alt="Card image cap"
                    />
                  </div>
                  <a
                    href="https://edeline.ru/nft-demo/author.html"
                    className="avatar-text"
                  >
                    @Mike
                  </a>
                  <br />
                  <p className="b-t-l">1.7 BNB</p>
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
                  <a href="https://edeline.ru/nft-demo/item.html">
                    <h5 className="card-title">Robotix</h5>
                  </a>
                  <div className="avatar">
                    <img
                      src="https://edeline.ru/nft-demo/assets/img/users/avatar_2.jpg"
                      alt="Card image cap"
                    />
                  </div>
                  <a
                    href="https://edeline.ru/nft-demo/author.html"
                    className="avatar-text"
                  >
                    @Sarah
                  </a>
                  <br />
                  <p className="b-t-l">2.8 BNB</p>
                  <p className="b-t-r">1 of 1</p>
                </div>
              </div>
              <div className="card col-sm-4">
                <img
                  className="card-img-top"
                  src="https://edeline.ru/nft-demo/assets/img/cards/5.jpg"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <a href="https://edeline.ru/nft-demo/item.html">
                    <h5 className="card-title">New Year Penguin</h5>
                  </a>
                  <div className="avatar">
                    <img
                      src="https://edeline.ru/nft-demo/assets/img/users/avatar_2.jpg"
                      alt="Card image cap"
                    />
                  </div>
                  <a
                    href="https://edeline.ru/nft-demo/author.html"
                    className="avatar-text"
                  >
                    @Sarah
                  </a>
                  <br />
                  <p className="b-t-l">2.3 BNB</p>
                  <p className="b-t-r">1 of 1</p>
                </div>
              </div>
              <div className="card col-sm-4">
                <img
                  className="card-img-top"
                  src="https://edeline.ru/nft-demo/assets/img/cards/6.png"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <a href="https://edeline.ru/nft-demo/item.html">
                    <h5 className="card-title">Fast Food Penguin</h5>
                  </a>
                  <div className="avatar">
                    <img
                      src="https://edeline.ru/nft-demo/assets/img/users/avatar_3.jpg"
                      alt="Card image cap"
                    />
                  </div>
                  <a
                    href="https://edeline.ru/nft-demo/author.html"
                    className="avatar-text"
                  >
                    @Mike
                  </a>
                  <br />
                  <p className="b-t-l">1.3 BNB</p>
                  <p className="b-t-r">1 of 1</p>
                </div>
              </div>
              <div className="card col-sm-4">
                <img
                  className="card-img-top"
                  src="https://edeline.ru/nft-demo/assets/img/cards/7.png"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <a href="https://edeline.ru/nft-demo/item.html">
                    <h5 className="card-title">Pirat Penguin</h5>
                  </a>
                  <div className="avatar">
                    <img
                      src="https://edeline.ru/nft-demo/assets/img/users/avatar_5.jpg"
                      alt="Card image cap"
                    />
                  </div>
                  <a
                    href="https://edeline.ru/nft-demo/author.html"
                    className="avatar-text"
                  >
                    @Marina
                  </a>
                  <br />
                  <p className="b-t-l">1.7 BNB</p>
                  <p className="b-t-r">1 of 1</p>
                </div>
              </div>
              <div className="card col-sm-4">
                <img
                  className="card-img-top"
                  src="https://edeline.ru/nft-demo/assets/img/cards/8.png"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <a href="https://edeline.ru/nft-demo/item.html">
                    <h5 className="card-title">Brazil Penguin</h5>
                  </a>
                  <div className="avatar">
                    <img
                      src="https://edeline.ru/nft-demo/assets/img/users/avatar_6.jpg"
                      alt="Card image cap"
                    />
                  </div>
                  <a
                    href="https://edeline.ru/nft-demo/author.html"
                    className="avatar-text"
                  >
                    @Georgia
                  </a>
                  <br />
                  <p className="b-t-l">2.8 BNB</p>
                  <p className="b-t-r">1 of 1</p>
                </div>
              </div>
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
      </Layout>
      
    )
}

export default ItemPage
