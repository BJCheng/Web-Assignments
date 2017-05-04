var records = [
  {
    username: 'masterdetective123',
    firstName: 'Sherlock',
    lastName: 'Holmes',
    profession: 'Detective',
    bio: 'Sherlock Holmes (/ˈʃɜːrlɒk ˈhoʊmz/) is a fictional private detective created by British author Sir Arthur Conan Doyle. Known as a "consulting detective" in the stories, Holmes is known for a proficiency with observation, forensic science, and logical reasoning that borders on the fantastic, which he employs when investigating cases for a wide variety of clients, including Scotland Yard.',
    password: '$2a$06$rjvRxVkZzmmBFL3amOBRhOXj7bhYv5gVyEQhoP6k8FkgiF4z97utW'
  },
  {
    username: 'lemon',
    firstName: 'Elizabeth',
    lastName: 'Lemon',
    profession: 'Writer',
    bio: 'Elizabeth Miervaldis "Liz" Lemon is the main character of the American television series 30 Rock. She created and writes for the fictional comedy-sketch show The Girlie Show or TGS with Tracy Jordan.',
    password: '$2a$06$p57ni2rKTD36fl/trhxJeuCZog5Rwd3d0HNvt4Uh9pTJbldQIw2yK'
  },
  {
    username: 'theboywholived',
    firstName: 'Harry',
    lastName: 'Potter',
    profession: 'Student',
    bio: 'Harry Potter is a series of fantasy novels written by British author J. K. Rowling. The novels chronicle the life of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry . The main story arc concerns Harry\'s struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic, and subjugate all wizards and Muggles.',
    password: '$2a$06$HsqyS.U8iJHAaiPlWBpt/OGrqb8e0IkVL1m1TqqvZYoulFDQU7EhO'
  }
];

exports.findById = function (id, cb) {
  process.nextTick(function () {
    var idx = id - 1;
    if (records[idx]) {
      cb(null, records[idx]);
    } else {
      cb(new Error('User ' + id + ' does not exist'));
    }
  });
}

exports.findByUsername = (username) => {
  return new Promise((resolve, reject) => {
    records.forEach((record) => {
      if (record.username === username)
        resolve(record);
    });
    resolve(null);
  });
}

// exports.findByUsername = function (username, cb) {
//   process.nextTick(function () {
//     for (var i = 0, len = records.length; i < len; i++) {
//       var record = records[i];
//       if (record.username === username) {
//         return cb(null, record);
//       }
//     }
//     return cb(null, null);
//   });
// }
