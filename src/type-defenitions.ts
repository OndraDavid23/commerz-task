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
