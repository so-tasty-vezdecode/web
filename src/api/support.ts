// import axios from "axios";

export interface IRequestCreateParams {
  name: string;
  phone: string;
  text: string;
}

// export const createRequest = (params: IRequestCreateParams) =>
//   axios.post("/", params);

export const createRequest = (params: IRequestCreateParams) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(params);
    }, 2000)
  );
};
