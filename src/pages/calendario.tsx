import Calendario from "lib/pages/calendario";
import { getSportsEventsSchedule } from "lib/sheets";

export default Calendario;

export async function getStaticProps() {
  const data = await getSportsEventsSchedule();

  return {
    props: {
      events: data,
    },
  };
}
