// import React from "react";
// import "./Pricing.css";

// function Pricing() {
//   return (
//     <div className="GlobalContainer">
//       {/* <div className="GlobalWrapper"></div> */}
//       <div id="Pricing" className="LPSection">
//           <div className="LPSectionBorder">
//             <div className="header">Gel Manicures</div>
//             <h2>The gel manicures are performed on your natural nail with a waterless manicure. It includes nail shaping and Russian Cuticle Care. If you're preference is to just push back the cuticle, please let me know. Products used are from <a href="https://kokoistusa.com/pages/what-is-japanese-gel">Kokoist</a>, a japanese brand that is vegan, and 9-free non toxic. Extensions are an add on option for $20.</h2>
//             <table>
//               <tbody>
//                 <tr>
//                   <th>Tiers</th>
//                   <th>Description</th>
//                   <th>Starting Price</th>
//                   {/* <th className="lastRow">Action</th> */}
//                 </tr>
//                 <tr>
//                   <td>Basic Nail Art</td>
//                   <td>One to two lines per nail, dots, two simple hearts per nail, on color chrome, on color cat eye, etc. (please note, I don't do simple french only)</td>
//                   <td>$80+</td>
//                   {/* <td className="lastRow">
//                     <div className="tableBtn">Book Now</div>
//                   </td> */}
//                 </tr>
//                 <tr>
//                   <td>Intermediate Nail Art</td>
//                   <td>hand painted designs, minimal 3D art, airbrush designs, minimal mixed media, etc. </td>
//                   <td>$100+</td>
//                   {/* <td className="lastRow">
//                     <div className="tableBtn">Book Now</div>
//                   </td> */}
//                 </tr>
//                 <tr>
//                 <td>Advanced Nail Art</td>
//                   <td>3D fruits, some hand painted designs, multiple charms, etc</td>
//                   <td>$120+</td>
//                   {/* <td className="lastRow">
//                     <div className="tableBtn">Book Now</div>
//                   </td> */}
//                 </tr>
//                 <tr>
//                   <td>Intricate Nail Art</td>
//                   <td>flowers, ink, chrome designs, encapsulations, etc.</td>
//                   <td>$140+</td>
//                   {/* <td className="lastRow">
//                     <div className="tableBtn">Book Now</div>
//                   </td> */}
//                 </tr>
//                 <tr>
//                   <td>Extravagant Nail Art</td>
//                   <td>any art that takes color mixing, linen patterns, paintings inspired nails, ultimate encapsulations, ultimate 3D handmade charms, etc.</td>
//                   <td>160+</td>
//                   {/* <td className="lastRow">
//                     <div className="tableBtn">Book Now</div>
//                   </td> */}
//                 </tr>
//               </tbody>
//             </table>
//             <h2>If unsure as to what kind of tier your design is, please email bb.love.nails92@gmail.com and I will gladly help.</h2>
//           </div>
//         </div>
//     </div>
//   );
// }

// export default Pricing;

import React from "react";
import "./Pricing.css";

function Pricing() {
  return (
    <div className="GlobalContainer">
      <div id="Pricing" className="GlobalWrapper">
        <div className="header">Gel Manicures</div>
        <h2>
          The gel manicures are performed on your natural nail with a waterless
          manicure. It includes nail shaping and Russian Cuticle Care. If you're
          preference is to just push back the cuticle, please let me know.
          Products used are from{" "}
          <a href="https://kokoistusa.com/pages/what-is-japanese-gel">
            Kokoist
          </a>
          , a japanese brand that is vegan, and 9-free non toxic. Extensions are
          an add on option for $20.
        </h2>
        <div class="flex-container">
          <div>Tiers</div>
          <div>Starting Price</div>
          <div>Description</div>
        </div>
        <div class="flex-container">
          <div>Basic Nail Art</div>
          <div>$80+</div>
          <div>
            One to two lines per nail, dots, two simple hearts per nail, on
            color chrome, on color cat eye, etc. (please note, I don't do simple
            french only)
          </div>
        </div>
        <div id="secondRow" className="flex-container">
          <div>Intermediate Nail Art</div>
          <div>$100+</div>
          <div>
            hand painted designs, minimal 3D art, airbrush designs, minimal
            mixed media, etc
          </div>
        </div>
        <div id="thirdRow" className="flex-container">
          <div>Advanced Nail Art</div>
          <div>$120+</div>
          <div>3D fruits, some hand painted designs, multiple charms, etc</div>
        </div>
        <div id="fourthRow" className="flex-container">
          <div>Intricate Nail Art</div>
          <div>$140+</div>
          <div>flowers, ink, chrome designs, encapsulations, etc</div>
        </div>
        <div id="fifthRow" className="flex-container">
          <div>Advanced Nail Art</div>
          <div>$160+</div>
          <div>
            any art that takes color mixing, linen patterns, paintings inspired
            nails, ultimate encapsulations, ultimate 3D handmade charms, etc{" "}
          </div>
        </div>
        <h2>
          If unsure as to what kind of tier your design is, please email
          bb.love.nails92@gmail.com and I will gladly help.
        </h2>
      </div>
    </div>
  );
}

export default Pricing;
