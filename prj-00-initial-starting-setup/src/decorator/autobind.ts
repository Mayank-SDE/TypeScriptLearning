//autobind decoratar
export function AutoBind(_1: any, _2: string, descriptor: PropertyDescriptor) {
  const orignalMethod = descriptor.value;
  const adjacentDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFunction = orignalMethod.bind(this);
      return boundFunction;
    },
  };
  return adjacentDescriptor;
}
