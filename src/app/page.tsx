import Link from "next/link";

export default function LandingPage() {
  return (
    <section>
      <h1>Hello ecolify World!</h1>

      <Link
        className={"font-bold text-sky-800 hover:underline"}
        href={"/articles"}
      >
        Show articles
      </Link>
    </section>
  );
}
