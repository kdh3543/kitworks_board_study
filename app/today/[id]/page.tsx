import React from 'react';

interface todayDetailProps {
  params: Promise<{ id: string }>;
}

export default async function page({ params }: todayDetailProps) {
  const { id } = await params;
  return <div>today detail page:{id}</div>;
}
