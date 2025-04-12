import Footer from "./footer";
import { Navigation } from "./nav";

export default function GlobalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex flex-col'>
      {/* <Announcement hidden={true} category='news' title='' cta='Learn more' /> */}
      <Navigation />
      {children}
      {/* <CookieBar /> */}
      <Footer />
    </div>
  );
}
