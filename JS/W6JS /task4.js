// 4. Создать массив аудиторий академии. Объект-аудитория состоит
//  из названия, количества посадочных мест (от 10 до 20) и названия
//   факультета, для которого она предназначена.

// Написать несколько функций для работы с ним

const root = document.getElementById("root");
const auditList = document.createElement("ul");

const auditoriumList = [
  { name: "English", seats: 16, "faculty-names": "Computer engineering" },
  { name: "Programming", seats: 14, "faculty-names": "Cybersecurity" },
  { name: "Code", seats: 20, "faculty-names": "Software engineering" },
  {
    name: "Web",
    seats: 18,
    "faculty-names": "Information systems and technologies",
  },
];

//1. Вывод на экран всех аудиторий;

const showAllAuditories = (list) => {
  list.forEach((obj) => {
    const auditoriumItem = document.createElement("li");
    auditoriumItem.textContent = `Аudience name: ${obj.name},  seats: ${obj.seats},  
    faculty:  ${obj["faculty-names"]}`;
    auditList.append(auditoriumItem);
  });

  root.insertAdjacentElement("afterbegin", auditList);
};
showAllAuditories(auditoriumList);

//2. Вывод на экран аудиторий для указанного факультета;

const showFaculty = (list, faculty) => {
  const findAuditoriumByFaculty = list.find(
    (obj) => obj["faculty-names"] === faculty
  );

  const showFaculty = document.createElement("p");
  showFaculty.textContent = `Аudience name: ${findAuditoriumByFaculty.name},  seats: ${findAuditoriumByFaculty.seats},  
  faculty:  ${findAuditoriumByFaculty["faculty-names"]}`;
  auditList.insertAdjacentElement("afterend", showFaculty);
};

showFaculty(auditoriumList, "Software engineering");

// 3. Функция сортировки аудиторий по количеству мест;

const sortAuditoriumBySeats = (list) => {
  return list.sort((objA, objB) => objB.seats - objA.seats);
};

console.log(sortAuditoriumBySeats(auditoriumList));

// 4. Функция сортировки аудиторий по названию (по алфавиту).

const sortAuditoriumByAlphabet = (list) => {
  return list.sort((objA, objB) => {
    const nameA = objA.name.toUpperCase();
    const nameB = objB.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  });
};

console.log(sortAuditoriumByAlphabet(auditoriumList));
