import React from "react";
import img3 from "../images/solar.jpg";
export default function Home() {
  return (
    <div>
      <br />
      <div className="row">
        <div className="col-5">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Latest News</h4>
              <br />
              <h6 className="card-subtitle mb-2">Important Dates</h6>
              <p className="card-text">
                <div className="list-group" style={{ fontSize: "13px" }}>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action"
                  >
                    The last date for full length submission 15.10.21{" "}
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action"
                  >
                    Notification of acceptance 30.10.21{" "}
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action"
                  >
                    Registration of accepted papers without late fees 10.11.21{" "}
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action"
                  >
                    Convention dates 27.11.21 and 28.11.21{" "}
                  </a>
                </div>
              </p>
              <h6 className="card-subtitle mb-2 " style={{ display: "inline" }}>
                Paper Submission{" "}
              </h6>
              <a
                href="https://easychair.org/conferences/?conf=ncefes2021"
                className="card-link"
              >
                Link
              </a>
            </div>
          </div>
        </div>
        <div className="col-7">
          <div class="card">
            <div class="card-body">
              
              <h4 class="card-title" style={{textAlign:"center", fontWeight:"bold"}}>ABOUT THE CONVENTION</h4>
             
              <p class="card-text" style={{borderTop:"1px solid black", fontSize: "15px",textAlign: "justify"}}>
              <br />
                Electrical power systems have been traditionally designed taking
                energy from high voltage level and distributing it to lower
                voltage level networks. There are large generation units
                connected to transmission networks. But in the past few years a
                trend has been established wherein many small generators are
                connected to the distribution networks. However, future
                electricity systems will require massive deployment of
                distributed energy resources (DER), especially distributed
                generation (DG) based on renewable energy sources (RES).
                Efficient integration of this distributed generation requires
                network innovations. A development of active distribution
                network management, from centralized to more distributed system
                management, is needed. Information, communication, and control
                infrastructures will be needed with increasing complexity of
                system management. Therefore, there is a need to have
                deliberations on many issues specially the challenges and
                current trends associated with future electricity system.
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      
    </div>
  );
}
