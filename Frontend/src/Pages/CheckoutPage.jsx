import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./CheckoutPage.css";
import axios from "axios";
import { useToast, Input } from "@chakra-ui/react";

const CheckoutPage = ({ money }) => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const handleToast = useToast();
  const [cvc, setCvc] = useState("");
  const [expire, setExpire] = useState("");
  const [card, setCard] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  console.log("money", money);

  const getDataPaymentValue = async () => {
    try {
      let res = await axios(`http://localhost:8080/carcart/${id}`);
      setData(res.data);
    } catch (err) {
      console.log("err", err);
    }
  };

  const handleCVC = (e) => {
    setCvc(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleCard = (e) => {
    setCard(e.target.value);
  };
  const handleExpire = (e) => {
    setExpire(e.target.value);
  };
  const handleConfirm = () => {
    handleToast({
      title: "Payment Successfull; .",
      description: "Thankyou from shopping with us.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    setCard("");
    setCvc("");
    setName("");
    setExpire("");
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  useEffect(() => {
    getDataPaymentValue();
  }, []);
  return (
    <div>
      <main className="container">
        <div className="main">
          {/* <!-- Shipping Address Section  --> */}
          <section className="shipping_address">
            <h2 className="ship_head">Shipping Address</h2>
            <div className="addresses">
              <form action="">
                <div className="address_primary">
                  <div className="info">
                    <p className="bold">Name:</p>
                    <p className="light">Utkarsh Singhal</p>
                  </div>
                  <div className="info">
                    <p className="bold">Phone:</p>
                    <p className="light">(305) 345-5678</p>
                  </div>
                  <div className="info">
                    <p className="bold">Address:</p>
                    <p className="light">Shivaji Nagar </p>
                  </div>
                </div>
                <div className="address_secondary">
                  <div className="info">
                    <p className="bold">Name:</p>
                    <p className="light">Utkarsh Singhal</p>
                  </div>
                  <div className="info">
                    <p className="bold">Phone:</p>
                    <p className="light">(305) 345-5678</p>
                  </div>
                  <div className="info">
                    <p className="bold">Address:</p>
                    <p className="light">Shivaji Nagar</p>
                  </div>
                </div>
              </form>
            </div>
            <span className="new_address">+ add new address</span>
          </section>
          {/* <!-- Payment Method Section  --> */}
          <section className="payment_method">
            <h2 className="ship_head">Payment Method</h2>
            <div className="card_info">
              <div className="card_head">
                <h2 className="card_title">Debit or Credit Card</h2>
              </div>
              <div className="card_types">
                <img
                  className="card_img"
                  src="https://cdn-icons-png.flaticon.com/512/349/349221.png"
                  alt=""
                />
                <img
                  className="card_img"
                  src="https://cdn-icons-png.flaticon.com/512/349/349230.png"
                  alt=""
                />
                <img
                  className="card_img"
                  src="https://cdn-icons-png.flaticon.com/512/349/349228.png"
                  alt=""
                />
                <img
                  className="card_img"
                  src="https://img.icons8.com/fluency/512/mastercard.png"
                  alt=""
                />
              </div>
              <form>
                <Input
                  type="text"
                  name="Name"
                  value={name}
                  placeholder="Card Holder"
                  maxlength="60"
                  onChange={handleName}
                />
                <Input
                  type="text"
                  name="Number"
                  value={card}
                  placeholder="Card Number"
                  maxlength="16"
                  onChange={handleCard}
                />
                <div>
                  <Input
                    type="text"
                    name="Name"
                    value={expire}
                    placeholder="Expire"
                    maxlength="4"
                    onChange={handleExpire}
                  />
                  <Input
                    type="text"
                    name="Name"
                    value={cvc}
                    placeholder="CVC"
                    maxlength="3"
                    onChange={handleCVC}
                  />
                </div>
              </form>
              <span className="save_card">Save Card</span>
            </div>
            <div className="e_payment">
              <div className="pay">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/6124/6124998.png"
                  alt=""
                />
              </div>
              <div className="pay">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5977/5977576.png"
                  alt=""
                />
              </div>
              <div className="pay">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/196/196565.png"
                  alt=""
                />
              </div>
            </div>
            <button onClick={handleConfirm} className="confirm_btn">
              Confirm
            </button>
          </section>
          {/* <!-- Order Summary Section  --> */}
          <section className="order_summary">
            <h2 className="order_head">Order Summary</h2>
            <div className="order_price">
              <hr />
              <div className="price">
                <p>Order price:</p>
                <p>₹{data.fair}</p>
              </div>
              <div className="price">
                <p>TollTax Includes:</p>
                <p>₹{data.Milage}</p>
              </div>
              <div className="price">
                <p>Tax:</p>
                <p>₹300.25</p>
              </div>
              <br />
              <hr />
              <div className="total_price">
                <p className="dark">Total:</p>
                <p className="dark">{data.fair + data.Milage + 300.25}</p>
              </div>
            </div>
            <img
              className="qr_code"
              src="https://cdn-icons-png.flaticon.com/512/714/714390.png"
              alt=""
            />
            <p className="condition">
              Pay and Confirm Order by QR Code Using <b>Mobile Application</b>
            </p>
            <button className="review_btn">Review and Confirm</button>
          </section>
          <small className="project_by">
            <b>
              Develped by <span>Utkarsh Singhal</span>
            </b>
          </small>
        </div>
      </main>
    </div>
  );
};

export default CheckoutPage;
