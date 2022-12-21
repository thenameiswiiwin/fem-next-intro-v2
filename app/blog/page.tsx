const BlogHome = () => {
  return (
    <div>
      <h1>Blog Home</h1>
    </div>
  );
};

export const generateStaticParams = async () => {
  return [{ slug: 'hello-world' }, { slug: 'huy nguyen' }];
};

export default BlogHome;
