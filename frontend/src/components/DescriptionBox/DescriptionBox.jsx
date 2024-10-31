import React, { useState } from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  const [description, setDescription] = useState("description");

  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div
          className={
            description === "description"
              ? "descriptionbox-nav-box"
              : "descriptionbox-nav-box fade"
          }
          onClick={() => setDescription("description")}
        >
          Description
        </div>
        <div
          className={
            description === "review"
              ? "descriptionbox-nav-box"
              : "descriptionbox-nav-box fade"
          }
          onClick={() => setDescription("review")}
        >
          Reviews (122)
        </div>
      </div>
      <div className="descriptionbox-description">
        {description === "description" ? (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            impedit recusandae adipisci, excepturi sapiente veniam voluptate
            sed, deserunt dolore porro quod maiores! Excepturi sed assumenda
            maxime, beatae iusto natus porro?
          </p>
        ) : (
          <p>Loved this product very much very good quality 10/10</p>
        )}
      </div>
    </div>
  );
};

export default DescriptionBox;
