export default function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="text-3xl font-bold text-center mb-16 uppercase tracking-wider relative w-fit mx-auto border-2 border-slate-900 px-6 py-2 z-10 transition-all duration-300 hover:text-white hover:border-transparent before:content-[''] before:absolute before:w-3 before:h-3 before:bg-blue-600 before:rounded-full before:-left-8 before:top-1/2 before:-translate-y-1/2 after:content-[''] after:absolute after:w-3 after:h-3 after:bg-blue-600 after:rounded-full after:-right-8 after:top-1/2 after:-translate-y-1/2 hover:before:animate-fill-left hover:after:animate-fill-right">
      {title}
    </h2>
  );
}
