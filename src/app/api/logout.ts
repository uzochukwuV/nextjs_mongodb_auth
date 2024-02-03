import { serialize } from "cookie";
import { NextApiResponse, NextApiRequest } from "next";


export async function GET(req: NextApiRequest, res: NextApiResponse) {
    


    const response = res
      .setHeader(
        "Set-Cookie",
        serialize("token", '', {httpOnly: true, maxAge: 1,path:'/'})
      )
      .json({ message: "Logged Out successfully", success: true });
      
      
    return response;
 
  
}

export default GET;
