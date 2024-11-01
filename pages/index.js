import Link from "next/link";
import { getFeaturedEvents } from "@/dummy-data";
import EventList from "@/components/event-item";

export default function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}
