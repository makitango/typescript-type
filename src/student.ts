export type Student = {
    firstName: string,
    lastName?: string,
    age: number,
    grades: (1|2|3|4|5|6| "A"|"B"|"C"|"D"|"E"|"F"| undefined)[],
}