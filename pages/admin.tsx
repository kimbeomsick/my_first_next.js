import { useEffect, useState } from "react"
import axios from "axios";
import { useRouter } from "next/router";
import { Button } from "semantic-ui-react";

export default function Admin(){
    const router = useRouter();
    const [isLogin , setIsLogin] = useState(false); // 시작은 로그인 안한걸로


    //로그인이 되었는지 확인하는 api
    function checkLogin(){
        axios.get('/api/isLogin').then(res =>{
            if(res.status === 200 && res.data.name){
                //로그인 된 상태이다.
                setIsLogin(true)
            }else{
                router.push("/login")
                //로그인 되지 않은 상태기 때문에 로그인페이지로 이동한다. 
            }
        })
    }

    function logout(){
        axios.get("/api/logout").then(res=>{
            if(res.status === 200){
                router.push("/")
            }
        })
    }

    useEffect(()=>{
        checkLogin();
    },[])

    return (
        <>
        <p>admin</p>
        {isLogin && <Button color="red" onClick={logout}>로그아웃</Button>}

        </>
    )
}