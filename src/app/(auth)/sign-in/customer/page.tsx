import Section from "~/components/ui/Section";
import Image from "next/image";

export default function page() {
  return (
    <Section
      className="relative h-screen"
      containerClassName="container mx-auto flex flex-col items-center justify-center"
    >
      <Image
        src="/images/background/auth-bg.webp"
        alt="Sign in background"
        fill
        className="absolute left-0 top-0 object-cover"
        priority
        quality={100}
      />
      <div className="bg-primary-50/30 flex w-full max-w-md flex-col items-center justify-center rounded-lg p-4 shadow-md backdrop-blur-md">
        <h1 className="text-foreground text-2xl font-medium md:text-4xl">
          Pro Sign In
        </h1>
      </div>
    </Section>
  );
}
