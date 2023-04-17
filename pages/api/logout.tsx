// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string | null,
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  //   res.status(200).json({ name: null })

    //쿠키의 유효기간을 0으로 변경시킨다. 
    res.setHeader("Set-Cookie", "a_name=Mike;Max-Age=0;HttpOnly,Secure");
    //응답 코드
    res.statusCode = 200;
    //담는 메시지 
    res.json({ message: "로그아웃" });
  
}
