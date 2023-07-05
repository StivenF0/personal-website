interface FooterRootProps {
  children: React.ReactNode;
}

export default function FooterRoot({ children }: FooterRootProps) {
  return (
    <footer className="h-24 bg-zinc-800 flex justify-between items-center px-12">
      {children}
    </footer>
  );
}
