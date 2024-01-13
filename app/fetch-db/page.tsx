// app/fetch-db/page.tsx
import { prisma } from "@/lib/prisma";

export default async function FetchDBPage() {
  const user = await prisma.user.findFirst({
    where: {
      email: "internet@mcpdigital.com", // "test@test.com",
    },
  });

  return (
    <main>
      <div>
        <h1 className="text-3xl">
          Fetching Database: {process.env.DATABASE_URL}
        </h1>
      </div>
      <div>
        Hello, {user?.name}
        <ul>
          <li>Id: {user?.id}</li>
          <li>Email: {user?.email}</li>
        </ul>
      </div>
    </main>
  );
}
