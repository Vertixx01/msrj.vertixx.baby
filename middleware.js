import { next } from '@vercel/edge';

export default function middleware(req) {
  return next({
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  });
}