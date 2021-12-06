import MeetupList from "../components/meetups/MeetupList";
import databaseLink from "../database/database";
import { useState, useEffect } from "react";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [LoadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    //useEffect allows us to specify when a function (fetch here) executes
    fetch(databaseLink())
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for(const key in data){
          const meetup = {
            id: key,
             ...data[key],
          };
          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      {/* <ul>
    {DUMMY_DATA.map((meetup) => {
      return <li key = {meetup.id}>{meetup.title}</li>
    })}
    </ul> */}
      <MeetupList meetups={LoadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
