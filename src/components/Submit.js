import React from "react";
import Doc from "../download/LatexTemplate.zip";
import Doc1 from "../download/Word Template.zip";
export default function Submit() {
  return (
    <div>
      <br />
      <div class="card" style={{ padding: "10px", textAlign: "justify" }}>
        <div class="card-body">
          <h5 class="card-title">Paper Submission</h5>
          <p class="card-text">
            The authors are invited to submit the Full papers of the
            Research/Review Papers. The papers will be peer-reviewed and only
            the accepted and registered papers will be considered for
            presentation during the conference and publication in the
            proceedings.
            <br />
            <br />
            <h6>
              NOTE : Acceptance of a full-length submission is strictly based on
              the reviewers’ comments.
            </h6>
            All submissions need to be submitted through the easechair using the
            link:
            <br />
            <a href="https://easychair.org/conferences/?conf=ncefes2021">
              https://easychair.org/conferences/?conf=ncefes2021
            </a>
            <br />
            <br />
            At least one of the authors of an accepted paper needs to register
            for the conference and to present the paper(s), through an Online
            Mode presentation. All manuscripts should be prepared in the
            following Springer's Book Chapter template.
          </p>
          <br />

          <a href={Doc} download="Latex Template" target="_blank">
            <button className="btn btn-warning">Latex Template</button>
          </a>
          <br />
          <br />
          <a href={Doc1} download="Word Template" target="_blank">
            <button className="btn btn-warning" >Word Template</button>
          </a>
        </div>
        <br />
      </div>
    </div>
  );
}
