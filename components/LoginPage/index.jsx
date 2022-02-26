import React from "react";
import { Layout } from "../Layout";

const LoginPage = () => {
  return (
    <Layout>
      <div className="pages-header" />
      <div className="pages-title">
        <h2>Login</h2>
        <br />
        <b>
          <a href="https://edeline.ru/nft-demo/">Home</a>
          <i className="fas fa-chevron-right" aria-hidden="true" /> Login
        </b>
      </div>
      <section className="wallet-connect-area" style={{ marginBottom: 100 }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-7">
              {/* Intro */}
              <div className="intro text-center vl-wallet">
                <span>Login</span>
                <h3 className="mt-3 mb-0">Login to your Account</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laborum obcaecati dignissimos quae quo ad iste ipsum officiis
                  deleniti asperiores sit.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center items">
            <div className="login-dark tgh">
              <form method="post" action="#">
                <h2 className="sr-only">Login Form</h2>
                <div className="illustration">
                  <i className="icon ion-ios-locked-outline" />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group">
                  <button className="btn btn-primary btn-block" type="submit">
                    Log In
                  </button>
                  <br />
                  <a
                    href="https://edeline.ru/nft-demo/singup.html"
                    style={{ color: "white" }}
                    className="btn btn-success btn-block"
                  >
                    Sing Up
                  </a>
                </div>
                <a href="#" className="forgot">
                  Forgot your email or password?
                </a>
                <br />
                <nav
                  className="lead-social-menu"
                  style={{ textAlign: "center" }}
                >
                  <a href="#">
                    <i className="fab fa-twitter" aria-hidden="true" />
                  </a>
                  <a href="#">
                    <i className="fab fa-facebook" aria-hidden="true" />
                  </a>
                  <a href="#">
                    <i className="fab fa-google-plus-g" aria-hidden="true" />
                  </a>
                </nav>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LoginPage;
