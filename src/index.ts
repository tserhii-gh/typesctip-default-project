export function hello(hello: string = 'world'): string {
  return `Hello ${hello}!`;
}

(async () => {
  console.log(hello());
})();
