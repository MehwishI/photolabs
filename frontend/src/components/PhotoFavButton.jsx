import React, { useCallback, useEffect, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton(props) {
  const { id, favList, setFavList, modal } = props;

  const [photoIsFavorited, setPhotoIsFavorited] = useState(false);

  const handleClick = () => {
    //checking and setting photo as Favorite state
    photoIsFavorited ? setPhotoIsFavorited(false) : setPhotoIsFavorited(true);

    //updating favorite list
    setFavList(id);
  };
  //checking if the photo is already in the favList (passed from props)
  useEffect(() => {
    if (favList.length > 0) {
      if (favList.includes(id)) {
        setPhotoIsFavorited(true);
      } else {
        setPhotoIsFavorited(false);
      }
    }
  }, [favList]);

  return (
    <div>
      <button
        className={modal ? "favBtn-modal" : "favBtn"}
        onClick={() => handleClick()}
      >
        <FavIcon selected={photoIsFavorited} />
      </button>
    </div>
  );
}

export default PhotoFavButton;
