import server from './server';
import { connect } from './models';

const { PORT: port = 4010 } = process.env;

const main = async (): Promise<void> => {
  await connect();
  await server.start({ port });
  console.log(`Listening at port: ${port}... `);
};

main().catch(console.log);
