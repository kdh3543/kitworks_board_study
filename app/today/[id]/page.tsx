type Props = { params: Promise<{ id: string }> };

const BlogDetail = async ({ params }: Props) => {
  const { id } = await params;
  return <div>get id : {id}</div>;
};

export default BlogDetail;
