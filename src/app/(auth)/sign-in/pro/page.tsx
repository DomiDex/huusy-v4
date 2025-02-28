import Section from "~/components/ui/Section";
import Image from "next/image";
import SignInProForm from "~/components/auth/pro/SignInProForm";
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
      <div className="text-primary-50 bg-primary-950/50 items-st flex w-full max-w-md flex-col justify-center rounded-2xl p-8 shadow-md backdrop-blur-md">
        <h1 className="text-2xl font-medium md:text-3xl">
          Sign in to your account
        </h1>
        <SignInProForm />
      </div>
    </Section>
  );
}
