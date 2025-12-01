import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        {/* Meta Tags para SEO */}
        <meta name="description" content="Calculadora de notas acadêmicas para auxiliar estudantes universitários no cálculo de médias finais. Ferramenta gratuita e fácil de usar." />
        <meta name="keywords" content="calculadora, notas, acadêmicas, universidade, média, AV1, AV2, UNAMA" />
        <meta name="author" content="Estudantes de Ciência da Computação - UNAMA Parque Shopping" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://calculadora-nota-academica.nextlab.cloud/" />
        <meta property="og:title" content="Calculadora de Notas Acadêmicas" />
        <meta property="og:description" content="Ferramenta auxiliar para cálculo de médias universitárias. Calcule sua média final de forma rápida e fácil!" />
        <meta property="og:image" content="https://calculadora-nota-academica.nextlab.cloud/image-preview.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://calculadora-nota-academica.nextlab.cloud/" />
        <meta name="twitter:title" content="Calculadora de Notas Acadêmicas" />
        <meta name="twitter:description" content="Ferramenta auxiliar para cálculo de médias universitárias. Calcule sua média final de forma rápida e fácil!" />
        <meta name="twitter:image" content="https://calculadora-nota-academica.nextlab.cloud/image-preview.png" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
