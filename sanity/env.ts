function assertValue<T>(v: T | null, errorMessage: string): T {
  if (v === null) {
    throw new Error(errorMessage);
  }

  return v;
}

const projectId:string = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID',
) as string;

const apiVersion
= process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-12';

const dataset: string = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET',
) as string;

const useCdn = false;

export {
  projectId,
  apiVersion,
  dataset,
  useCdn,
};
