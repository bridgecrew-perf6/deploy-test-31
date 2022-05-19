import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import { useUserQuery } from "../../generated/graphql";
import { withApolloClient } from "../../utils/createApolloClient";

const StyP = styled.p`
  color: red;
`;

const Char = () => {
  const router = useRouter();
  const srtId = router.query.id ? router.query.id : "";
  const { data, loading } = useUserQuery({
    variables: { id: srtId.toString() },
    skip: srtId === "",
  });
  return (
    <>
      {loading && <div>loading...</div>}
      {data && (
        <div>
          <StyP> {data.user?.name}</StyP>
        </div>
      )}
    </>
  );
};

export default withApolloClient({ ssr: false })(Char);
