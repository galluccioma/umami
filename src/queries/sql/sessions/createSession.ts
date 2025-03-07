import { Prisma } from '@prisma/client';
import prisma from '@/lib/prisma';

export async function createSession(data: Prisma.SessionCreateInput) {
  const {
    id,
    websiteId,
    hostname,
    browser,
    os,
    device,
    screen,
    language,
    country,
    subdivision1,
    subdivision2,
    city,
  } = data;

  return prisma.client.session.create({
    data: {
      id,
      websiteId,
      hostname,
      browser,
      os,
      device,
      screen,
      language,
      country,
      subdivision1,
      subdivision2,
      city,
    },
  });
}
