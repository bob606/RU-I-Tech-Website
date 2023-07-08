function assertValue<T>(v: T | null, errorMessage: string): T {
  if (v === null) {
    throw new Error(errorMessage);
  }

  return v;
}

const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID',
);

const apiVersion
= process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-12';

const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET',
);

const useCdn = false;

export {
  projectId,
  apiVersion,
  dataset,
  useCdn,
};
