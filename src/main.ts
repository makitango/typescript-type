// In dieser Aufgabenstellung geht es darum, den Typ "Student" in TypeScript zu definieren. Jeder Student soll über einen Vornamen, Nachnamen, Alter und eine Eigenschaft "Zeugnis" verfügen, die eine Liste von Noten enthält. In diesem ersten Schritt soll eine Note eine Ganzzahl von 1 bis 6 sein. Wählt geeignete englische Bezeichner für die Attribute. Anschließend soll ein Student erstellt und in der Konsole ausgegeben werden.
//
// Schritt 1: Schreibt eine Funktion die einen Studenten mit seinen Noten ausgibt, dabei soll ein Student mit Vorname, Nachname, Alter und einer Liste von Noten ausgegeben werden.
// Highlightet die Ausgabe der Vor- und Nachnamen, des Alters und der Noten durch eine Zeile mit 30x "=".
// Beispiel:
// Anton Meier (17)
// ==============================
// Noten: 1,4,3,1,3,2,1,2
const student1:{firstName:string, lastName:string, age:number, grades:string[]} = {
    firstName: "Jamie",
    lastName: "Lannister",
    age: 43,
    grades: [1, 4, 3, 1, 3, 2, 1, 2]
};
function printStudent(student): void {
    console.log(student.firstName + (student.lastName ? " " + student.lastName : "") + " (" + student.age + ")");
    console.log("=".repeat(30));
    console.log("Noten: " + student.grades.map(grade => (grade === undefined) ? '*' : grade).join(","));
}
printStudent(student1);

// Schritt 2: Erlaubt auch Strings und number als Benotung
// Aufgabenstellung: stellt sicher, dass neben den Noten als Zahlen (deutsches System) auch Werte A bis F (amerikanisches System) in den Noten unterstützt werden. Die Funktion soll die Noten des Studenten ausgeben.
// Beispiel:
//
// Anton Meier (17)
// ==============================
//  Noten:
// A,2,F,3,1,B,2,5
const student2:{firstName:string, lastName:string, age:number, grades: (string | number)[]} = {
    firstName: "Brynden",
    lastName: "Rivers",
    age: 130,
    grades: ["A", 2, "F", 3, 1, "B", 2, 5]
};
printStudent(student2);
// Schritt 3: Erlaubt auch undefined als Wert (in der Ausgabe als *)
// Aufgabenstellung: stellt sicher, dass nun auch "undefined" als Wert in den Noten unterstützt wird. Die Funktion soll die Noten des Studenten ausgeben und "undefined" als "*" darstellen. (Z.B. weil der Student verhindert war und nicht benotet wurde).
// Beispiel:
// Anton Meier (17)
// ===========================
//
//  Noten:
// A,2,*,3,1,B,*,5
const student3:{firstName:string, lastName?:string, age:number, grades: (string | number | undefined)[]} = {
    firstName: "Leaf",
    age: 12000,
    grades: ["A", 2, undefined, 3, 1, "B", undefined, 5]
};
printStudent(student3);