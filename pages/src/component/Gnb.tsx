
import { Menu } from "semantic-ui-react";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Gnb() {

    //라우팅을 지원하는 훅이다. 
    const router = useRouter();
    
    //페이지에 관한 모든 정보가 들어있다. 
    // console.log(router)


    //router를 사용해서 활성화 시켰다. 
    let activeItem;
    if(router.pathname === '/'){
        activeItem ="home"
    }
    if(router.pathname ==="/about"){
        activeItem="about"
    }



    //시멘틱 ui가 제공하는 data이다. name은 속성의 name을 가리킨다.
    function goLink(e:any, data:any){ 
        if(data.name === "home"){
            //push로 원하는 페이지로 이동할 수 있다. 
            router.push("/");
        }else if(data.name === "about"){
            router.push("/about")
            // location.href="/about"  
            //이렇게 해도 된다. 하지만 페이지가 항상 새로고침된다. 
            //안의 내용물만 바뀌는게 아니라 아예 새로고침 되기 때문에 재사용되는 부분까지 불러오게 된다. 
            //spa의 장점이 사라진다. 그리고 상태관리도 다 날아가게 된다. 
        }else if(data.name === "content"){
            router.push("/content")
            //자주 사용하는 에러페이지가 서버에서 랜더링 된다면 괜히 비용만 증가하고 별로 좋지 않다. 
            //그래서 next.js에서는 이런 페이지가 static으로 제공된다. 
        }
    }


  return (
    <Menu inverted>
      <Menu.Item
        name="home"
        active={activeItem === "home"}
        onClick={goLink}
      />
      <Menu.Item
        name="about"
        active={activeItem === "about"}
        onClick={goLink}
      />
      <Menu.Item
        name="content"
        active={activeItem === "content"}
        onClick={goLink}
      />
     
    </Menu>
  );
}
