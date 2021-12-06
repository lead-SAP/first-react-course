import { createContext, useState } from "react";

//start with capital charac. for react component names
const FavouritesContext = createContext({
  favourites: [],
  totalFavourites: 0,
  addFavourite: (favouriteMeetup) => {},
  removeFavourite: (meetupId) => {},
  itemIsFavourite: (meetupId) => {},
});

export function FavouritesContextProvider(props) {
  const [userFavourites, setUserFavourites] = useState([]);

  function addFavouriteHandler(favouriteMeetup) {
    // setUserFavourites(userFavourites.concat(favouriteMeetup)); Not //instantaneous, use below for better performance
    setUserFavourites((prevUserFavourites) => {
      return prevUserFavourites.concat(favouriteMeetup);
    });
  }

  function removeFavouriteHandler(meetupId) {
    setUserFavourites((prevUserFavourites) => {
      return prevUserFavourites.filter((meetup) => meetup.id !== meetupId); //returns true if they're not equal
    });
  }

  function itemIsFavouriteHandler(meetupId) {
    return userFavourites.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favourites: userFavourites,
    totalFavourites: userFavourites.length,
    addFavourite: addFavouriteHandler, //pointer at addFavouriteHandler
    removeFavourite: removeFavouriteHandler,
    itemIsFavourite: itemIsFavouriteHandler,

  };

  return (
    <FavouritesContext.Provider value={context}>
        {props.children}
    </FavouritesContext.Provider>
  );
}

export default FavouritesContext;
