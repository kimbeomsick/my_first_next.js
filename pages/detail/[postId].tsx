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


  console.log(router.isFallback) //이걸로 현재 정적파일이 생성됐는지 아닌지 알 수 있다. 
  //이제 정적 파일이 생기기전까지 로딩 화면을 보여줄 수 있다. 
  if(router.isFallback){
    return(
      <div style={{padding:"100px 0"}}>
        <Loader active inline="centered">
          Loading
        </Loader>
      </div>
    )
  }
   
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



//동적을 생성되는 페이지를 미리 앞에 몇가지를 만들어둔다. 
export async function getStaticPaths() {

  //실제로는 동적으로 파일을 가져와서 paths에 넣는다. 
  const apiUrl = process.env.apiUrl || '';
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    // paths: [
    //   { params: { postId: "895" } },
    //   { params: { postId: "888" } },
    //   { params: { postId: "877" } },
    // ],

    paths:data.slice(0,9).map((item:any) =>{ 
      return{
        params:{
          postId : item.id.toString(),
        }
      }
    }),

    //처음 온 사용자는 로딩이 느리겠지만 나중에 온 사용자는 정적파일을 받기 때문에 더 빠른 로딩속도를 기대할 수 있다. 
    fallback: true, //이것 말고 다른 postId가 들어온다면 그때 paths에 추가하게 된다. 처음에는 3개만함 false로하면 다른 곳 들어갔을 때 500에러남 
  };
}

//서버사이드 랜더링 코드
export async function getStaticProps(context: any) {
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
      name: process.env.name,
    },
  };
}
