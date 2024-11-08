import EventList from "@/components/events/event-list";
import EventSearch from "@/components/events/event-search";
import { getAllEvents } from "@/helpers/api-util";
import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment } from "react";

export default function AllEventsPage(props) {
  const router = useRouter();
  const events = props.events;

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }
  return (
    <div>
      <Fragment>
        <Head>
          <title>ALL Events</title>
          <meta name="description" content="All events in life"></meta>
        </Head>
        <EventSearch onSearch={findEventsHandler} />
        <EventList items={events} />
      </Fragment>
    </div>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events: events,
    },
    revalidate: 60,
  };
}
