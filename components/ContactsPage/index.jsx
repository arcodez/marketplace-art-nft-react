import Head from "next/head";
import { Layout } from "../Layout";

export const ContactsPage = () => {
  return (
    <Layout>
      <Head>
        <title>Contacts</title>
      </Head>

      <div className="pages-header" />
      <div className="pages-title">
        <h2>Contacts</h2>
        <br />
        <b>
          <a href="https://edeline.ru/nft-demo/">Home</a>
          <i className="fas fa-chevron-right" aria-hidden="true" /> Contacts
        </b>
      </div>
      {/* Intro */}
      <div className="intro mt-5 mt-lg-0 mb-4 mb-lg-5">
        <div className="intro-content vfg">
          <span>Contact Us</span>
          <h3 className="mt-3 mb-0">Get In Touch</h3>
        </div>
      </div>
      {/* Item Form */}
      <div className="container" style={{ marginBottom: 100 }}>
        <div className="row">
          <form
            className="item-form card no-hover rtyy"
            action="https://edeline.ru/nft-demo/mail.php"
            method="POST"
          >
            <br />
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Name"
                    required="required"
                  />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Email"
                    required="required"
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name="sub"
                    placeholder="Subject"
                    required="required"
                  />
                  <br />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="mess"
                    placeholder="Message"
                    cols={30}
                    rows={7}
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="col-12" style={{ textAlign: "center" }}>
                <button className="btn mt-3 mt-sm-4 button-vl" type="submit">
                  Send
                </button>
                <br />
                <br />
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* Estilos */}
      <style jsx>{`
        /*! CSS Used from: https://edeline.ru/nft-demo/css/style.css ; media=all */
        @media all {
          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }
          button {
            border-radius: 0;
          }
          button:focus {
            outline: 1px dotted;
            outline: 5px auto -webkit-focus-ring-color;
          }
          input,
          button,
          textarea {
            margin: 0;
            font-family: inherit;
            font-size: inherit;
            line-height: inherit;
          }
          button,
          input {
            overflow: visible;
          }
          button {
            text-transform: none;
          }
          button,
          [type="submit"] {
            -webkit-appearance: button;
          }
          button::-moz-focus-inner,
          [type="submit"]::-moz-focus-inner {
            padding: 0;
            border-style: none;
          }
          textarea {
            overflow: auto;
            resize: vertical;
          }
          .row {
            display: flex;
            flex-wrap: wrap;
            margin-right: -15px;
            margin-left: -15px;
          }
          .col-12,
          .col-md-6 {
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
          }
          .form-control {
            display: block;
            width: 100%;
            height: calc(1.33em + 2rem + 2px);
            padding: 1rem 1.062rem;
            font-size: 0.75rem;
            font-weight: 700;
            line-height: 1.33;
            color: #4e5d78;
            background-color: #fff;
            background-clip: padding-box;
            border: 1px solid #d9dfe7;
            border-radius: 0.25rem;
            transition: border-color 0.15s ease-in-out,
              box-shadow 0.15s ease-in-out;
          }
          @media (prefers-reduced-motion: reduce) {
            .form-control {
              transition: none;
            }
          }
          .form-control::-ms-expand {
            background-color: transparent;
            border: 0;
          }
          .form-control:-moz-focusring {
            color: transparent;
            text-shadow: 0 0 0 #4e5d78;
          }
          .form-control:focus {
            color: #495057;
            background-color: #fff;
            border-color: #80bdff;
            outline: 0;
            box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
          }
          .form-control::-webkit-input-placeholder {
            color: #6c757d;
            opacity: 1;
          }
          .form-control::-moz-placeholder {
            color: #6c757d;
            opacity: 1;
          }
          .form-control:-ms-input-placeholder {
            color: #6c757d;
            opacity: 1;
          }
          .form-control::-ms-input-placeholder {
            color: #6c757d;
            opacity: 1;
          }
          .form-control::placeholder {
            color: #6c757d;
            opacity: 1;
          }
          .form-control:disabled {
            background-color: #f1f1f1;
            opacity: 1;
          }
          textarea.form-control {
            height: auto;
          }
          .form-group {
            margin-bottom: 1rem;
          }
          .btn {
            display: inline-block;
            font-weight: 400;
            color: #000000;
            text-align: center;
            vertical-align: middle;
            cursor: pointer;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            background-color: transparent;
            border: 1px solid transparent;
            padding: 0.375rem 0.75rem;
            font-size: 1rem;
            line-height: 1.5;
            border-radius: 0.25rem;
            transition: color 0.15s ease-in-out,
              background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
              box-shadow 0.15s ease-in-out;
          }
          @media (prefers-reduced-motion: reduce) {
            .btn {
              transition: none;
            }
          }
          .btn:hover {
            color: #000000;
            text-decoration: none;
          }
          .btn:focus {
            outline: 0;
            box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
          }
          .btn:disabled {
            opacity: 0.65;
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
          .mt-3 {
            margin-top: 1rem !important;
          }
          @media (min-width: 576px) {
            .mt-sm-4 {
              margin-top: 1.5rem !important;
            }
          }
          @media print {
            *,
            *::before,
            *::after {
              text-shadow: none !important;
              box-shadow: none !important;
            }
          }
          button:focus {
            outline: none;
          }
          .btn {
            padding: 15px 28px;
            font-weight: 700;
            line-height: 1;
          }
        }
        /*! CSS Used from: https://edeline.ru/nft-demo/css/styles.css ; media=all */
        @media all {
          .item-form {
            width: 100%;
            margin: auto;
            background-color: rgb(23, 20, 29);
            padding: 20px;
            margin-top: -20px;
            border-radius: 10px;
          }
          .form-control {
            background: rgb(8, 7, 10);
            font-size: 16px;
            color: #888;
            border: 0;
            border-radius: 0;
          }
          .form-control:active,
          .form-control::after,
          .form-control:hover,
          .form-control:focus,
          .form-control::before {
            background: rgb(8, 7, 10);
            font-size: 16px;
            color: #888;
            border: 0;
            border-radius: 0;
          }
          .button-vl {
            width: 150px;
            background: transparent;
            border-radius: 50px;
            border: 2px solid #fff;
            transition: 0.3s;
            color: white;
            font-weight: 500;
            padding: 10px;
            font-size: 19px;
          }
          .button-vl:hover {
            width: 150px;
            background: rgba(76, 24, 219, 0.933);
            border-radius: 50px;
            border: 2px solid rgba(76, 24, 219, 0.933);
            transition: 0.3s;
            color: white;
            font-weight: 500;
            padding: 10px;
            font-size: 19px;
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
