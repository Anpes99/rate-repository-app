import { useState, useEffect } from "react";
import { gql, useLazyQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
  const [getRepositories, { data, error, loading }] = useLazyQuery(
    GET_REPOSITORIES,
    {
      fetchPolicy: "cache-and-network",
      // Other options
    }
  );

  const fetchRepositories = async () => {
    await getRepositories();
  };

  useEffect(() => {
    getRepositories();
  }, []);

  return {
    repositories: data?.repositories,
    loading,
    refetch: fetchRepositories,
  };
};

export default useRepositories;
