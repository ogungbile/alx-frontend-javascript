export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  const students = listStudents.filter((student) => student.location === city);
  // eslint-disable-next-line no-restricted-syntax
  for (const student of students) {
    student.grade = 'N/A';
  }
  const newStudents = students.map((student) => {
    const single = student;
    // eslint-disable-next-line no-restricted-syntax
    for (const grade of newGrades) {
      if (single.id === grade.studentId) {
        single.grade = grade.grade;
      }
    }
    return single;
  });
  return newStudents;
}
