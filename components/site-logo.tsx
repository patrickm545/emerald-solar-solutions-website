import Image from "next/image";
import Link from "next/link";

type SiteLogoProps = {
  className?: string;
  href?: string;
  theme?: "dark" | "light";
  width?: number;
};

export function SiteLogo({
  className = "",
  href = "/",
  theme = "dark",
  width = 260,
}: SiteLogoProps) {
  const src =
    theme === "dark" ? "/clada-logo-light.svg" : "/clada-logo-dark.svg";

  return (
    <Link
      aria-label="Clada Systems home"
      className={`inline-flex items-center ${className}`.trim()}
      href={href}
    >
      <Image
        priority
        alt="Clada Systems logo"
        height={Math.round(width * (160 / 780))}
        src={src}
        width={width}
      />
    </Link>
  );
}
