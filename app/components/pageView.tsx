import { JSDOM } from "jsdom";
import Image from "next/image";

async function getData(urlPage: URL) {
  const obj = JSDOM.fromURL(urlPage.toString()).then((dom: any) => {
    const objHtml = {
      title: null,
      description: null,
      image: "",
      date: null,
      body: null,
    };

    const url = urlPage.toString();
    const page = dom.window.document;
    const pageUrl = new URL(url);
    const host = pageUrl.host;
    console.log(host);

    if (url.includes("npmjs")) {
      objHtml.title = page.querySelector("h1").textContent;
      objHtml.description = page.querySelector("#readme").textContent;
      objHtml.image = page.querySelector("img").getAttribute("src");
    } else if (url.includes("facebook")) {
      objHtml.title = page.querySelector("title").textContent;
      objHtml.description = page.querySelector(
        "script[data-content-len='16902']"
      );
      //objHtml.image = page.querySelector("img");
    } else if (url.includes("visitschio.it")) {
      objHtml.title = page.querySelector("h1").textContent;
      objHtml.description =
        page.querySelector("#event_description").textContent;
      objHtml.date = page.querySelector(".bg-eventi.text-small").textContent;
      objHtml.image = page.querySelector("img.img-show").getAttribute("src");
    } else if (url.includes("comune.schio.vi.it")) {
      objHtml.title = page.querySelector("h1").textContent;
      objHtml.description = page.querySelector(".dati").textContent;
      objHtml.date = page.querySelector("strong[text='Data inizio evento']");
      const img = `http://${host}${page
        .querySelector(".imgText")
        .querySelector("img")
        .getAttribute("src")}`;
      objHtml.image = new URL(
        "https://www.comune.schio.vi.it/alfstreaming-servlet/streamer/resourceId/c26b0267-09d0-4858-acf1-462670b0500d/HIMMAPAN"
      ).toString();
    }

    return objHtml;
  });

  return obj;
}

export default async function PageView({ urlPage }: { urlPage: URL }) {
  const res = await getData(urlPage);

  return (
    <>
      <div className="form-control">
        <label className="input-group">
          <span>Url</span>
          <input
            type="text"
            value={urlPage.toString()}
            className="input input-bordered"
          />
        </label>
        <label className="input-group">
          <span>Title</span>
          <input
            type="text"
            value={res?.title ? res?.title : ""}
            className="input input-bordered"
          />
        </label>
        <label className="input-group">
          <span>Description</span>
          <textarea
            className="textarea textarea-bordered"
            value={res?.description ? res?.description : ""}
          ></textarea>
        </label>
      </div>
      <p>{res.date}</p>

      {/* {res.image && (
        <Image
          src={res.image}
          width={500}
          height={500}
          alt="Picture of the author"
        />
      )} */}
      <img src={res.image} width={400}></img>
      {res.image}

      <p>{res.body}</p>
    </>
  );
}
