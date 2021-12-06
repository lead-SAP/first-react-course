import FavouritesContext from "../store/favourites-context";
import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import { Link } from "react-router-dom";
import { classes } from "../components/meetups/NewMeetupForm.module.css";

function FavouritesPage() {
  const favouritesCtx = useContext(FavouritesContext);

  let content;
  if (favouritesCtx.totalFavourites === 0) {
    content = [
      
      <div><p>You got no favourites, add some?</p></div>,
      <div>
        <button>
          <Link to="/">All Meetups</Link>
        </button>
      </div>,
    ];
  } else {
    content = <MeetupList meetups={favouritesCtx.favourites}></MeetupList>;
  }

  return (
    <section>
      <h1>Favourites</h1>
      {content}
    </section>
  );
}

export default FavouritesPage;
