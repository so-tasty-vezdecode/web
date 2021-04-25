import { makeAutoObservable } from "mobx";

import { createRequest, IRequestCreateParams } from "api/support";

export class SupportStore {
  isOpenedModal: boolean = false;
  isValid: boolean = false;
  isLoading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setIsValid = (isValid: boolean) => {
    this.isValid = isValid;
  };

  openModal = () => {
    this.isOpenedModal = true;
  };

  closeModal = () => {
    this.isOpenedModal = false;
  };

  onSubmit = async (data: IRequestCreateParams) => {
    this.isLoading = true;

    try {
      await createRequest(data);

      this.closeModal();
    } catch (error) {
    } finally {
      this.isLoading = false;
    }
  };
}
