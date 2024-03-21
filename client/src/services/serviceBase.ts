export const fetchData = async <T>(
  method: string,
  url: string,
  headers?: HeadersInit,
  body?: BodyInit
) => {
  const payload = {
    method,
    headers: headers ? headers : undefined,
    body: body ? body : undefined
  };

  const response = await fetch(url, payload);
  const data: T = await response.json();
  return data;
};
