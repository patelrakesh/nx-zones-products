import 'server-only';

import { revalidateTag } from 'next/cache';

/*
 * The endpoint of this API is below
 * <BASE_URL>/ngd/examples/api/revalidate-tag?tag=all
 * Use { next: { tags: ['all'] } } with fetch API
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const tag = searchParams.get('tag');

  if (!tag) {
    return Response.json({
      message: `Please provide the query parameter tag that you want to revalidate. For example, ?tag=all`,
    });
  }

  revalidateTag(tag);
  return Response.json({
    message: `The cache has been revalidated for the "${tag}" tag.`,
  });
}
