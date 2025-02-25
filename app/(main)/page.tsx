import MainPage from "./(components)/Main";

export default async function Home() {
  const res = await fetch(
    `https://openapi.naver.com/v1/search/book.json?query='힐링'&display=100&start=1`,
    {
      method: "GET",
      headers: {
        "X-Naver-Client-Id": process.env.NEXT_PUBLIC_NAVER_CLIENT_ID || "",
        "X-Naver-Client-Secret":
          process.env.NEXT_PUBLIC_NAVER_CLIENT_SECRET || "",
      },
    },
  );

  const { items } = await res.json();

  return <MainPage items={items} />;
}
