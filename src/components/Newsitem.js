import React, { Component } from "react";

export class Newsitem extends Component {

  render() {
      // let {title, description, imageurl, newsurl} = this.props;
    return (
      <div>
        <div className="card" style={{width: '18rem',}} >
          <img src={this.props.imageurl === null?"https://images.indianexpress.com/2021/12/GettyImages-amla-for-hair-care_759.jpg":this.props.imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-dark">{this.props.title}</h5>
            <p className="card-text">
              {this.props.description}...<br/><br/>Author: {this.props.author === null?"Anonymous":this.props.author}
            </p>
            <a rel ="noreferrer" href={this.props.newsurl} target="_blank" className="btn btn-dark btn-sm">
              Read More
            </a> 
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
