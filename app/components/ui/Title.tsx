type TitleProps = {
  variant: "h1" | "h2" | "h3" | "h4";
  children: React.ReactNode;
  className?: string;
};

export default function Title({ variant, children, className }: TitleProps) {
  switch (variant) {
    case "h1":
      return (
        <h1 className={`text-3xl ${className ? className : ""}`}>{children}</h1>
      );

    case "h2":
      return (
        <h2 className={`text-2xl ${className ? className : ""}`}>{children}</h2>
      );

    case "h3":
      return (
        <h3 className={`text-lg ${className ? className : ""}`}>{children}</h3>
      );

    case "h4":
      return (
        <h4 className={`text-base ${className ? className : ""}`}>
          {children}
        </h4>
      );
  }
}
