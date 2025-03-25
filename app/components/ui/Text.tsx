type TextProps = {
  variant: "normal" | "small";
  children: React.ReactNode;
};

export default function Text({ variant, children }: TextProps) {
  const baseStyles = "text-zinc-600";
  switch (variant) {
    case "normal":
      return <p className={baseStyles}>{children}</p>;

    case "small":
      return <p className={baseStyles + "text-sm"}>{children}</p>;
  }
}
