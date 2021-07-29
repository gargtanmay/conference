import React from "react";

export default function Call() {
  return (
    <div>
      <br />
      <div class="card" style={{ padding: "10px" }}>
        <div class="card-body">
          <h5 class="card-title">Call for Papers</h5>
          <p class="card-text" style={{textAlign: "justify"}}>
            The NCEFES 2021 aims to bring the researchers, academicians,
            industry, and government personnel together to share and discuss the
            various aspects of Future Electricity Systems. The convention will
            witness multiple eminent keynote speakers from academia and industry
            from all over the world along with the presentation of accepted
            peer-reviewed articles. The after-conference proceeding of the
            NCEFES 2021 will be published in Springer Book Series.
          </p>
          <br />
          <p style={{margin:"0px"}}>
            The topics covered (but are not limited to) in the conference are as
            follows:::
          </p>
        </div>
      <div className="table-responsive">
        <table className="table table-striped table-bordered border-dark">
          <tbody>
            <tr>
              <td>Distributed generation and Power Quality</td>
              <td>Renewable energy/Alternative Energy</td>
              <td>Reliability of distributed energy systems</td>
            </tr>
            <tr>
              <td>Smart micro grid</td>
              <td>Advanced monitoring and novel control strategies</td>
              <td>Real time simulation and contingencies analysis</td>
            </tr>
            <tr>
              <td>Self-Healing Wide-Area Protection and Islanding</td>
              <td>Regulatory issues including various barriers</td>
              <td>Standards (IEEE 1547, UL-1741, etc.)</td>
            </tr>
            <tr>
              <td>Environmental issues</td>
              <td>Ancillary services and metering</td>
              <td>Economic benefits</td>
            </tr>
            <tr>
              <td>Application of Machine Learning in Power Systems</td>
              <td>Load Forecasting</td>
              <td>Data Acqisition</td>
            </tr>
            <tr>
              <td>Internet of Things (IOT)</td>
              <td>Future Electricity Systems</td>
              <td>Security Concerns</td>
            </tr>
            <tr>
              <td>Reactive Power Control and Pricing</td>
              <td>Provision of Scada in Transmission and Distribution</td>
              <td>Sustainable Development and Renewable Energy</td>
            </tr>
            <tr>
              <td>Integration of Communication Technology</td>
              <td>FACTs Controller</td>
              <td>Energy Conservation</td>
            </tr>
          </tbody>
        </table>
        </div>
        <p style={{textAlign: "justify"}}>
          The papers will be considered for possible publication on the
          understanding that these have not been submitted to any other
          publisher. The copyright of papers accepted for publication lies with
          The Institution of Engineers (India) and reproduction of the papers or
          any part thereof is not allowed without the permission of the
          Institution. Contributors are required to sign a Declaration Form as
          enclosed to this effect while submitting their papers. As per Bye-Law
          118 of IEI, Copyright of each paper published in Institution Journals
          or Proceedings in full or in Abstract at its Centers shall lie with
          the Institution.
        </p>
      </div>
      <br />
    </div>
  );
}
