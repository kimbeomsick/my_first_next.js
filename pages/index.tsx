import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import axios from "axios";
import { useEffect, useState } from "react";
import ItemList from "./src/component/ItemList";
import { Header } from "semantic-ui-react";
import { Loader } from "semantic-ui-react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const API_URL =
    "https:///makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  function getData() {
    axios.get(API_URL).then((res: any) => {
      if (res.data) setList(res.data);
      setIsLoading(false);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Head>
        <title>my next.js</title>
        <meta name="description" content="my-first-next.js"/>
      </Head>
      {isLoading && (
        <div style={{ padding: "300px 0" }}>
          <Loader inline="centered" active>
            Loading
          </Loader>
        </div>
      )}

      {!isLoading && (
        <>
          <Header as="h3" style={{ paddingTop: 40 }}>
            베스트 상품
          </Header>
          <hr />
          <ItemList list={list.slice(0, 9)} />

          <Header as="h3" style={{ paddingTop: 40 }}>
            신상품
          </Header>
          <hr />
          <ItemList list={list.slice(9)} />
        </>
      )}
    </>
  );
}
