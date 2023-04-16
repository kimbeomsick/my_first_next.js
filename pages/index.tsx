import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import axios from "axios";
import { useEffect, useState } from "react";
import ItemList from "./src/component/ItemList";
import { Header, Divider } from "semantic-ui-react";
import { Loader } from "semantic-ui-react";

const inter = Inter({ subsets: ["latin"] });

export default function Home({list}:any) {

  // 정적 페이지를 만들게되면 이모든게 필요 없어진다. 
  // const [list, setList] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  // //브라우저 환경에서 환경변수 꺼내는 방법
  
  // const API_URL:string = process.env.NEXT_PUBLIC_API_URL || '';
  

  // function getData() {
  //   axios.get(API_URL).then((res: any) => {
  //     if (res.data) setList(res.data);
  //     console.log("화장품 정보 >>> ",res.data)
  //     setIsLoading(false);
  //   });
  // }

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <>
      <Head>
        <title>my next.js</title>
        <meta name="description" content="my-first-next.js"/>
      </Head>
      {/* {isLoading && (
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
      )} */}

        <Header as="h3" style={{ paddingTop: 40 }}>
            베스트 상품
          </Header>
          <Divider />
          {list && <ItemList list={list.slice(0, 9)} />}

          <Header as="h3" style={{ paddingTop: 40 }}>
            신상품
          </Header>
          <Divider />
          {list &&<ItemList list={list.slice(9)} />}
    </>
  );
}

//이제 이거 사용하면 정적페이지를 만드는것이라 로딩화면이 필요가 없다. 
export async function getStaticProps(){
  const apiUrl = process.env.apiUrl || ''; //node.js환경에서 불러오는거라 NEXT_PUBLIC 사용 안해도 됨 
  const res = await axios.get(apiUrl);

  return {
    props:{
      list:res.data,
      name:process.env.name,
    }
  }

}
