const comment = "TypeScript is a strongly typed programming language"

export function shortenComment(comment: string): string {
  // Write your code below
  return comment.split(' ').filter((w: string) => w.length >=5 && w.length <= 10).join(' ')
}
// console.log(shortenComment(comment))