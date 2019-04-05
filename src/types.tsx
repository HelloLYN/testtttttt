//定义仓库的状态
export interface Store {
  counter1: Counter1;
  counter2: Counter2;
}

export interface Counter1 {
  number: number;
}
export interface Counter2 {
  number: number;
}

// 需要共用的,单独拎出来写在这里,
