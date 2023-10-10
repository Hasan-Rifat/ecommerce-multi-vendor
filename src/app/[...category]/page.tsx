import React from "react";

type pageProps = { params: any };

const page: React.FC<pageProps> = ({ params }) => {
  console.log(params);
  return (
    <div>
      Have a good coding {params.category && params.category} {params.id}
    </div>
  );
};
export default page;
