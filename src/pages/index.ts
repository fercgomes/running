import Home from "lib/pages/home";
import { getSportsEventsSchedule } from "lib/sheets";

export default Home;

export async function getStaticProps() {
  const data = await getSportsEventsSchedule();

  return {
    props: {
      events: data,
    },
  };
}
