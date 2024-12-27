import "@/styles/globals.css";
import Head from "next/head";
import { RecoilRoot } from "recoil";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Head>
          <title>ByteBuilderCodeEditor</title>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='icon' href='/favicon.png' />
          <meta name='descript' content='Web application that contain leetcode problem and video solution'/>
      </Head>
      <ToastContainer />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
