import axios from "axios";
import { useRouter } from "next/router";
import { Form, Button } from "semantic-ui-react";

export default function Login() {
    const router = useRouter();

    function login(){
        axios.post("/api/login").then(res => {
            if(res.status === 200){
                //로그인 성공
                router.push("/admin")
            }
        })
    }

  return (
    <div style={{ padding: "100px 0", textAlign: "center" }}>
      <Form>
        <Form.Field inline>
          <input type="text" placeholder="ID" />
        </Form.Field>
        <Form.Field inline>
          <input type="password" placeholder="PassWord" />
        </Form.Field>
        <Button color="blue" onClick={login}>로그인</Button>
      </Form>
    </div>
  );
}
