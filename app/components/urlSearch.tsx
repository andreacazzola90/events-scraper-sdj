"use client";
import { useContext, useRef, useState } from "react";
import { GlobalContext } from "../providers";
import PageView from "./pageView";
import Link from "next/link";
import Router from "next/router";

const UrlSearch = () => {
  const [visible, setVisible] = useState(false);
  const { urlPath, setUrlPath } = useContext(GlobalContext);
  const myRef = useRef<any>();
  const [firstName, setFirstName] = useState("");

  return (
    <>
      <input
        type="text"
        placeholder="Type here"
        onChange={(e) => setFirstName(e.target.value)}
        ref={myRef}
        className="input input-bordered w-full max-w-xs"
      />

      <Link
        className="mx-auto mt-4"
        href={{
          pathname: "/download",
          query: { url: firstName }, // the data
        }}
      >
        <button className="btn btn-secondary ">Go</button>
      </Link>
    </>
  );
};
export default UrlSearch;
