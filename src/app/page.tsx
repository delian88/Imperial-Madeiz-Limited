import React from "react";
import { getAllProjects, getAllInsights } from "@/db";
import HomeClient from "@/components/HomeClient";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const [projects, insights] = await Promise.all([
    getAllProjects(),
    getAllInsights(),
  ]);

  return <HomeClient projects={projects} insights={insights} />;
}

