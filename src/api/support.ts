import { v4 as uuidv4 } from "uuid";
import {
  collection,
  query,
  where,
  addDoc,
  getDocs,
  orderBy,
} from "firebase/firestore";

import { db } from "api/firebase";

export interface IRequestCreateParams {
  name: string;
  phone: string;
  text: string;
}

export interface IRequestFetchParams {
  fromCreatedAt?: Date;
  toCreatedAt?: Date;
  status?: string;
  search?: string;
}

export const createRequest = async (params: IRequestCreateParams) => {
  const docRef = await addDoc(collection(db, "requests"), {
    ...params,
    id: uuidv4(),
    status: "created",
    createdAt: new Date(),
  });

  return docRef;
};

// Используется firebase
// вся нижеописанная логика подстраиваться под его api и обходит его ограничения
export const getRequests = async (params: IRequestFetchParams) => {
  const requestsRef = collection(db, "requests");
  const conditions = [orderBy("createdAt", "desc")];

  if (params.fromCreatedAt) {
    conditions.push(where("createdAt", ">=", params.fromCreatedAt));
  }

  if (params.toCreatedAt) {
    conditions.push(where("createdAt", "<=", params.toCreatedAt));
  }

  if (params.status) {
    conditions.push(where("status", "==", params.status));
  }

  if (!params.search) {
    const requests: any[] = [];
    const q = query(requestsRef, ...conditions);
    const docRef = await getDocs(q);
    docRef.forEach((doc) => requests.push(doc.data()));

    return requests;
  } else {
    const requests: any[] = [];
    const q1 = query(
      requestsRef,
      ...conditions,
      where("phone", "==", params.search)
    );
    const q2 = query(
      requestsRef,
      ...conditions,
      where("id", "==", params.search)
    );

    const docRef1 = await getDocs(q1);
    const docRef2 = await getDocs(q2);

    const docRef = docRef1.docs.concat(docRef2.docs);
    docRef.forEach((doc) => requests.push(doc.data()));

    return requests;
  }
};
