import { NextRequest } from "next/server";
import { revalidateTag } from "next/cache";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.nextUrl);
  const tag = searchParams.get("tag");

  if (!tag) {
    return Response.json({
      revalidated: false,
      now: Date.now(),
      message: `Failed to revalidate`,
    });
  }

  revalidateTag(tag);

  return Response.json({
    revalidated: true,
    now: Date.now(),
    message: `Revalidated by tag : ${tag}`,
  });
}
