-- Restrict question subtopics to the approved tag set (or NULL).
ALTER TABLE questions
DROP CONSTRAINT IF EXISTS questions_subtopic_allowed_check;

ALTER TABLE questions
ADD CONSTRAINT questions_subtopic_allowed_check
CHECK (
  subtopic IS NULL
  OR subtopic IN (
    'anatomy',
    'histology',
    'embryology',
    'physiology',
    'biochemistry',
    'microbiology',
    'immunology',
    'pathology',
    'pharmacology',
    'biostatistics',
    'public_health',
    'internal_medicine',
    'surgery',
    'pediatrics',
    'obstetrics_gynecology',
    'psychiatry',
    'neurology',
    'radiology',
    'orthopedics',
    'ophthalmology',
    'ent',
    'dermatology',
    'cardiology',
    'urology',
    'other'
  )
) NOT VALID;
