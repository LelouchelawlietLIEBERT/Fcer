import React, { useState } from "react";

const Mailform = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <>
      <div style={{ marginTop: "50px", width: "560px" }}>
        <form className="my-form">
          <div className="container">
            <ul>
              <li>
                <div className="grid grid-2">
                  <input type="text" placeholder="Name" />
                  <input type="email" placeholder="Email" required />
                </div>
              </li>
              <li>
                <textarea placeholder="Message"></textarea>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="terms"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="terms">
                  I have read and agreed with {"  "}
                  <a href="">the terms and conditions.</a>
                </label>
              </li>
              <li>
                <div className="grid grid-3">
                  <div className="required-msg">REQUIRED FIELDS</div>
                  <button
                    className="btn-grid"
                    type="submit"
                    disabled={!isChecked}
                  >
                    <span className="back">
                      <img
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/email-icon.svg"
                        alt=""
                      />
                    </span>
                    <span className="front">SUBMIT</span>
                  </button>
                  <button
                    className="btn-grid"
                    type="reset"
                    disabled={!isChecked}
                  >
                    <span className="back">
                      <img
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/eraser-icon.svg"
                        alt=""
                      />
                    </span>
                    <span className="front">RESET</span>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </form>
      </div>
    </>
  );
};

export default Mailform;
