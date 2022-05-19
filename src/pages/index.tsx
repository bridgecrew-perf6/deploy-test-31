import Home from "../containers/Home";
import { withApolloClient } from "../utils/createApolloClient";

const Index = () => {
  return (
    <>
      <Home />
    </>
  );
};

export default withApolloClient({ ssr: true })(Index);
