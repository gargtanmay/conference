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
            The authors are invited to submit the Full papers of their Research/Review work. 
            The papers will be peer-reviewed and only the accepted and registered papers will be considered for presentation during 
            the convention and publication in the proceedings/Journals
            <br />
            <br />
            <h6>
              Guidelines for Authors
            </h6>
            Authors intending to submit a paper for the National Convention are advised to adhere to the guidelines as mentioned below:
            <br />
            <br />
            1. Papers should be camera-ready in MS-Word format, not exceeding 3000 words in length and should not carry more than 5 illustrations/photographs.
            <br />
            2. The language of the Publication is English. The mode of presentation should be in third person.
            <br />
            3. SI units should be used wherever applicable. Other units, if used, should be given only in parentheses preceded by SI units.
            <br />
            4. Mathematical symbols should be typed and care should be taken to differentiate between similar characters (e.g. 1 and I), upper and lower case letters and superscripts and subscripts.
            <br />
            5. Lengthy mathematical proofs and derivations and extensive test data should be given as an appendix.
            <br />
            6. The Template of Paper can be downloaded from the link:&nbsp; 
            <br />
            <br />
            <a href="https://www.ieindia.org/webui/IEI-Activities.aspx#Call_Papers" target="_blank">
              <button className="btn btn-warning" >Template</button>
            </a>
            <br />
            <br />
            
            <h6>
              The papers will be submitted in two-step process
            </h6>
            <p>Step-1</p>
            Process of submission:
            <br/>
            1. Go to <a href="https://easychair.org/conferences/?conf=ncefes2021" target="_blank">https://easychair.org/conferences/?conf=ncefes2021</a>
            <br/>
            2. For existing EasyChair users - Login with username & password
            For new users – Create an EasyChair account by clicking create an account  and Login
            <br/>
            3. Submit the article by clicking make a new submission under the Author Heading.
            <br/>
            <br/>
            <p>Step-2</p>
            After the papers are peer-reviewed and accepted for presentation, the authors have to deposit the Registration Fee along with a 
            copyright declaration form (available at <a href="https://www.ieindia.org/webui/IEI-Activities.aspx#Call_Papers" target="_blank">here</a>), 
            details of which will be communicated to the author along with the acceptance.
            <br/>
            <br/>
            Publications:

            <ul>
              <li>
                Few selected papers will be recommended to the Journals of IEI Series B, which is SCOPUS-indexed. Fast-track review of those papers by the Editorial Team of the Journals will be ensured.
              </li>
              <li>
                Extended Version of few papers will be considered for publication in the Int. J. of Swarm Intelligence (<a href="https://www.inderscience.com/jhome.php?jcode=ijsi#journalDetail" target="_blank">https://www.inderscience.com/jhome.php?jcode=ijsi#journalDetail</a> )
              </li>
              <li>
                Technical Volume of the National Conventions with ISBN will be brought out.
              </li>
              <li>
              	In the Technical Volume, abstract of all papers accepted for presentation will be published along with the full text of the papers, which have not been recommended to the IEI journal.
              </li>
              <li>
              	The papers submitted to the journal, if found unacceptable by the Editorial Team of the journals, will be accommodated in a supplementary Technical Volume of the Convention.
              </li>
            </ul>
          </p>
          <br />

          
        </div>
        <br />
      </div>
    </div>
  );
}
