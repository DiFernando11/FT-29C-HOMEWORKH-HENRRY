// import React from 'react';
// import './Card.css';

// export default function Card ({min, max, name, img, onClose, id}) {
//     return (
//       <div className="card">
//         <div id="closeIcon" className="row">
//             <button onClick={onClose} className="btn btn-sm btn-danger">X</button>
//         </div>
//         <div className="card-body">
//           <h5 className="card-title">{name}</h5>
//           <div className="row">
//             <div className="col-sm-4 col-md-4 col-lg-4">
//               <p>Min</p>
//               <p>{min}°</p>
//             </div>
//             <div className="col-sm-4 col-md-4 col-lg-4">
//               <p>Max</p>
//               <p>{max}°</p>
//             </div>
//             <div className="col-sm-4 col-md-4 col-lg-4">
//               <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="" />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
// };
import React from "react";
import "../styles/Card.modules.css";

export default function Card({ max, min, name, img, onClose }) {
  // acá va tu código
  //console.log(cardStyle , "emvop");
  return (
    <div className="containerCard">
      <button onClick={onClose}> X </button>
      <h2>{name}</h2>
      <div className="containerIformation">
        <p>
          <b>Min</b> <span>{min}°</span>
        </p>
        <p>
          <b>Max</b> <span>{max}°</span>
        </p>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt={img} />
      </div>
    </div>
  );
}
