import React from "react";

export default function Contact() {
  return (
    <div>
      <div className="card" >
        <div className="card-body">
          <div class="row" >
            <div class="col-5" style={{ borderRight: "2px solid black" }}>
              <h6 className="card-subtitle mb-2">
                For any clarification please contact :
              </h6>
              
              <p className="card-text">E-mail : ncefes2021@gmail.com</p>
            </div>
            <div class="col-7">
              <h6 className="card-subtitle mb-2">
                Address for Correspondence :
              </h6>
              
              <p className="card-text">
                The Honorary Secretary 
                <br />
                The Institution of Engineers (India)
                <br />
                Jodhpur Local Centre 
                <br />
                Gaurav Path, Jodhpur 342011, Rajasthan
                <br />
                Ph.: 0291-2432708
                <br />
                E-mail Jodhpurlc@ieindia.org
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
