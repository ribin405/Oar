import { MDXRemote } from "next-mdx-remote/rsc";
import { Container } from "@/components/layout/Container";

export function MdxBody({
  content,
  className,
}: {
  content: string;
  className?: string;
}) {
  return (
    <section className={className ?? "bg-white py-16 sm:py-20"}>
      <Container className="max-w-3xl">
        <div className="mdx-content">
          <MDXRemote source={content} />
        </div>
      </Container>
    </section>
  );
}
