import 'server-only';

import { revalidatePath } from 'next/cache';

/*
 * The endpoint of this API is below
 * <BASE_URL>/ngd/examples/api/revalidate-path?path=/
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const path = searchParams.get('path');

  if (!path) {
    return Response.json({
      message: `Please provide the query parameter path that you want to revalidate. For example, ?path=/`,
    });
  }

  // revalidatePath is a sync function. does not return anything
  revalidatePath(path);
  return Response.json({
    message: `The cache has been revalidated for the "${path}" path.`,
  });
}
