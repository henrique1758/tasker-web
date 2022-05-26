import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { parseCookies } from "nookies";

export function withSSRAuth<P>(fn: GetServerSideProps<P>) {
  return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
    const { '@tskr:cookie': cookie } = parseCookies(ctx);

    if (!cookie) {
      return {
        redirect: {
          destination: '/',
          permanent: false
        }
      }
    }

    return fn(ctx)
  }
}