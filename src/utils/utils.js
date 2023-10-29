export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export function isListMaxLength(list, maxLength) {
  return list.length >= maxLength;
}
export function isListEmpty(list) {
  return list.length <= 0;
}

export function textDecorationMaxLength(list, maxLength) {
  return isListMaxLength(list, maxLength) ? "line-through" : "";
}

export function textDecorationEmpty(list) {
  return isListEmpty(list) ? "line-through" : "";
}

export function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
