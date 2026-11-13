import { getDb } from "./index";
import { projects, insights } from "./schema";
import { INITIAL_PROJECTS, INITIAL_INSIGHTS } from "./seed-data";

async function seed() {
  const db = getDb();
  if (!db) {
    console.log(
      "DATABASE_URL is not set to a live Supabase instance yet. Using built-in Drizzle fallback seed dataset."
    );
    return;
  }

  console.log("Seeding Imperial Madeiz Limited projects into Supabase...");
  for (const proj of INITIAL_PROJECTS) {
    await db
      .insert(projects)
      .values(proj)
      .onConflictDoUpdate({
        target: projects.slug,
        set: proj,
      });
  }

  console.log("Seeding Imperial Madeiz Limited press & insights into Supabase...");
  for (const ins of INITIAL_INSIGHTS) {
    await db
      .insert(insights)
      .values(ins)
      .onConflictDoUpdate({
        target: insights.slug,
        set: ins,
      });
  }

  console.log("Supabase database seeded successfully via Drizzle ORM!");
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed error:", err);
  process.exit(1);
});

