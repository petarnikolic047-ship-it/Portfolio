import { Container } from "@/components/ui/Container";
import { footerContent } from "@/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-[var(--section-y)]">
      <Container className="text-center">
        <p className="type-xs uppercase tracking-[0.3em] text-white/40">
          (c) {new Date().getFullYear()} {footerContent.legal}
        </p>
      </Container>
    </footer>
  );
}

