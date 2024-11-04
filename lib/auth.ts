import { getServerSession as getNextAuthServerSession } from 'next-auth';
import { authOptions } from './auth-options';

export async function getServerSession() {
  return await getNextAuthServerSession(authOptions);
}
