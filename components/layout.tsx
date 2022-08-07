import Head from "next/head";

type Props = {
  children?: JSX.Element | JSX.Element[];
  title?: string;
};

const Layout = ({ children, title }: Props) => {
  return (
    <div>
      <Head>
        <title>{title ? title + " | PARTY!" : "PARTY!"}</title>
        <link rel="icon" href="/favicon.svg" />;
      </Head>
      {children}
    </div>
  );
};

export default Layout;
