import Head from "next/head";
import Widget_appBar from "@/components/appbar/widget";
import Widget_campo_texto from "@/components/ShowResultado/widget";
import Widget_aviso from "@/components/componentAviso/widget";
import Footer from "@/components/footer/widget";

export default function Home() {
  return (
    <>
      <Head>
        <title>resultado - calculadora de notas</title>
        <meta name="description" content="calculadora de notas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="colunm">
        <Widget_appBar />
        <Widget_campo_texto />
        <Widget_aviso />
        <Footer />
      </div>
    </>
  );
}
