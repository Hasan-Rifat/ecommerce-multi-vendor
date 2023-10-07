import React from "react";

type pageProps = { params: any };

const page: React.FC<pageProps> = ({ params }) => {
  console.log(params);
  return <div>Have a good coding {params.category}</div>;
};
export default page;
