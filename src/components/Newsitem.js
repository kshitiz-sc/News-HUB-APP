import React from "react";

const Newsitem = (props)=>{

  
      let {title, description, imageurl, newsurl, author} = props;
    return (
      <div>
        <div className="card" style={{width: '18rem'}} >
          <img src={imageurl === null?"https://images.indianexpress.com/2021/12/GettyImages-amla-for-hair-care_759.jpg":imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-dark">{title}</h5>
            <p className="card-text">
              {description}...<br/><br/>Author: {author === null?"Anonymous":author}
            </p>
            <a rel ="noreferrer" href={newsurl} target="_blank" className="btn btn-dark btn-sm">
              Read More
            </a> 
          </div>
        </div>
      </div>
    );
  
}

export default Newsitem;
