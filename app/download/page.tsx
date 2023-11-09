import PageView from "../components/pageView";

export default function Download({ searchParams }: { searchParams: any }) {
  const url = searchParams.url;

  return (
    <>
      <PageView urlPage={url}></PageView>
    </>
  );
}
