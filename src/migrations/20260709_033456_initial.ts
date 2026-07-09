import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`CREATE TABLE \`media\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`alt\` text NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`url\` text,
  	\`thumbnail_u_r_l\` text,
  	\`filename\` text,
  	\`mime_type\` text,
  	\`filesize\` numeric,
  	\`width\` numeric,
  	\`height\` numeric,
  	\`focal_x\` numeric,
  	\`focal_y\` numeric
  );
  `)
  await db.run(sql`CREATE INDEX \`media_updated_at_idx\` ON \`media\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`media_created_at_idx\` ON \`media\` (\`created_at\`);`)
  await db.run(sql`CREATE UNIQUE INDEX \`media_filename_idx\` ON \`media\` (\`filename\`);`)
  await db.run(sql`CREATE TABLE \`users_sessions\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`created_at\` text,
  	\`expires_at\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`users_sessions_order_idx\` ON \`users_sessions\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`users_sessions_parent_id_idx\` ON \`users_sessions\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`users\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`email\` text NOT NULL,
  	\`reset_password_token\` text,
  	\`reset_password_expiration\` text,
  	\`salt\` text,
  	\`hash\` text,
  	\`login_attempts\` numeric DEFAULT 0,
  	\`lock_until\` text
  );
  `)
  await db.run(sql`CREATE INDEX \`users_updated_at_idx\` ON \`users\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`users_created_at_idx\` ON \`users\` (\`created_at\`);`)
  await db.run(sql`CREATE UNIQUE INDEX \`users_email_idx\` ON \`users\` (\`email\`);`)
  await db.run(sql`CREATE TABLE \`payload_kv\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`key\` text NOT NULL,
  	\`data\` text NOT NULL
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`payload_kv_key_idx\` ON \`payload_kv\` (\`key\`);`)
  await db.run(sql`CREATE TABLE \`payload_locked_documents\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`global_slug\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_global_slug_idx\` ON \`payload_locked_documents\` (\`global_slug\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_updated_at_idx\` ON \`payload_locked_documents\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_created_at_idx\` ON \`payload_locked_documents\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`payload_locked_documents_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`media_id\` integer,
  	\`users_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`payload_locked_documents\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`media_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_order_idx\` ON \`payload_locked_documents_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_parent_idx\` ON \`payload_locked_documents_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_path_idx\` ON \`payload_locked_documents_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_media_id_idx\` ON \`payload_locked_documents_rels\` (\`media_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_users_id_idx\` ON \`payload_locked_documents_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE TABLE \`payload_preferences\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`key\` text,
  	\`value\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_preferences_key_idx\` ON \`payload_preferences\` (\`key\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_updated_at_idx\` ON \`payload_preferences\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_created_at_idx\` ON \`payload_preferences\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`payload_preferences_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`users_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`payload_preferences\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_preferences_rels_order_idx\` ON \`payload_preferences_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_rels_parent_idx\` ON \`payload_preferences_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_rels_path_idx\` ON \`payload_preferences_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_rels_users_id_idx\` ON \`payload_preferences_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE TABLE \`payload_migrations\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text,
  	\`batch\` numeric,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_migrations_updated_at_idx\` ON \`payload_migrations\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`payload_migrations_created_at_idx\` ON \`payload_migrations\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`homepage_hero_columns\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`label\` text NOT NULL,
  	\`value\` text NOT NULL,
  	\`href\` text,
  	\`wide\` integer,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`homepage\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`homepage_hero_columns_order_idx\` ON \`homepage_hero_columns\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`homepage_hero_columns_parent_id_idx\` ON \`homepage_hero_columns\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`homepage_hero_images\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_id\` integer NOT NULL,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`homepage\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`homepage_hero_images_order_idx\` ON \`homepage_hero_images\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`homepage_hero_images_parent_id_idx\` ON \`homepage_hero_images\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`homepage_hero_images_image_idx\` ON \`homepage_hero_images\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`homepage_offerings_cards\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`number\` text NOT NULL,
  	\`title\` text NOT NULL,
  	\`description\` text NOT NULL,
  	\`href\` text NOT NULL,
  	\`cta\` text NOT NULL,
  	\`image_id\` integer NOT NULL,
  	\`icon\` text NOT NULL,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`homepage\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`homepage_offerings_cards_order_idx\` ON \`homepage_offerings_cards\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`homepage_offerings_cards_parent_id_idx\` ON \`homepage_offerings_cards\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`homepage_offerings_cards_image_idx\` ON \`homepage_offerings_cards\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`homepage_about_gallery\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_id\` integer NOT NULL,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`homepage\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`homepage_about_gallery_order_idx\` ON \`homepage_about_gallery\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`homepage_about_gallery_parent_id_idx\` ON \`homepage_about_gallery\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`homepage_about_gallery_image_idx\` ON \`homepage_about_gallery\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`homepage_contact_umgebung\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`text\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`homepage\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`homepage_contact_umgebung_order_idx\` ON \`homepage_contact_umgebung\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`homepage_contact_umgebung_parent_id_idx\` ON \`homepage_contact_umgebung\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`homepage\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`offerings_eyebrow\` text NOT NULL,
  	\`offerings_heading\` text NOT NULL,
  	\`offerings_intro\` text NOT NULL,
  	\`about_eyebrow\` text NOT NULL,
  	\`about_quote\` text NOT NULL,
  	\`about_paragraph1\` text NOT NULL,
  	\`about_paragraph2\` text NOT NULL,
  	\`about_closing\` text NOT NULL,
  	\`contact_eyebrow\` text NOT NULL,
  	\`contact_heading\` text NOT NULL,
  	\`contact_text\` text NOT NULL,
  	\`contact_image_id\` integer NOT NULL,
  	\`updated_at\` text,
  	\`created_at\` text,
  	FOREIGN KEY (\`contact_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`homepage_contact_contact_image_idx\` ON \`homepage\` (\`contact_image_id\`);`)
  await db.run(sql`CREATE TABLE \`mitnehmen_page_vitrine_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`text\` text,
  	\`image_id\` integer NOT NULL,
  	\`icon\` text DEFAULT 'none',
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`mitnehmen_page\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`mitnehmen_page_vitrine_items_order_idx\` ON \`mitnehmen_page_vitrine_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`mitnehmen_page_vitrine_items_parent_id_idx\` ON \`mitnehmen_page_vitrine_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`mitnehmen_page_vitrine_items_image_idx\` ON \`mitnehmen_page_vitrine_items\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`mitnehmen_page_info_band_facts_lines\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`text\` text NOT NULL,
  	\`href\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`mitnehmen_page_info_band_facts\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`mitnehmen_page_info_band_facts_lines_order_idx\` ON \`mitnehmen_page_info_band_facts_lines\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`mitnehmen_page_info_band_facts_lines_parent_id_idx\` ON \`mitnehmen_page_info_band_facts_lines\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`mitnehmen_page_info_band_facts\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`mitnehmen_page\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`mitnehmen_page_info_band_facts_order_idx\` ON \`mitnehmen_page_info_band_facts\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`mitnehmen_page_info_band_facts_parent_id_idx\` ON \`mitnehmen_page_info_band_facts\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`mitnehmen_page\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`hero_eyebrow\` text NOT NULL,
  	\`hero_title\` text NOT NULL,
  	\`hero_lede\` text NOT NULL,
  	\`hero_primary_image_id\` integer NOT NULL,
  	\`hero_secondary_image_id\` integer,
  	\`vitrine_eyebrow\` text NOT NULL,
  	\`vitrine_heading\` text NOT NULL,
  	\`vitrine_intro\` text,
  	\`info_band_eyebrow\` text NOT NULL,
  	\`info_band_heading\` text NOT NULL,
  	\`info_band_body\` text,
  	\`updated_at\` text,
  	\`created_at\` text,
  	FOREIGN KEY (\`hero_primary_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`hero_secondary_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`mitnehmen_page_hero_hero_primary_image_idx\` ON \`mitnehmen_page\` (\`hero_primary_image_id\`);`)
  await db.run(sql`CREATE INDEX \`mitnehmen_page_hero_hero_secondary_image_idx\` ON \`mitnehmen_page\` (\`hero_secondary_image_id\`);`)
  await db.run(sql`CREATE TABLE \`cafe_page_experience_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`text\` text,
  	\`image_id\` integer NOT NULL,
  	\`icon\` text DEFAULT 'none',
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`cafe_page\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`cafe_page_experience_items_order_idx\` ON \`cafe_page_experience_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`cafe_page_experience_items_parent_id_idx\` ON \`cafe_page_experience_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`cafe_page_experience_items_image_idx\` ON \`cafe_page_experience_items\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`cafe_page_rooms_images\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_id\` integer NOT NULL,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`cafe_page\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`cafe_page_rooms_images_order_idx\` ON \`cafe_page_rooms_images\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`cafe_page_rooms_images_parent_id_idx\` ON \`cafe_page_rooms_images\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`cafe_page_rooms_images_image_idx\` ON \`cafe_page_rooms_images\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`cafe_page_info_band_facts_lines\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`text\` text NOT NULL,
  	\`href\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`cafe_page_info_band_facts\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`cafe_page_info_band_facts_lines_order_idx\` ON \`cafe_page_info_band_facts_lines\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`cafe_page_info_band_facts_lines_parent_id_idx\` ON \`cafe_page_info_band_facts_lines\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`cafe_page_info_band_facts\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`cafe_page\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`cafe_page_info_band_facts_order_idx\` ON \`cafe_page_info_band_facts\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`cafe_page_info_band_facts_parent_id_idx\` ON \`cafe_page_info_band_facts\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`cafe_page\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`hero_eyebrow\` text NOT NULL,
  	\`hero_title\` text NOT NULL,
  	\`hero_lede\` text NOT NULL,
  	\`hero_primary_image_id\` integer NOT NULL,
  	\`hero_secondary_image_id\` integer,
  	\`experience_eyebrow\` text NOT NULL,
  	\`experience_heading\` text NOT NULL,
  	\`experience_intro\` text,
  	\`rooms_eyebrow\` text NOT NULL,
  	\`rooms_heading\` text NOT NULL,
  	\`info_band_eyebrow\` text NOT NULL,
  	\`info_band_heading\` text NOT NULL,
  	\`info_band_body\` text,
  	\`updated_at\` text,
  	\`created_at\` text,
  	FOREIGN KEY (\`hero_primary_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`hero_secondary_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`cafe_page_hero_hero_primary_image_idx\` ON \`cafe_page\` (\`hero_primary_image_id\`);`)
  await db.run(sql`CREATE INDEX \`cafe_page_hero_hero_secondary_image_idx\` ON \`cafe_page\` (\`hero_secondary_image_id\`);`)
  await db.run(sql`CREATE TABLE \`bestellen_page_steps_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`number\` text NOT NULL,
  	\`title\` text NOT NULL,
  	\`text\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`bestellen_page\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`bestellen_page_steps_items_order_idx\` ON \`bestellen_page_steps_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`bestellen_page_steps_items_parent_id_idx\` ON \`bestellen_page_steps_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`bestellen_page_occasions_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`text\` text,
  	\`image_id\` integer NOT NULL,
  	\`icon\` text DEFAULT 'none',
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`bestellen_page\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`bestellen_page_occasions_items_order_idx\` ON \`bestellen_page_occasions_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`bestellen_page_occasions_items_parent_id_idx\` ON \`bestellen_page_occasions_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`bestellen_page_occasions_items_image_idx\` ON \`bestellen_page_occasions_items\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`bestellen_page_teeraum_facts\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text NOT NULL,
  	\`lines\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`bestellen_page\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`bestellen_page_teeraum_facts_order_idx\` ON \`bestellen_page_teeraum_facts\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`bestellen_page_teeraum_facts_parent_id_idx\` ON \`bestellen_page_teeraum_facts\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`bestellen_page\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`hero_eyebrow\` text NOT NULL,
  	\`hero_title\` text NOT NULL,
  	\`hero_lede\` text NOT NULL,
  	\`hero_primary_image_id\` integer NOT NULL,
  	\`hero_secondary_image_id\` integer,
  	\`steps_eyebrow\` text NOT NULL,
  	\`steps_heading\` text NOT NULL,
  	\`occasions_eyebrow\` text NOT NULL,
  	\`occasions_heading\` text NOT NULL,
  	\`occasions_intro\` text,
  	\`teeraum_eyebrow\` text NOT NULL,
  	\`teeraum_heading\` text NOT NULL,
  	\`teeraum_body\` text NOT NULL,
  	\`teeraum_image_id\` integer NOT NULL,
  	\`updated_at\` text,
  	\`created_at\` text,
  	FOREIGN KEY (\`hero_primary_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`hero_secondary_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`teeraum_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`bestellen_page_hero_hero_primary_image_idx\` ON \`bestellen_page\` (\`hero_primary_image_id\`);`)
  await db.run(sql`CREATE INDEX \`bestellen_page_hero_hero_secondary_image_idx\` ON \`bestellen_page\` (\`hero_secondary_image_id\`);`)
  await db.run(sql`CREATE INDEX \`bestellen_page_teeraum_teeraum_image_idx\` ON \`bestellen_page\` (\`teeraum_image_id\`);`)
  await db.run(sql`CREATE TABLE \`site_settings_hours\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`label\` text NOT NULL,
  	\`value\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`site_settings\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`site_settings_hours_order_idx\` ON \`site_settings_hours\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`site_settings_hours_parent_id_idx\` ON \`site_settings_hours\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`site_settings\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`meta_title\` text NOT NULL,
  	\`meta_description\` text NOT NULL,
  	\`contact_street\` text NOT NULL,
  	\`contact_city\` text NOT NULL,
  	\`contact_phone_display\` text NOT NULL,
  	\`contact_phone_number\` text NOT NULL,
  	\`contact_fax_display\` text,
  	\`contact_instagram_handle\` text NOT NULL,
  	\`contact_instagram_url\` text NOT NULL,
  	\`contact_maps_link\` text NOT NULL,
  	\`contact_maps_embed_src\` text NOT NULL,
  	\`tagline\` text NOT NULL,
  	\`quote\` text NOT NULL,
  	\`company_name\` text NOT NULL,
  	\`updated_at\` text,
  	\`created_at\` text
  );
  `)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`DROP TABLE \`media\`;`)
  await db.run(sql`DROP TABLE \`users_sessions\`;`)
  await db.run(sql`DROP TABLE \`users\`;`)
  await db.run(sql`DROP TABLE \`payload_kv\`;`)
  await db.run(sql`DROP TABLE \`payload_locked_documents\`;`)
  await db.run(sql`DROP TABLE \`payload_locked_documents_rels\`;`)
  await db.run(sql`DROP TABLE \`payload_preferences\`;`)
  await db.run(sql`DROP TABLE \`payload_preferences_rels\`;`)
  await db.run(sql`DROP TABLE \`payload_migrations\`;`)
  await db.run(sql`DROP TABLE \`homepage_hero_columns\`;`)
  await db.run(sql`DROP TABLE \`homepage_hero_images\`;`)
  await db.run(sql`DROP TABLE \`homepage_offerings_cards\`;`)
  await db.run(sql`DROP TABLE \`homepage_about_gallery\`;`)
  await db.run(sql`DROP TABLE \`homepage_contact_umgebung\`;`)
  await db.run(sql`DROP TABLE \`homepage\`;`)
  await db.run(sql`DROP TABLE \`mitnehmen_page_vitrine_items\`;`)
  await db.run(sql`DROP TABLE \`mitnehmen_page_info_band_facts_lines\`;`)
  await db.run(sql`DROP TABLE \`mitnehmen_page_info_band_facts\`;`)
  await db.run(sql`DROP TABLE \`mitnehmen_page\`;`)
  await db.run(sql`DROP TABLE \`cafe_page_experience_items\`;`)
  await db.run(sql`DROP TABLE \`cafe_page_rooms_images\`;`)
  await db.run(sql`DROP TABLE \`cafe_page_info_band_facts_lines\`;`)
  await db.run(sql`DROP TABLE \`cafe_page_info_band_facts\`;`)
  await db.run(sql`DROP TABLE \`cafe_page\`;`)
  await db.run(sql`DROP TABLE \`bestellen_page_steps_items\`;`)
  await db.run(sql`DROP TABLE \`bestellen_page_occasions_items\`;`)
  await db.run(sql`DROP TABLE \`bestellen_page_teeraum_facts\`;`)
  await db.run(sql`DROP TABLE \`bestellen_page\`;`)
  await db.run(sql`DROP TABLE \`site_settings_hours\`;`)
  await db.run(sql`DROP TABLE \`site_settings\`;`)
}
