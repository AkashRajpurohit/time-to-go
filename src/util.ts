export const appendReferrerTextToUrl = (
  url = '/',
  referrerText: string,
  existingSearchParams: URLSearchParams
) => {
  if (!referrerText) return url;

  const uri = new URL(url);
  uri.searchParams.append('ref', referrerText);

  // Append all existing search params to the redirected URL as well
  // Note: if existing URL had a ref property then that will override
  // the referrerText we set above
  for (const [key, value] of existingSearchParams.entries()) {
    if (key === 'ref') {
      uri.searchParams.delete('ref');
    }
    
    uri.searchParams.append(key, value);
  }

  return uri.toString();
};
