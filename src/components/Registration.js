import React from "react";

export default function Registration() {
  return (
    <div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">REGISTRATION & PAYMENTS</h5>
          <p class="card-text">
            All payments are to be made through crossed Demand Draft / Cheque /
            NEFT/ Online Net Banking Transfer In favour of “The Institution of
            Engineers (India), Jodhpur Local Center”.
            <br />
            In case of NEFT / OnlineNet Banking transfer please mention the
            following:
            <br />
            <ul>
              <li>
                Beneficiary Name: The Institution of Engineers (India), Jodhpur
              </li>
              <li>Bank of Baroda: University Campus Branch, Jodhpur</li>
              <li>Account No.: 05710100000119 </li>
              <li>IFSC Code: BARB0UNIJOD (Fifth character is numeric Zero)</li>
            </ul>
            <table className="table table-striped table-bordered border-dark">
            <thead>
                    <tr>
                  <th>Author Category</th>
                  <th>Registration Charges upto 10.11.2021</th>
                  <th>Registration Charges after 10.11.2021</th>
                  </tr>
                </thead>
              <tbody>
               
                <tr>
                  <td>Regular Author from India</td>
                  <td>4000 INR</td>
                  <td>5000 INR</td>
                </tr>
                <tr>
                  <td>Regular Author from outside India</td>
                  <td>120 USD</td>
                  <td>150 USD</td>
                </tr>
                <tr>
                  <td>
                    Listener (Non-Author/Co-Author/ General Participants) from
                    India
                  </td>
                  <td>1500 INR</td>
                  <td>2000 INR</td>
                </tr>
                <tr>
                  <td>
                    Listener (Non-Author/Co-Author/ General Participants) from
                    Outside India
                  </td>
                  <td>50 USD</td>
                  <td>750 USD</td>
                </tr>
              </tbody>
            </table>
          </p>
        </div>
      </div>
    </div>
  );
}
