import { useNavigate } from "react-router-dom"; //this instead of useHistory because of react v6

import NewMeetupForm from "../components/meetups/NewMeetupForm";
import databaseLink from "../database/database";

function NewMeetupPage() {
  const navigate = useNavigate();

  function addMeetUpHandler(meetupData) {
    fetch(
      databaseLink(),
      {
        method: "POST", //This and below is needed to change fetch from get to post
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      navigate('/');
    })
  }
  return (
    <section>
      <h1>Add New Meetup</h1>

      <NewMeetupForm onAddMeetup={addMeetUpHandler} />
    </section>
  );
}

export default NewMeetupPage;
