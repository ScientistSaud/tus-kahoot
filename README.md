# MedBank

A beautiful, dark-mode Kahoot-style MCQ Quiz app for medical sciences.

## Setup Instructions

1. Clone or clone this directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure your Supabase instance:
   - Copy `.env.local` to `.env.local` if you haven't, and fill in `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
   - Run the SQL migration located at `supabase/migrations/001_init.sql` using your Supabase dashboard or CLI.
4. Run the development server:
   ```bash
   npm run dev
   ```

## Loading Questions

Insert questions via Supabase table editor or `psql`:

```sql
\copy questions(section, topic, subtopic, stem, option_a, option_b, option_c, option_d, option_e, correct_answer) FROM 'questions.csv' WITH (FORMAT csv, HEADER true);
```

Or just manually create some questions via the Supabase Dashboard!