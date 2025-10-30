import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer-05/footer-05";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center">
        <div className="flex-1 w-full flex flex-col gap-20 items-center">
          <div className="flex-1 flex flex-col gap-20 w-full p-5">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
