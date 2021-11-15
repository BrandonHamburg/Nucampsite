import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
import { COMMENTS } from "../shared/comments";

class CampsiteInfoComponent extends Component {
  renderCampsite(campsite) {
    return (
      <div class="col-md-5 m-1">
        <Card>
          <CardImg top src={campsite.image} alt={campsite.name} />
          <CardBody>
            <CardTitle>{campsite.name}</CardTitle>
            <CardText>{campsite.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }

  renderComments(comments) {
    if (CampsiteInfoComponent.comments) {
      return (
        <div className="col-md-5 m-1">
          <h4>Comments</h4>
          {comments.map((comment) => {
            return (
              <div key={comment.id}>
                <p>{comment.text}</p>
                <p>
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                  }).format(new Date(Date.parse(comment.date)))}
                </p>
              </div>
            );
          })}
        </div>
      );
    }
    <div></div>;
  }

  render() {
    if (CampsiteInfoComponent.campsite) {
      return <div className="row">{this.renderCampsite(this.campsite)}</div>;
    }
    return <div></div>;
  }
}

export default CampsiteInfoComponent;
