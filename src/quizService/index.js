const qBank = [
  {
    question:
      "Which of the following is unit of electric field? ",
    answers: ["Coulomb", "Newton", "Volt", "N/C"],
    correct: "N/C",
    questionId: "099099"
  },
  {
    question:
      "Three charges + 3q + q and Q are placed on a st. line with equal separation. In order to maket the net force on q to be zero, the value of Q will be :",
    answers: ["+3q", "+2q", "-3q", "-4q"],
    correct: "+3q",
    questionId: "183452"
  },
  {
    question:
      "If an electric dipole is kept in a uniform electric field then resultant electric force on it is :",
    answers: ["always zero", "never zero", "depend upon capacity of dipole", "None"],
    correct: "HTC",
    questionId: "267908"
  },
  {
    question: "The number of electron-taken out from a body to produce 1 coulomb of charge will be :",
    answers: [
      "6.25 × 10^18",
      "625 × 10^18",
      "6.023 × 10^23",
      "None"
    ],
    correct: "6.25 × 10^18",
    questionId: "333247"
  },
  {
    question: "The work done in rotating an electric dipole in an electric field:",
    answers: ["W = ME (1 – cos θ)", "W = ME tan θ", "W = ME sec θ", "None"],
    correct: "W = ME (1 – cos θ)",
    questionId: "496293"
  },
  {
    question:
      "If sphere of bad conductor is given charge then it is distributed on:",
    answers: [
      "surface",
      "inside the surface",
      "only inside the surface",
      "None"
    ],
    correct: "None",
    questionId: "588909"
  },
  {
    question:
      'Electric field in a cavity of metal:',
    answers: ["depends upon the surroundings", "depends upon the size of cavity", "is always zero", "is not necessarily zero"],
    correct: "is not necessarily zero",
    questionId: "648452"
  },
  {
    question: "The dielectric constant of a metal is:",
    answers: ["0", "1", "Infinity", "-1"],
    correct: "Infinity",
    questionId: "786649"
  },
  {
    question:
      "1 coulomb is equal to:",
    answers: ["3 × 10^9 e.s.u.", " 1/3 × 10^9 e.s.u.", "3 × 10^10 e.s.u.", "1/3 × 10^10 e.s.u."],
    correct: "3 × 10^9 e.s.u.",
    questionId: "839754"
  },
  {
    question:
      "Each of the two point charges are doubled and their distance is halved. Force of interaction becomes p times, w here p is :",
    answers: [
      "1",
      "4",
      "1/16",
      "16"
    ],
    correct: "16",
    questionId: "98390"
  },
  {
    question: "The dimensional representation of cu will be :",
    answers: ["[MLT^4 A^2]", "[M^-1L^-3T^4A^2]", "[ML^-2T ]", "None of these"],
    correct: "[M^-1L^-3T^4A^2]",
    questionId: "1071006"
  },
  {
    question: "When placed in a uniform field, a dipole experiences:",
    answers: ["a net force", "a torque", "both a net force and torque", "neither a net force nor a torque"],
    correct: "a torque",
    questionId: "1174154"
  },
  {
    question: "A parrot comes and sits on a bare high power line. It will:",
    answers: ["experience a mild shock", "experience a strong shock", "get killed instantaneously", "not be affected practically"],
    correct: "not be affected practically",
    questionId: "1226535"
  },
  {
    question: "The SI units of electric dipole moment are:",
    answers: ["C", " Cm^-1", "Cm", "Nm^-1"],
    correct: "Cm",
    questionId: "1310938"
  },
  {
    question: "If two conducting sphere are connected after charging separately then:",
    answers: ["Electrostatic energy sphere energy will remain conserved", "Electrostatic energy charges remains conserved", "Electrostatic energy energy and charge remains conserved", "None"],
    correct: "Electrostatic energy charges remains conserved",
    questionId: "1436873"
  },
  {
    question: "A soap bubble is given a negative charge, then its radius:",
    answers: ["increases", "decreases", "remains unchanged", "may increase or decrease"],
    correct: "increases",
    questionId: "1515110"
  },
  {
    question: "In non-uniform electric field, electric dipole experiences:",
    answers: ["torque only", "torque as well as net force", "force only", "None of these"],
    correct: "torque as well as net force",
    questionId: "1642728"
  },
  {
    question:
      "An electron is sent in an electric field of magnitude 9.1 × 106NC-1. The acceleration produced in it is :",
    answers: ["1.6 ms^-2", "1.6 × 10^18ms^-2", "3.2 × 10^18ms^-2", "0.8 × 10^18 ms^-2"],
    correct: "1.6 × 10^18ms^-2",
    questionId: "1747256"
  },
  {
    question:
      "Two point charges +8q and -2q are located at ,v = O and ,v = L respectively. The location of a point on the .v-axis at which the net electric field due to these two point charges b is zero :",
    answers: ["4L", "8L", "L/4", "2L"],
    correct: "2L",
    questionId: "1822532"
  },
  {
    question: "The graph drawn between V are r for a non-conducting charged solid sphere of radius R for r < R will be :",
    answers: [
      "straight line",
      "parabola",
      "hyperbola",
      "None of these"
    ],
    correct: "None of these",
    questionId: "195075"
  },
  {
    question: 'Quantisation of charge implies:',
    answers: ["Charge does not exist", "Charge exists on particles", "There is a minimum permissible magnitude of charge", "Charge can’t be created"],
    correct: "There is a minimum permissible magnitude of charge",
    questionId: "2019778"
  },

];

export default (n = 5) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
