import { Providers } from "@/redux-toolkit/provider";
import "@/public/assets/scss/globals.scss";
import { languages } from "../i18n/settings";

export const metadata = {
  title: "Comprayviaja",
  description: "themes.pixelstrap.com",
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}
const RootLayout = ({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: { lng: string };
}) => {
  return (
    <html lang={lng} >
      <head>
        <link href="https://fonts.googleapis.com/css?family=Vampiro+One&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,800;0,900;1,700&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700;800;900&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css?family=Nunito:300,300i,400,400i,600,600i,700,700i,800,800i,900,900i&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css?family=Dancing+Script&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css?family=Work+Sans:400,500,600,700,800,900&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css?family=Pacifico&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Bangers&display=swap" rel="stylesheet"/>
      </head>
      <body>
        <Providers>
          <>{children}</>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;