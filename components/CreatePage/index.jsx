import React from "react";
import { Layout } from "../Layout";

const CreatePage = () => {
  return (
    <Layout>
      <div className="pages-header" />
      <div className="pages-title">
        <h2>Create item</h2>
        <br />
        <b>
          <a href="https://edeline.ru/nft-demo/">Home</a>
          <i className="fas fa-chevron-right" aria-hidden="true" /> Create item
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
                  src="https://edeline.ru/nft-demo/assets/img/users/avatar_4.jpg"
                  className="img-responsive pavatar"
                  alt="user"
                />
              </div>
              {/* END SIDEBAR USERPIC */}
              {/* SIDEBAR USER TITLE */}
              <div className="profile-usertitle">
                <div className="profile-usertitle-name">Marcus Doe</div>
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
              <div className="container rty" style={{ marginBottom: 100 }} />
            </div>
            <div className="vlc">
              {/* Intro */}
              <div className="intro mt-5 mt-lg-0 mb-4 mb-lg-5">
                <div className="intro-content">
                  <span>Get Started</span>
                  <h3 className="mt-3 mb-0">Create Item</h3>
                </div>
              </div>
              {/* Item Form */}
              <form
                className="item-form card no-hover"
                action="#"
                method="POST"
              >
                <div className="row">
                  <div className="col-12">
                    <div
                      className="input-group form-group"
                      style={{ border: 0 }}
                    >
                      <label className="custom-file-upload">
                        <input type="file" />
                        Choose file to upload
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group mt-3">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Item Name"
                        required="required"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        name="textarea"
                        placeholder="Description"
                        cols={30}
                        rows={3}
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="price"
                        placeholder="Item Price"
                        required="required"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="royality"
                        placeholder="Royality"
                        required="required"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Size"
                        required="required"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="copies"
                        placeholder="No of Copies"
                        required="required"
                      />
                    </div>
                  </div>
                  <div className="col-12" style={{ textAlign: "center" }}>
                    <button
                      className="btn mt-3 mt-sm-4 button-vl"
                      type="submit"
                    >
                      Create Item
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </Layout>
  );
};

export default CreatePage;
