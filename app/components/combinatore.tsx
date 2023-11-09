"use client";
import { useContext, useRef } from "react";
import { GlobalContext } from "../providers";
import PageView from "./pageView";
import UrlSearch from "./urlSearch";

const Combinatore = () => {
  const { urlPath, setUrlPath } = useContext(GlobalContext);

  return (
    <>
      <UrlSearch>
        <PageView urlPage={"https://www.npmjs.com/package/swr"} />
      </UrlSearch>
    </>
  );
};
export default Combinatore;
