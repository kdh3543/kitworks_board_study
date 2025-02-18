import React from "react";

interface todayDetailProps {
  params: { id: string };
}

export default function page({ params }: todayDetailProps) {
  return <div>today detail page:{params.id}</div>;
}
