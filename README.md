# Huusy

Huusy is a platform for connecting homeowners and professionals for home improvement projects.

## Tech Stack

- Next.js
- Tailwind CSS
- Supabase
- supabase-auth
- supabase-storage
- Drizzle
- Vercel

## todo

- [x] Theming with tailwind
- [ ] connect to supabase to drizzle
- [ ] setup supabase auth and connect to account database
- [ ] create design for sign in and sign up (pro and customer)
- [ ] Make sure customer and pro can sign up and sign in functions work and that when login is successful, the user is redirected to the dashboard pro or customer

## UI Components set up

here is how we set up the container and section components and how to use them

- [x] Container
- [x] Section

```tsx
import Section from "~/components/ui/Section";
import Container from "~/components/ui/Container";

export default function Page() {
  return (
    <main>
      {/* With container */}
      <Section>
        <h1>Section with Container</h1>
        <p>Content goes here</p>
      </Section>

      {/* Without container */}
      <Section withContainer={false} className="bg-gray-100">
        <Container>
          <h1>Custom Section</h1>
          <p>Content goes here</p>
        </Container>
      </Section>

      {/* With custom classes */}
      <Section className="bg-primary-50" containerClassName="max-w-4xl">
        <h1>Custom Section with Modified Container</h1>
        <p>Content goes here</p>
      </Section>
    </main>
  );
}
```
