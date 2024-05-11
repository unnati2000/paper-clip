import Navbar from "@/components/navbar/Navbar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col w-full">
      <Navbar />
      <section className="max-w-3xl mx-auto w-full">{children}</section>
    </main>
  );
};

export default HomeLayout;

