export const appendReferrerTextToUrl = (
  url = '/',
  referrerText: string,
  existingSearchParams: URLSearchParams
) => {
  if (!referrerText) return url;

  const uri = new URL(url);
  
  // Only append referrerText if 'ref' doesn't already exist in existing params
  if (!existingSearchParams.has('ref')) {
    uri.searchParams.append('ref', referrerText);
  }

  // Append all existing search params to the redirected URL
  for (const [key, value] of existingSearchParams.entries()) {
    uri.searchParams.append(key, value);
  }

  return uri.toString();
};
