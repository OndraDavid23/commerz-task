export type Participant = {
    id: string;
    firstName: string;
    lastName: string;
    age: number;
  };
  
export type ParticipantFormData = {
    firstName: string;
    lastName: string;
    age: number;
  }

export type URLSearchParameters = {
    pageNumber?: string,
    pageSize?: string,
}

export type FormServerError = {
    message?: string | undefined;
    errors?: {
      firstNameServer?: string[] | undefined;
      lastNameServer?: string[] | undefined;
      ageServer?: string[] | undefined;
    }
};
