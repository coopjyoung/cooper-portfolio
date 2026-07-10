export default function Footer() {
  return (
    <footer className="border-t border-foreground/10 px-6 py-8 text-center text-xs text-foreground/50">
      © {new Date().getFullYear()} Cooper Young. Built with Next.js, TypeScript,
      and Tailwind CSS.
    </footer>
  );
}
