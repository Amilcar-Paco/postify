import { PrismaClient } from '@prisma/client';
import config from '../../config/default';
import logger from './logger';

const prismaOptions = {
  datasources: {
    db: {
      url: config.dbUri,
    },
  },
};

const prisma = new PrismaClient(prismaOptions);

async function connect() {
  try {
    await prisma.$connect();
    logger.info('DB connected');
  } catch (error) {
    logger.error('Could not connect to DB');
    process.exit(1);
  }
}

export { connect };
