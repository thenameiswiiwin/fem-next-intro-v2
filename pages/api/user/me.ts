import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  me: boolean;
};

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  req.method === 'GET' && res.status(200).json({ me: true });
  /* req.method === 'GET'
    ? res.status(200).json({ me: true })
    : res.status(405).end(); */
};

export default handler;
