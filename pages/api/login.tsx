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

  //요청이 post로 들어올때 
  if (req.method === "POST") {
    //쿠키를 담는다. 
    res.setHeader("Set-Cookie", "a_name=Mike;Max-Age=3600;HttpOnly,Secure");
    //응답 코드
    res.statusCode = 200;
    //담는 메시지 
    res.json({ message: "ok" });
  }
}
