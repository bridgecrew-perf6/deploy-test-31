import { gql, useQuery } from "@apollo/client";

export let list: any;

if (typeof window !== "undefined") {
  if (localStorage.getItem("list") !== null) {
    list = localStorage.getItem("list");
    JSON.parse(list);
  }
}

export const useStorage = () => {
  const GET_DATA = gql`
    query dataQuery {
      name @client
    }
  `;

  const query = useQuery(GET_DATA);

  //   let arr: any;

  if (typeof window !== "undefined") {
    if (query.data.name.length !== 0) {
      localStorage.setItem("list", JSON.stringify(query.data));
    }
  }

  return query;
};
