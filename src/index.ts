import express, { response, type Request, type Response } from 'express';
import { log } from './lib/logger';

const app = express();
const port = process.env['PORT'] || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export const main = () => {
  app.get('/healthz', (_req: Request, res: Response) => {
    log.info('health check');
    res.send({
      status: 'OK',
      uptime: process.uptime(),
    });
  });

  app.listen(port, () => {
    log.info(`Server listening on port ${port}`);
  });
};

main();
