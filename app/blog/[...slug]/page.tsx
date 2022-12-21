import { delay } from '../../../lib/delay';

type BlogPostProps = {
  params: {
    slug: string;
  };
};

const getData: FC<> = async (slug) => {
  const post = await delay(5000);
  return { slug };
};

const BlogPost = async ({ params }: BlogPostProps) => {
  const { slug } = params;
  const post = await getData(slug);

  return (
    <div>
      <h1>Blog Post</h1>
      <div>{post.slug.asdf}</div>
    </div>
  );
};

export default BlogPost;
