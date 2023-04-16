import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Item from "../src/component/Item";
import { Loader } from "semantic-ui-react";

export default function Post({ item, name }: any) {
  //여기 코드가 전부 필요 없다.

  //현재 로딩중인지 표시할 state
  const [isLoading, setIsLoading] = useState(true);

  //useRouter를 사용해서 현제 url의 params를 가져올 수 있다.
  const router = useRouter();
  const { postId } = router.query;

  //axios로 받아온 데이터를 저장할 공간
  const [page, setPage] = useState("");

  //클라이언트 사이드 랜더링
  const API_URL = `https:///makeup-api.herokuapp.com/api/v1/products/${postId}json`;

  function getData() {
    axios.get(API_URL).then((res: any) => {
      setPage(res.data);
      // 로딩이 완료되면 로팅 종료 표시 해준다.
      setIsLoading(false);
    });
  }

  useEffect(() => {
    if (postId) {
      getData();
    }
  }, [postId]);

  //현재 이상품에 대한 아무 매타 정보도 얻을 수 없다.
  //그렇기 때문에 서버사이드 랜더링이 필요하다.
  //그래야 검색엔진이 페이지의 정보를 읽을 수 있다.
  return (
    <>
      {/* 클라이언트 사이드 랜더링 */}
      {/* {isLoading ? (

          <div style={{ padding: "300px 0" }}>
          <Loader inline="centered" active>
            Loading
          </Loader>
        </div>
    ) : (
        <Item item={item}></Item>
    )} */}

      {item && (
        <>
          <Head>
            <title>상세 페이지</title>
            <meta
              name="상세 페지이"
              content="제품에 대한 상세 페이지 입니다. "
              />
          </Head>
              {name}환경입니다.
          <Item item={item}></Item>
        </>
      )}
    </>
  );
}

//서버사이드 랜더링 코드 
export async function getServerSideProps(context: any) {
  //현제 url의 params를 꺼내올 수 있다.
  const id = context.params.postId;

  //이곳은 node.js 환경이라고 할 수 있다. 
  // 서버에서 동작하기 때문에 window. 같은거 사용하면 에러가 발생한다. 
  const apiUrl = `https:///makeup-api.herokuapp.com/api/v1/products/${id}json`;
  const res = await axios.get(apiUrl);
  const data = res.data;

  //이 값이 props로 내려가게 된다.
  return {
    props: {
      item: data, //이 프롭스는 Post 컴포넌트의 Props가 된다. 즉 위에서 item으로 받을 수있다.
      name : process.env.name
    },
  };
}
