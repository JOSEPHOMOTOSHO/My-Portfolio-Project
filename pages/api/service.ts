import { NextApiRequest, NextApiResponse } from "next";
import { services } from "../../data";

const apiFunction = (req: NextApiRequest, res: NextApiResponse) => {
  //by default the making an api call will be with the get request
  console.log(services);
  res.status(200).json({ services });
};

export default apiFunction;
