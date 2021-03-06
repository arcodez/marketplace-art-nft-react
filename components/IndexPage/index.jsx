import Head from "next/head";
import Link from "next/link";
import { Layout } from "../Layout";

const HeroImage = () => {
  return (
    <div className="hero-image">
      <h1>
        <b>
          - Welcome to Arcodez Art Nft!
          <br />
        </b>
        Discover, collect,
        <br />
        and sell
        <br />
        extraordinary NFTs
        <br />
        <label>
          Explore on the world's best &amp; largest NFT marketplace
          <br />
          <br />
          <Link href="/explore">
            <a>
              <i className="fas fa-rocket" aria-hidden="true" /> Explore
            </a>
          </Link>
          <Link href="/create">
            <a style={{ marginLeft: "10px" }}>
              <i className="far fa-edit" aria-hidden="true" /> Create
            </a>
          </Link>
        </label>
      </h1>
    </div>
  );
};

const LivesCards = [
  {
    imgUrl: "https://edeline.ru/nft-demo/assets/img/coll/1.png",
    avatarImgUrl: "https://edeline.ru/nft-demo/assets/img/users/avatar_1.jpg",
    authorName: "John Doe",
    title: "Digital Arts",
    price: 2.3,
    coin: "BNB",
    quantity: 1,
    stock: 1,
  },
  {
    imgUrl: "https://edeline.ru/nft-demo/assets/img/cards/auction_2.jpg",
    avatarImgUrl: "https://edeline.ru/nft-demo/assets/img/users/avatar_4.jpg",
    authorName: "Gabriel",
    title: "Collectibles",
    price: 1.3,
    coin: "BNB",
    quantity: 1,
    stock: 1,
  },
  {
    imgUrl: "https://edeline.ru/nft-demo/assets/img/cards/auction_3.jpg",
    avatarImgUrl: "https://edeline.ru/nft-demo/assets/img/users/avatar_3.jpg",
    authorName: "Mike",
    title: "Arts",
    price: 1.7,
    coin: "BNB",
    quantity: 1,
    stock: 1,
  },
  {
    imgUrl: "https://edeline.ru/nft-demo/assets/img/cards/auction_4.jpg",
    avatarImgUrl: "https://edeline.ru/nft-demo/assets/img/users/avatar_2.jpg",
    authorName: "Sarah",
    title: "Robotix",
    price: 2.8,
    coin: "BNB",
    quantity: 1,
    stock: 1,
  },
  {
    imgUrl: "https://edeline.ru/nft-demo/assets/img/cards/5.jpg",
    avatarImgUrl: "https://edeline.ru/nft-demo/assets/img/users/avatar_2.jpg",
    authorName: "Sarah",
    title: "New Year Penguin",
    price: 2.3,
    coin: "BNB",
    quantity: 1,
    stock: 1,
  },
  {
    imgUrl: "https://edeline.ru/nft-demo/assets/img/cards/6.png",
    avatarImgUrl: "https://edeline.ru/nft-demo/assets/img/users/avatar_3.jpg",
    authorName: "Mike",
    title: "Fast Food Penguin",
    price: 1.3,
    coin: "BNB",
    quantity: 1,
    stock: 1,
  },
  {
    imgUrl: "https://edeline.ru/nft-demo/assets/img/cards/7.png",
    avatarImgUrl: "https://edeline.ru/nft-demo/assets/img/users/avatar_5.jpg",
    authorName: "Marina",
    title: "Pirat Penguin",
    price: 1.7,
    coin: "BNB",
    quantity: 1,
    stock: 1,
  },
  {
    imgUrl: "https://edeline.ru/nft-demo/assets/img/cards/8.png",
    avatarImgUrl: "https://edeline.ru/nft-demo/assets/img/users/avatar_6.jpg",
    authorName: "Georgia",
    title: "Brazil Penguin",
    price: 2.8,
    coin: "BNB",
    quantity: 1,
    stock: 1,
  },
];

const LiveCard = ({
  imgUrl = "https://edeline.ru/nft-demo/assets/img/coll/1.png",
  avatarImgUrl = "https://edeline.ru/nft-demo/assets/img/users/avatar_1.jpg",
  authorName = "John Doe",
  title = "Digital Arts",
  price = 2.3,
  coin = "BNB",
  quantity = 1,
  stock = 1,
}) => {
  return (
    <div className="card col-sm-4">
      <img className="card-img-top" src={imgUrl} alt={title} />
      <div className="card-body">
        <Link href="/item">
          <a>
            <h5 className="card-title">Virtual Worlds</h5>
          </a>
        </Link>

        <div className="avatar">
          <img src={avatarImgUrl} alt="Card image cap" />
        </div>

        <Link href="/author">
          <a className="avatar-text">@{authorName}</a>
        </Link>
        <br />
        
        <p className="b-t-l">
          {price} {coin}
        </p>
        <p className="b-t-r">
          {quantity} of {stock}
        </p>
      </div>
    </div>
  );
};

const LiveAuctionSection = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="sec-t">
          <b>- Auctions</b>
          <h2>Live Auctions</h2>
          <br />
          <Link href="/auctions">
            <a className="button-vl">
              View All
              <i className="fas fa-long-arrow-alt-right" aria-hidden="true" />
            </a>
          </Link>
        </div>
        <div className="sec-1">
          {LivesCards.map((card, index) => (
            <LiveCard key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

const SellerSection = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="sec-t">
            <b>- Creative Authors</b>
            <h2>Top Sellers</h2>
          </div>
        </div>
      </div>
      <div className="sec-1" style={{ marginTop: "-30px" }}>
        <div className="card col-sm-4">
          <div className="card-body">
            <a href="/author">
              <h5 className="card-title">Georgia Miller</h5>
            </a>
            <div className="avatar">
              <img
                src="https://edeline.ru/nft-demo/assets/img/users/avatar_6.jpg"
                alt="Card image cap"
              />
            </div>
            <a href="/author" className="avatar-text">
              @Georgia
            </a>
            <br />
            <p className="b-t-l">2.8 BNB</p>
            <p className="b-t-r">1 of 1</p>
          </div>
        </div>
        <div className="card col-sm-4">
          <div className="card-body">
            <a href="/author">
              <h5 className="card-title">John Doe</h5>
            </a>
            <div className="avatar">
              <img
                src="https://edeline.ru/nft-demo/assets/img/users/avatar_4.jpg"
                alt="Card image cap"
              />
            </div>
            <a href="/author" className="avatar-text">
              @John Doe
            </a>
            <br />
            <p className="b-t-l">2.4 BNB</p>
            <p className="b-t-r">1 of 1</p>
          </div>
        </div>
        <div className="card col-sm-4">
          <div className="card-body">
            <a href="/author">
              <h5 className="card-title">Martin Later</h5>
            </a>
            <div className="avatar">
              <img
                src="https://edeline.ru/nft-demo/assets/img/users/avatar_1.jpg"
                alt="Card image cap"
              />
            </div>
            <a href="/author" className="avatar-text">
              @Martin
            </a>
            <br />
            <p className="b-t-l">1.8 BNB</p>
            <p className="b-t-r">1 of 1</p>
          </div>
        </div>
        <div className="card col-sm-4">
          <div className="card-body">
            <a href="/author">
              <h5 className="card-title">Sarah Parker</h5>
            </a>
            <div className="avatar">
              <img
                src="https://edeline.ru/nft-demo/assets/img/users/avatar_5.jpg"
                alt="Card image cap"
              />
            </div>
            <a href="/author" className="avatar-text">
              @Sarah
            </a>
            <br />
            <p className="b-t-l">1.7 BNB</p>
            <p className="b-t-r">1 of 1</p>
          </div>
        </div>
      </div>
    </>
  );
};

const ExploreSection = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="sec-t">
          <b>- Exclusive Assets</b>
          <h2>Explore</h2>
        </div>
        <div className="sec-1" style={{ marginTop: "-20px" }}>
          <div className="card col-sm-4">
            <img
              className="card-img-top"
              src="https://edeline.ru/nft-demo/assets/img/cards/auction_1.jpg"
              alt="Card image cap"
            />
            <div className="card-body">
              <a href="/item.html">
                <h5 className="card-title">Virtual Worlds</h5>
              </a>
              <p style={{ color: "white" }}>
                Owned by <a href>@JohnDeo</a>
              </p>
              <p className="b-t-l">2.3 BNB</p>
              <p className="b-t-r">1 of 1</p>
              <br />
              <br />
              <a href="/login.html" className="button-vl">
                <i
                  className="fas fa-shopping-bag"
                  style={{ fontSize: "13px" }}
                  aria-hidden="true"
                />
                Place a Bid{" "}
              </a>
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
              <a href="/item.html">
                <h5 className="card-title">Collectibles</h5>
              </a>
              <p style={{ color: "white" }}>
                Owned by <a href>@SarahConor</a>
              </p>
              <p className="b-t-l">1.3 BNB</p>
              <p className="b-t-r">1 of 1</p>
              <br />
              <br />
              <a href="/login.html" className="button-vl">
                <i
                  className="fas fa-shopping-bag"
                  style={{ fontSize: "13px" }}
                  aria-hidden="true"
                />
                Place a Bid{" "}
              </a>
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
              <a href="/item.html">
                <h5 className="card-title">Arts</h5>
              </a>
              <p style={{ color: "white" }}>
                Owned by <a href>@GeorgiaMiller</a>
              </p>
              <p className="b-t-l">1.7 BNB</p>
              <p className="b-t-r">1 of 1</p>
              <br />
              <br />
              <a href="/login.html" className="button-vl">
                <i
                  className="fas fa-shopping-bag"
                  style={{ fontSize: "13px" }}
                  aria-hidden="true"
                />
                Place a Bid{" "}
              </a>
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
              <a href="/item.html">
                <h5 className="card-title">Industrial Revolution</h5>
              </a>
              <p style={{ color: "white" }}>
                Owned by <a href>@JohnDoe</a>
              </p>
              <p className="b-t-l">2.8 BNB</p>
              <p className="b-t-r">1 of 1</p>
              <br />
              <br />
              <a href="/login.html" className="button-vl">
                <i
                  className="fas fa-shopping-bag"
                  style={{ fontSize: "13px" }}
                  aria-hidden="true"
                />
                Place a Bid{" "}
              </a>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CollectionSection = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="sec-t">
            <b>- Most Popular</b>
            <h2>Popular Collections</h2>
            <br />
            <a
              href="https://edeline.ru/nft-demo/collections.html"
              className="button-vl"
            >
              View All
              <i className="fas fa-long-arrow-alt-right" aria-hidden="true" />
            </a>
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
            <a href="/item.html">
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
            <a href="/item.html">
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
            <a href="/item.html">
              <h5 className="card-title">Tranding Cards</h5>
            </a>
            <p className="b-t-l">ERC-654</p>
            <p className="b-t-r">198.2 k</p>
          </div>
        </div>
      </div>
      <div className="sec-1" style={{ marginTop: "-50px" }}>
        <div className="card col-sm-4">
          <div className="card-body">
            <img
              className="card-img-top vl-img"
              src="https://edeline.ru/nft-demo/assets/img/coll/5.jpg"
              alt="Card image cap"
            />
            <a href="/item.html">
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
            <a href="/item.html">
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
            <a href="/item.html">
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
            <a href="/item.html">
              <h5 className="card-title">Flowers</h5>
            </a>
            <p className="b-t-l">ERC-876</p>
            <p className="b-t-r">343.2 k</p>
          </div>
        </div>
      </div>
    </>
  );
};

const HowWorksSection = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="sec-t">
            <b>- How It Works</b>
            <h2>Create and sell your NFTs</h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-3 section-down">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  <i className="fas fa-wallet" aria-hidden="true" />
                  <br />
                  Set up your wallet
                </h5>
                <p className="card-text">
                  Once you???ve set up your wallet of choice, connect it to
                  OpenSea by clicking the NFT Marketplace in the top right
                  corner. Learn about the wallets we support.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-3 section-down">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  <i className="fas fa-th-large" aria-hidden="true" />
                  <br />
                  Create your collection
                </h5>
                <p className="card-text">
                  Click Create and set up your collection. Add social links, a
                  description, profile &amp; banner images, and set a secondary
                  sales fee.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-3 section-down">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  <i className="fas fa-cloud-upload-alt" aria-hidden="true" />
                  <br />
                  Add your NFTs
                </h5>
                <p className="card-text">
                  Upload your work (image, video, audio, or 3D art), add a title
                  and description, and customize your NFTs with properties,
                  stats, and unlockable content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-3 section-down">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  <i className="fas fa-shopping-bag" aria-hidden="true" />
                  <br />
                  List them for sale
                </h5>
                <p className="card-text">
                  Choose between auctions, fixed-price listings, and
                  declining-price listings. You choose how you want to sell your
                  NFTs!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>Art Nft Web</title>
      </Head>

      <HeroImage />

      {/* Auctions Section*/}
      <LiveAuctionSection />

      {/* Seller Section*/}
      <SellerSection />

      {/* Popular Collection Section*/}
      <CollectionSection />

      {/* Explorer Section*/}
      <ExploreSection />

      {/* How It Works Section*/}
      <HowWorksSection />
    </Layout>
  );
}
