import { FooterWordmark } from "@/components/blocks/footer-wordmark";

export interface FooterProps {
  readonly onReplayIntro?: () => void;
}

export function Footer({ onReplayIntro }: FooterProps = {}) {
  return <FooterWordmark onReplayIntro={onReplayIntro} />;
}
