import { makeAutoObservable } from "mobx";
import moment from "moment";

import { getRequests } from "api/support";

export interface IRequest {
  name: string;
  phone: string;
  text: string;
  status: string;
  createdAt: {
    seconds: number;
  };
  closedAt: {
    seconds: number;
  };
}

export class RequestsStore {
  isLoading: boolean = false;
  requests: IRequest[] = [];

  status: string = "created";
  groupBy: string = "hours";

  constructor(status: string) {
    this.status = status;

    makeAutoObservable(this);
  }

  get formattedRequests() {
    if (this.requests.length === 0) return [];

    const maxDate = new Date();
    let minDate;

    if (this.groupBy === "seconds") {
      minDate = moment(maxDate).subtract(30, "minutes");
    } else if (this.groupBy === "minutes") {
      minDate = moment(maxDate).subtract(1, "days");
    } else {
      const request = this.requests.slice(-1)[0]

      minDate =
        this.status === "created"
          ? moment(new Date(request.createdAt.seconds * 1000))
          : moment(new Date(request.closedAt.seconds * 1000));
    }

    const diff =
      moment(maxDate).diff(moment(minDate), this.groupBy as any) || 2;

    let format = "MMM DD YYYY";
    if (this.groupBy === "hours") format = "MMM DD YYYY HH";
    if (this.groupBy === "minutes") format = "MMM DD YYYY HH:mm";
    if (this.groupBy === "seconds") format = "MMM DD YYYY HH:mm:ss";

    const dates = [];

    for (let i = 0; i < diff; i++) {
      const date = moment(minDate)
        .add(i, this.groupBy as any)
        .format(format);

      const count = this.requests.filter((item) => {
        const itemDate =
          this.status === "created"
            ? moment(new Date(item.createdAt.seconds * 1000)).format(format)
            : moment(new Date(item.closedAt.seconds * 1000)).format(format);

        return itemDate === date;
      });

      dates.push({
        date,
        value: count.length,
      });
    }

    return dates;
  }

  onChangeGrouping = (group: string) => {
    this.groupBy = group;
  };

  load = async () => {
    this.isLoading = true;

    try {
      this.requests = await getRequests({ status: this.status });
    } catch (error) {
      console.info(error);
    } finally {
      this.isLoading = false;
    }
  };
}
