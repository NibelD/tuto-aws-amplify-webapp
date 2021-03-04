/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSeller = /* GraphQL */ `
  mutation CreateSeller(
    $input: CreateSellerInput!
    $condition: ModelSellerConditionInput
  ) {
    createSeller(input: $input, condition: $condition) {
      id
      name
      siren
      username
      codePays
      codeTVA
      email
      iban
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateSeller = /* GraphQL */ `
  mutation UpdateSeller(
    $input: UpdateSellerInput!
    $condition: ModelSellerConditionInput
  ) {
    updateSeller(input: $input, condition: $condition) {
      id
      name
      siren
      username
      codePays
      codeTVA
      email
      iban
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteSeller = /* GraphQL */ `
  mutation DeleteSeller(
    $input: DeleteSellerInput!
    $condition: ModelSellerConditionInput
  ) {
    deleteSeller(input: $input, condition: $condition) {
      id
      name
      siren
      username
      codePays
      codeTVA
      email
      iban
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
