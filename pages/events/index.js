import Link from "next/link";

export default function AllEventsPage() {
  return (
    <div>
      <h1>All Events</h1>
      <ul>
        <li>
          <Link
            href={{
              pathname: "/events/[id]",
              query: { id: "wale" },
            }}
          >
            wale
          </Link>
        </li>
        <li></li>
      </ul>
    </div>
  );
}
