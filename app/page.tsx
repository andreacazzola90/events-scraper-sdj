"use client";
import UrlSearch from "./components/urlSearch";
import PageView from "./components/pageView";
import { useContext } from "react";
import { GlobalContext } from "./providers";

export default function Home() {
  const { urlPath, setUrlPath } = useContext(GlobalContext);
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col">
        <UrlSearch />
      </div>
    </main>
  );
}
