import { useEffect, useState } from "react";
import { useCharsQuery } from "../../generated/graphql";
import { nameVar } from "../../utils/createApolloClient";
import { useStorage } from "../../utils/hooks/useStorage";
import { Cont, Form, Input, StyP, Wrapper } from "./styles";

const Home = () => {
  const [input, setInput] = useState("");

  const { data } = useCharsQuery({ variables: { page: 2 } });
  // const { data } = useStorage();

  return (
    <>
      <Cont>
        <div>
          {data?.characters?.results?.map((c) => (
            <div>
              {/* @ts-ignore */}
              <img src={c.image} alt={c.name} />
              <StyP key={c?.id}>{c?.name}</StyP>
            </div>
          ))}
        </div>

        {/* <Wrapper>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              nameVar([...nameVar(), input]);
              setInput("");
            }}
          >
            <Input
              type="text"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <button type="submit">Button</button>
          </Form>
        </Wrapper> */}
      </Cont>
    </>
  );
};

export default Home;
