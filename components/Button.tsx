export function Shimmer({ value }: { value: string }) {
  const about = () => {
    window.location.href = "b.php";
  };
  return (
    <button
      onClick={about}
      className="m-auto flex h-20 mt-10 animate-shimmer items-center justify-center rounded-full lg:rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
    >
      {value}
    </button>
  );
}
