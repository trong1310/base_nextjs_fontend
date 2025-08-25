import { Fragment, ReactElement, useEffect } from "react";

import Head from "next/head";
import { Main } from "next/document";
import MainIndex from "~/components/MainIndex";

export default function Page() {
  return (
    <Fragment>
      <Head>
        <title>Title</title>
      </Head>
<MainIndex/>
    </Fragment>
  );
}

Page.getLayout = function (page: ReactElement) {
  return page;
};
