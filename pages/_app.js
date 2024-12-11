import Head from "next/head";
import Layout from "@/components/layout/layout";
import "../styles/globals.css";

import { NotificationContextProvider } from "@/store/notification-cotext";

export default function MyApp({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
      <Layout>
        <Head>
          <title>Life Events</title>
          <meta name="description" content="ALL IS WELL" />
          <meta name="viewport" content="intial-scale=1.0 width=device-width" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </NotificationContextProvider>
  );
}
