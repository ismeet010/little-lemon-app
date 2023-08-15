import React from 'react'
import Spclcard from './Spclcard';
import "../wspcl.css"

const Weekspcl = () => {
  const spcldata = [
    {
      imgsrc:
        "https://www.southernliving.com/thmb/iI2Pd7BIh0MFuQ79WIEtgli9Ji4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Extra_Easy_Lasagna_006_4x3-41b0a478514c43e9baed0659bd362625.jpg",
      imgalt: "spcl 1",
      name: "Lasagna",
      price: "$120",
      description: "La La lasagna",
    },
    {
      imgsrc:
        "https://www.southernliving.com/thmb/iI2Pd7BIh0MFuQ79WIEtgli9Ji4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Extra_Easy_Lasagna_006_4x3-41b0a478514c43e9baed0659bd362625.jpg",
      imgalt: "spcl 1",
      name: "Lasagna",
      price: "$120",
      description: "La La lasagna",
    },
    {
      imgsrc:
        "https://www.southernliving.com/thmb/iI2Pd7BIh0MFuQ79WIEtgli9Ji4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Extra_Easy_Lasagna_006_4x3-41b0a478514c43e9baed0659bd362625.jpg",
      imgalt: "spcl 1",
      name: "Lasagna",
      price: "$120",
      description: "La La lasagna",
    }
  ];
  return (
    <section className="wsp">
      <div className="max-width">
        <div>
          <h2 class="heading-gap">This week Specials!</h2>
          <button>Check menu</button>
        </div>
        <div class="wspcl">
          {spcldata.map((entry) => (
            <Spclcard entry={entry} data={entry} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Weekspcl