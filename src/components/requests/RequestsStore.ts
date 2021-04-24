import { makeAutoObservable, toJS } from "mobx";

import { getRequests, IRequestFetchParams } from "api/support";

export interface IRequest {
  name: string;
  phone: string;
  text: string;
  status: string;
  createdAt: Date;
}

export class RequestsStore {
  isLoading: boolean = false;
  requests: IRequest[] = [];
  filters: IRequestFetchParams = {};

  constructor() {
    makeAutoObservable(this);
  }

  load = async () => {
    this.isLoading = true;

    try {
      this.requests = await getRequests(this.filters);
    } catch (error) {
      console.info(error);
    } finally {
      this.isLoading = false;
    }
  };

  clearFilters = () => {
    this.filters = {};

    this.load();
  };

  onChangeStatusFilter = (fieldValue: string) => {
    this.filters = {
      ...toJS(this.filters),
      status: fieldValue,
    };

    this.load();
  };

  onChangeSearchFilter = (value: string) => {
    this.filters = {
      ...toJS(this.filters),
      search: value,
    };

    this.load();
  };

  onChangeCreatedAtFilter = (a: any, formatString: [string, string]) => {
    this.filters = {
      ...toJS(this.filters),
      fromCreatedAt: new Date(formatString[0]),
      toCreatedAt: new Date(formatString[1]),
    };

    this.load();
  };
}
