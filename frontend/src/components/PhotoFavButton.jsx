import React, { useCallback, useEffect, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton(props) {
  //const [favClass, setFavClass] = useState("photo-list__fav-icon");

  const { id, favList, setFavList, modal } = props;
  //console.log("props:", props);

  const [photoIsFavorited, setPhotoIsFavorited] = useState(false);

  const handleClick = () => {
    // console.log("fav button clicked!");
    // setFavClass("photo-list__fav-icon-svg");

    console.log("photoIsFavorited before set with id:", photoIsFavorited, id);

    //check and setting photoisFavorite
    photoIsFavorited ? setPhotoIsFavorited(false) : setPhotoIsFavorited(true);

    console.log("photoIsFavorited after set with id:", photoIsFavorited, id);

    //add this photo to favList
    let newFavList;
    // console.log("id of this photo", id);
    console.log(" current favList:", favList);
    // if (favList.includes(id)) {
    //   //remove the photo from the fav list
    //   newFavList = favList.filter((item) => item !== id);
    // } else {
    //   //add to the new fav list
    //   newFavList = [...favList, id];
    // }
    // console.log("newFavList", newFavList);
    //updating favorite list
    setFavList(id);
  };
  //checking if the photo is already in the favList (passed from props)
  useEffect(() => {
    //console.log("FavList length", favList, favList.length);
    if (favList.length > 0) {
      //console.log("FavList length after if condition", favList, favList.length);
      if (favList.includes(id)) {
        setPhotoIsFavorited(true);
      } else {
        setPhotoIsFavorited(false);
      }
    }
  }, [favList]);
  // console.log("FavList", favList);

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
