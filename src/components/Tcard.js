import React from 'react'

const Tcard = ({entry}) => {

    const numToStarRating = (num) => {
        // return <i className="fab fa-facebook"></i>;

        const icon = '<i className="fab fa-facebook"></i>';
        var result= "";
        for(let i=0; i<num;i++){
            result = result + icon;
        }
        var htmlObject = document.createElement("div");
        htmlObject.innerHTML = "";
        return htmlObject;
    }
  return (
    <div class="card">
      <img
        src="https://hips.hearstapps.com/rover/profile_photos/67055711-c808-4a4d-811a-e7155a2bce10_1667409691.file"
        alt="abcd"
      />
      <h4>{entry.name}</h4>
      <span>
        {/* {entry.rating.map((e) => (
          <i className="fab fa-facebook"></i>
        ))} */}
      </span>
      <blockquote>
        <p>{entry.quote}</p>
      </blockquote>
    </div>
  );
}

export default Tcard