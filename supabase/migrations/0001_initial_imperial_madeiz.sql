-- Supabase PostgreSQL Migration: Imperial Madeiz Limited (Alkebulan City Ghana)
CREATE TABLE IF NOT EXISTS "projects" (
  "id" serial PRIMARY KEY NOT NULL,
  "slug" text NOT NULL UNIQUE,
  "title" text NOT NULL,
  "subtitle" text NOT NULL,
  "category" text NOT NULL,
  "category_label" text NOT NULL,
  "location" text NOT NULL,
  "acreage" text,
  "capacity" text,
  "completion_target" text DEFAULT '2030 (5-Year Phase)',
  "client_or_partner" text DEFAULT 'Imperial Madeiz Limited',
  "hero_image" text NOT NULL,
  "gallery_images" jsonb NOT NULL,
  "summary" text NOT NULL,
  "description" text NOT NULL,
  "highlights" jsonb NOT NULL,
  "metrics" jsonb NOT NULL,
  "featured" boolean DEFAULT true NOT NULL,
  "sort_order" integer DEFAULT 0 NOT NULL,
  "created_at" timestamp DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "insights" (
  "id" serial PRIMARY KEY NOT NULL,
  "slug" text NOT NULL UNIQUE,
  "title" text NOT NULL,
  "subtitle" text NOT NULL,
  "category" text NOT NULL,
  "source_name" text NOT NULL,
  "source_url" text NOT NULL,
  "author" text NOT NULL,
  "published_at" text NOT NULL,
  "cover_image" text NOT NULL,
  "image_caption" text,
  "gallery_images" jsonb NOT NULL,
  "youtube_video_id" text,
  "excerpt" text NOT NULL,
  "body_paragraphs" jsonb NOT NULL,
  "key_quotes" jsonb NOT NULL,
  "featured" boolean DEFAULT true NOT NULL,
  "created_at" timestamp DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "inquiries" (
  "id" serial PRIMARY KEY NOT NULL,
  "full_name" text NOT NULL,
  "email" text NOT NULL,
  "company_name" text,
  "phone" text,
  "interested_service" text NOT NULL,
  "budget_range" text NOT NULL,
  "project_details" text NOT NULL,
  "accepted_terms" boolean DEFAULT true NOT NULL,
  "status" text DEFAULT 'new' NOT NULL,
  "created_at" timestamp DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "vendor_applications" (
  "id" serial PRIMARY KEY NOT NULL,
  "company_name" text NOT NULL,
  "rc_number" text NOT NULL,
  "year_established" text NOT NULL,
  "contact_person" text NOT NULL,
  "website" text,
  "business_address" text NOT NULL,
  "phone" text NOT NULL,
  "email" text NOT NULL,
  "tin_number" text NOT NULL,
  "bank_account_name" text NOT NULL,
  "bank_name" text NOT NULL,
  "account_number" text NOT NULL,
  "products_or_services" text NOT NULL,
  "country_of_origin" text DEFAULT 'Ghana' NOTNull,
  "accepted_terms" boolean DEFAULT true NOT NULL,
  "status" text DEFAULT 'pending_review' NOT NULL,
  "created_at" timestamp DEFAULT now() NOT NULL
);

