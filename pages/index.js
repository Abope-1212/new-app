import Head from "next/head";

import { getFeaturedEvents } from "@/helpers/api-util";
import EventList from "@/components/events/event-list";

export default function HomePage(props) {
  return (
    <div>
      <Head>
        <title>Life Event</title>
        <meta
          name="description"
          content="Find alot of great events that allows you to evolve"
        ></meta>
      </Head>
      <EventList items={props.events} />
    </div>
  );
}
export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}
