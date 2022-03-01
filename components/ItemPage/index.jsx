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
        
        <style jsx global>{`
        /*! CSS Used from: https://edeline.ru/nft-demo/css/style.css ; media=all */
        @media all{
        *,*::before,*::after{box-sizing:border-box;}
        section{display:block;}
        h3,h4,h5,h6{margin-top:0;margin-bottom:0.5rem;}
        p{margin-top:0;margin-bottom:1rem;}
        ul{margin-top:0;margin-bottom:1rem;}
        strong{font-weight:bolder;}
        a{color:#007bff;text-decoration:none;background-color:transparent;}
        a:hover{color:#0056b3;text-decoration:underline;}
        img{vertical-align:middle;border-style:none;}
        h3,h4,h5,h6{margin-bottom:0.5rem;font-weight:600;line-height:1.5;}
        h3{font-size:1.75rem;}
        h4{font-size:1.5rem;}
        h5{font-size:1.25rem;}
        h6{font-size:1rem;}
        .list-unstyled{padding-left:0;list-style:none;}
        .container{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto;}
        @media (min-width: 576px){
        .container{max-width:540px;}
        }
        @media (min-width: 768px){
        .container{max-width:720px;}
        }
        @media (min-width: 992px){
        .container{max-width:960px;}
        }
        @media (min-width: 1200px){
        .container{max-width:1140px;}
        }
        @media (min-width: 576px){
        .container{max-width:540px;}
        }
        @media (min-width: 768px){
        .container{max-width:720px;}
        }
        @media (min-width: 992px){
        .container{max-width:960px;}
        }
        @media (min-width: 1200px){
        .container{max-width:1140px;}
        }
        .row{display:flex;flex-wrap:wrap;margin-right:-15px;margin-left:-15px;}
        .col-12,.col-lg-5,.col-lg-6{position:relative;width:100%;padding-right:15px;padding-left:15px;}
        .col-12{flex:0 0 100%;max-width:100%;}
        @media (min-width: 992px){
        .col-lg-5{flex:0 0 41.66667%;max-width:41.66667%;}
        .col-lg-6{flex:0 0 50%;max-width:50%;}
        }
        .fade{transition:opacity 0.15s linear;}
        @media (prefers-reduced-motion: reduce){
        .fade{transition:none;}
        }
        .fade:not(.show){opacity:0;}
        .nav{display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none;}
        .nav-tabs{border-bottom:1px solid #e9ecf1;}
        .tab-content>.tab-pane{display:none;}
        .tab-content>.active{display:block;}
        .card{position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid rgba(0, 0, 0, 0.125);border-radius:0.25rem;}
        .rounded-circle{border-radius:50%!important;}
        .d-flex{display:flex!important;}
        .justify-content-between{justify-content:space-between!important;}
        .align-items-center{align-items:center!important;}
        .m-0{margin:0!important;}
        .mt-0{margin-top:0!important;}
        .mt-2{margin-top:0.5rem!important;}
        .mb-2{margin-bottom:0.5rem!important;}
        .ml-2{margin-left:0.5rem!important;}
        .mt-3{margin-top:1rem!important;}
        .mr-3{margin-right:1rem!important;}
        .ml-3{margin-left:1rem!important;}
        .mt-4{margin-top:1.5rem!important;}
        .mt-5{margin-top:3rem!important;}
        @media (min-width: 992px){
        .mt-lg-0{margin-top:0!important;}
        .px-lg-2{padding-right:0.5rem!important;}
        .px-lg-2{padding-left:0.5rem!important;}
        }
        .text-center{text-align:center!important;}
        @media print{
        *,*::before,*::after{text-shadow:none!important;box-shadow:none!important;}
        a:not(.btn){text-decoration:underline;}
        img{page-break-inside:avoid;}
        p,h3{orphans:3;widows:3;}
        h3{page-break-after:avoid;}
        .container{min-width:992px!important;}
        }
        p{line-height:1.69;}
        .avatar-sm{width:18px;height:18px;font-size:calc(18px * 0.35);}
        .tab-pane.active{-webkit-animation:slide-down 0.5s ease-out;animation:slide-down 0.5s ease-out;}
        }
        /*! CSS Used from: https://edeline.ru/nft-demo/css/styles.css ; media=all */
        @media all{
        .item-details-area>.container{background-color:#131920;padding:20px;padding-top:50px;margin-top:90px;padding-right:50px;margin-bottom:150px;border-radius:10px;}
        .qwertyy{color:white;font-weight:800;padding-bottom:10px;}
        .qwertyt{color:rgb(148, 145, 145);font-weight:400;font-size:16px;}
        .vbh-c{background:#0f1318;padding:10px;}
        .item-thumb>img{width:90%;border-radius:10px;}
        .tab-content,.nav-tabs{margin-left:20px;margin-top:20px;padding-bottom:10px;}
        .rounded-circle{width:40px;height:40px;}
        .vfgg{color:rgb(153, 152, 152);font-size:16px;}
        .nav-tabs>li>a{color:white;transition:0.3s;}
        .nav-tabs>li>a:hover{color:rgb(78, 47, 216);transition:0.3s;}
        .nav-tabs>li>.active{color:rgb(78, 47, 216);transition:0.3s;}
        .nav-tabs>li{margin-right:15px;}
        a{text-decoration:none!important;}
        .button-vl{width:150px;background:transparent;border-radius:50px;border:2px solid #fff;transition:0.3s;color:white;font-weight:500;padding:10px;font-size:19px;}
        .button-vl:hover{width:150px;background:rgba(76, 24, 219, 0.933);border-radius:50px;border:2px solid rgba(76, 24, 219, 0.933);transition:0.3s;color:white;font-weight:500;padding:10px;font-size:19px;}
        ::-webkit-scrollbar{width:10px;}
        ::-webkit-scrollbar-track{background:#182029;}
        ::-webkit-scrollbar-thumb{background:rgba(57, 48, 82, 0.808);}
        ::-webkit-scrollbar-thumb:hover{background:rgba(57, 48, 82, 0.623);transition:0.3s;}
        }
        /*! CSS Used keyframes */
        @-webkit-keyframes slide-down{0%{opacity:0;transform:translateY(15%);}100%{opacity:1;transform:translateY(0);}}
        @keyframes slide-down{0%{opacity:0;transform:translateY(15%);}100%{opacity:1;transform:translateY(0);}}
        `}</style></Layout>
      
    )
}

export default ItemPage
