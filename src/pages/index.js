import Head from "next/head";
import Widget_appBar from "@/components/appbar/widget";
import Widget_campo_texto from "@/components/inputTextNotas/widget";
import Widget_ComoUsar from "@/components/comoUsar/widget";
import Widget_Projetos from "@/components/projetos/widget";
import Footer from "@/components/footer/widget";

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio - calculadora de notas</title>
        <meta name="description" content="calculadora de notas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="colunm">
        <Widget_appBar />
        <Widget_campo_texto />
        <Widget_ComoUsar />
        <Widget_Projetos />
        <Footer />
      </div>
    </>
  );
}
