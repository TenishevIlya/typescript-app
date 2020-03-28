import { gql } from "apollo-boost";

export default gql`
  mutation editUser(
    $id: Int!
    $email: String!
    $firstName: String!
    $secondName: String!
    $password: String!
  ) {
    editUser(
      id: $id
      email: $email
      firstName: $firstName
      secondName: $secondName
      password: $password
    ) {
      id
      firstName
      secondName
      email
    }
  }
`;
