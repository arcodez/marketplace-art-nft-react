import { Layout } from "../Layout";

export const ContactsPage = () => {
  return (
    <Layout>
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
    </Layout>
  );
};
