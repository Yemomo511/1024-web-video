const stringWithTime = (time: number) => {
  const hour = Math.floor(time / 3600);
  time = time % 3600;
  const minute = Math.floor(time / 60);
  time = time % 60;
  const second = Math.floor(time);
  if (hour != 0) {
    return `${hour < 10 ? "0" + hour : hour}:${
      minute < 10 ? "0" + minute : minute
    }:${second < 10 ? "0" + second : second}`;
  } else {
    return `${minute < 10 ? "0" + minute : minute}:${
      second < 10 ? "0" + second : second
    }`;
  }
};

export { stringWithTime };
