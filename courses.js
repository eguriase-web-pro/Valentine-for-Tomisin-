// ============================================================
// PNGPD LIFE 2.0 — RESTAURANT MENUS
// ============================================================
// Load this file first.
// Individual course files add their data to window.COURSES.
//
// Food item format:
// n = name
// p = price (coins)
// h = hunger restored
// ============================================================

window.COURSES = {};

window.MENUS = {

  // ----------------------------------------------------------
  // BUSH MAMA
  // ----------------------------------------------------------
  "Bush Mama": [
    {
      n: "Pounded yam and egusi",
      p: 60,
      h: 45
    },
    {
      n: "Eba and okra soup",
      p: 45,
      h: 40
    },
    {
      n: "Boiled yam and fish stew",
      p: 40,
      h: 35
    },
    {
      n: "Suya",
      p: 25,
      h: 20
    },
    {
      n: "Zobo drink",
      p: 10,
      h: 8
    },
    {
      n: "Bottle of water",
      p: 5,
      h: 3
    }
  ],

  // ----------------------------------------------------------
  // TUTU RESTAURANT
  // ----------------------------------------------------------
  "Tutu Restaurant": [
    {
      n: "Jollof rice and chicken",
      p: 55,
      h: 45
    },
    {
      n: "Fried rice and plantain",
      p: 50,
      h: 42
    },
    {
      n: "Amala and ewedu",
      p: 40,
      h: 38
    },
    {
      n: "Indomie and egg",
      p: 25,
      h: 25
    },
    {
      n: "Moi moi",
      p: 15,
      h: 15
    },
    {
      n: "Malt drink",
      p: 12,
      h: 8
    }
  ]
};
// ============================================================
// PNGPD LIFE 2.0 — PGP 121
// FLUID KINEMATICS
// ============================================================
// Course location: Library
// Reward per completed quiz: 10 coins
//
// Question format:
// id  = question ID
// cat = question category
// q   = question
// o   = answer options
// a   = correct answer index (starts from 0)
// ============================================================

window.COURSES["PGP 121"] = {

  title: "PGP 121 - Fluid Kinematics",
  place: "library",
  reward: 10,

  // ==========================================================
  // SHORT NOTES
  // ==========================================================

  notes: [

    "Fluid - a substance capable of continuous deformation when subjected to shear stress.",

    "Fluid mechanics - study of fluids at rest and in motion.",

    "Fluid kinematics - study of fluid motion without considering the forces causing the motion.",

    "Fluid dynamics - study of fluid motion together with the forces responsible for it.",

    "Fluid statics - study of fluids at rest.",

    "Velocity - rate of change of position of a fluid particle with time.",

    "Acceleration - rate of change of velocity with time.",

    "Flow field - description of velocity and other flow properties throughout a region.",

    "Streamline - imaginary line whose tangent at every point gives the instantaneous flow direction.",

    "Pathline - actual path followed by an individual fluid particle.",

    "Streakline - line formed by all fluid particles that have previously passed through a particular point.",

    "Steady flow - flow in which flow properties at a fixed point do not change with time.",

    "Unsteady flow - flow properties at a fixed point change with time.",

    "Uniform flow - flow properties do not change from one position to another along the flow direction.",

    "Non-uniform flow - flow properties vary from one location to another.",

    "Laminar flow - smooth, orderly fluid motion in layers.",

    "Turbulent flow - irregular fluid motion involving fluctuations and mixing.",

    "Compressible flow - flow in which fluid density changes significantly.",

    "Incompressible flow - flow where density is approximately constant.",

    "Rotational flow - flow in which fluid elements rotate about their own axes.",

    "Irrotational flow - flow in which fluid elements have no net rotation.",

    "Volumetric flow rate - volume of fluid passing a section per unit time.",

    "Mass flow rate - mass passing a section per unit time.",

    "Continuity principle - conservation of mass during fluid flow.",

    "For steady incompressible flow, the continuity relationship is commonly: A1V1 = A2V2",

    "Volumetric flow rate: Q = AV",

    "Mass flow rate: ṁ = ρQ = ρAV",

    "Flow direction can be represented using velocity vectors and streamlines.",

    "Fluid kinematics is important in pipelines, pumps, compressors and petroleum-processing systems.",

    "Understanding flow behaviour helps engineers predict how fluids move through equipment."
  ],

  // ==========================================================
  // QUIZ QUESTIONS
  // ==========================================================

  quiz: [

    {
      id: "PGP121-Q01",
      cat: "Concepts",
      q: "Define fluid kinematics.",
      o: [
        "The study of fluid motion without considering the forces causing the motion",
        "Study of fluid motion together with the forces producing the motion",
        "Smooth, orderly flow in layers",
        "Rate of change of displacement with time"
      ],
      a: 0
    },

    {
      id: "PGP121-Q02",
      cat: "Concepts",
      q: "Define fluid dynamics.",
      o: [
        "Flow properties at a fixed point remain constant with time",
        "The study of fluid motion without considering the forces causing the motion",
        "Study of fluid motion together with the forces producing the motion",
        "Mass flowing through a section per unit time"
      ],
      a: 2
    },

    {
      id: "PGP121-Q03",
      cat: "Concepts",
      q: "What is fluid statics?",
      o: [
        "Kinematics describes motion; dynamics considers forces",
        "Flow varying significantly in three spatial directions",
        "Study of fluids at rest",
        "Direction of the velocity vector at a particular point and time"
      ],
      a: 2
    },

    {
      id: "PGP121-Q04",
      cat: "Concepts",
      q: "Define velocity.",
      o: [
        "Study of fluid motion together with the forces producing the motion",
        "Rate of change of displacement with time",
        "Flow properties at a fixed point remain constant with time",
        "Irregular flow with fluctuations and mixing"
      ],
      a: 1
    },

    {
      id: "PGP121-Q05",
      cat: "Concepts",
      q: "Define acceleration.",
      o: [
        "Flow properties at a fixed point remain constant with time",
        "Flow properties change with time at a fixed point",
        "Rate of change of velocity with time",
        "Smooth, orderly flow in layers"
      ],
      a: 2
    },

    {
      id: "PGP121-Q06",
      cat: "Concepts",
      q: "What is a streamline?",
      o: [
        "A line tangent to the instantaneous velocity direction at every point",
        "Cross-sectional flow area",
        "Flow properties vary spatially",
        "Velocity decreases"
      ],
      a: 0
    },

    {
      id: "PGP121-Q07",
      cat: "Concepts",
      q: "Distinguish between streamline and pathline.",
      o: [
        "Magnitude and direction of velocity",
        "Velocity decreases",
        "Smooth, orderly flow in layers",
        "A streamline represents instantaneous flow direction; a pathline is the actual path of a fluid particle"
      ],
      a: 3
    },

    {
      id: "PGP121-Q08",
      cat: "Concepts",
      q: "What is a streakline?",
      o: [
        "Spatial description of flow properties such as velocity",
        "The locus of particles that have passed through a particular point",
        "Magnitude and direction of velocity",
        "Volumetric flow measures volume/time; mass flow measures mass/time"
      ],
      a: 1
    },

    {
      id: "PGP121-Q09",
      cat: "Concepts",
      q: "Define steady flow.",
      o: [
        "Mass cannot be created or destroyed in a closed system",
        "Mass flowing through a section per unit time",
        "Flow properties at a fixed point remain constant with time",
        "Study of fluid motion together with the forces producing the motion"
      ],
      a: 2
    },

    {
      id: "PGP121-Q10",
      cat: "Concepts",
      q: "Define unsteady flow.",
      o: [
        "Flow properties change with time at a fixed point",
        "Irregular flow with fluctuations and mixing",
        "Rate of change of velocity with time",
        "Rate of change of displacement with time"
      ],
      a: 0
    },

    {
      id: "PGP121-Q11",
      cat: "Concepts",
      q: "What is uniform flow?",
      o: [
        "Velocity decreases",
        "Flow properties remain constant from one location to another",
        "Flow approximated as varying significantly in only one spatial direction",
        "Cross-sectional flow area"
      ],
      a: 1
    },

    {
      id: "PGP121-Q12",
      cat: "Concepts",
      q: "What is non-uniform flow?",
      o: [
        "The locus of particles that have passed through a particular point",
        "Incompressible flow",
        "Flow properties vary spatially",
        "Magnitude and direction of velocity"
      ],
      a: 2
    },

    {
      id: "PGP121-Q13",
      cat: "Concepts",
      q: "Define laminar flow.",
      o: [
        "Flow properties at a fixed point remain constant with time",
        "Smooth, orderly flow in layers",
        "Mass cannot be created or destroyed in a closed system",
        "Rate of change of displacement with time"
      ],
      a: 1
    },

    {
      id: "PGP121-Q14",
      cat: "Concepts",
      q: "Define turbulent flow.",
      o: [
        "Rate of change of displacement with time",
        "Mass cannot be created or destroyed in a closed system",
        "Mass flowing through a section per unit time",
        "Irregular flow with fluctuations and mixing"
      ],
      a: 3
    },

    {
      id: "PGP121-Q15",
      cat: "Concepts",
      q: "Differentiate compressible and incompressible flow.",
      o: [
        "Flow during startup of a pump",
        "Continuity requires the same mass/volume flow to pass through the smaller area",
        "Kinematics describes motion; dynamics considers forces",
        "Density changes significantly in compressible flow but is approximately constant in incompressible flow"
      ],
      a: 3
    },

    {
      id: "PGP121-Q16",
      cat: "Concepts",
      q: "What is rotational flow?",
      o: [
        "Flow in which fluid elements rotate",
        "A line tangent to the instantaneous velocity direction at every point",
        "Spatial description of flow properties such as velocity",
        "The locus of particles that have passed through a particular point"
      ],
      a: 0
    },

    {
      id: "PGP121-Q17",
      cat: "Concepts",
      q: "What is irrotational flow?",
      o: [
        "Flow varying significantly in three spatial directions",
        "A small representative element of fluid used to describe flow behaviour",
        "Flow whose significant variation occurs in two spatial directions",
        "Flow in which fluid elements have no net rotation"
      ],
      a: 3
    },

    {
      id: "PGP121-Q18",
      cat: "Concepts",
      q: "What is volumetric flow rate?",
      o: [
        "Volume flowing per unit time",
        "Direction of the velocity vector at a particular point and time",
        "Mass per unit volume",
        "Study of fluids at rest"
      ],
      a: 0
    },

    {
      id: "PGP121-Q19",
      cat: "Concepts",
      q: "Give the equation for volumetric flow rate.",
      o: [
        "ṁ = ρAV",
        "Q = AV",
        "m = ρ V",
        "A1V1 = A2V2"
      ],
      a: 1
    },

    {
      id: "PGP121-Q20",
      cat: "Concepts",
      q: "What does A represent in Q = AV?",
      o: [
        "A line tangent to the instantaneous velocity direction at every point",
        "Cross-sectional flow area",
        "Volume flowing per unit time",
        "Flow properties vary spatially"
      ],
      a: 1
    },

    {
      id: "PGP121-Q21",
      cat: "Concepts",
      q: "What does V represent in Q = AV?",
      o: [
        "Incompressible flow",
        "Volume flowing per unit time",
        "Average fluid velocity",
        "Volumetric flow measures volume/time; mass flow measures mass/time"
      ],
      a: 2
    },

    {
      id: "PGP121-Q22",
      cat: "Concepts",
      q: "Define mass flow rate.",
      o: [
        "Mass flowing through a section per unit time",
        "Rate of change of displacement with time",
        "Rate of change of velocity with time",
        "Flow properties at a fixed point remain constant with time"
      ],
      a: 0
    },

    {
      id: "PGP121-Q23",
      cat: "Concepts",
      q: "Give the equation for mass flow rate.",
      o: [
        "m = ρ V",
        "A1V1 = A2V2",
        "Q = AV",
        "ṁ = ρAV"
      ],
      a: 3
    },

    {
      id: "PGP121-Q24",
      cat: "Concepts",
      q: "State the principle behind continuity.",
      o: [
        "Laminar flow is orderly and layered; turbulent flow is irregular and highly mixed",
        "Spatial description of flow properties such as velocity",
        "Conservation of mass",
        "Pipeline transport and flow through processing equipment"
      ],
      a: 2
    },

    {
      id: "PGP121-Q25",
      cat: "Concepts",
      q: "For incompressible steady flow, state the continuity equation.",
      o: [
        "m = ρ V",
        "A1V1 = A2V2",
        "Q = AV",
        "ṁ = ρAV"
      ],
      a: 1
    },

    {
      id: "PGP121-Q26",
      cat: "Concepts",
      q: "If pipe area decreases, what happens to velocity for incompressible steady flow?",
      o: [
        "Flow approximated as varying significantly in only one spatial direction",
        "Study of fluids at rest",
        "Irregular flow with fluctuations and mixing",
        "Velocity increases"
      ],
      a: 3
    },

    {
      id: "PGP121-Q27",
      cat: "Concepts",
      q: "If pipe area increases, what happens to velocity?",
      o: [
        "Conservation of mass",
        "Velocity decreases",
        "They help control material balance and process operation",
        "A small representative element of fluid used to describe flow behaviour"
      ],
      a: 1
    },

    {
      id: "PGP121-Q28",
      cat: "Calculations",
      q: "A pipe has area 2 m² and velocity 3 m/s. Find Q.",
      o: [
        "7 m³/s",
        "6 m³/s",
        "9 m³/s",
        "8 m³/s"
      ],
      a: 1
    },

    {
      id: "PGP121-Q29",
      cat: "Calculations",
      q: "A flow has Q = 10 m³/s through an area of 2 m². Find velocity.",
      o: [
        "8 m/s",
        "10 m/s",
        "5 m/s",
        "4 m/s"
      ],
      a: 2
    },

    {
      id: "PGP121-Q30",
      cat: "Concepts",
      q: "Why is fluid kinematics important to petroleum engineers?",
      o: [
        "They help control material balance and process operation",
        "It helps describe and predict fluid motion in petroleum-processing equipment and pipelines",
        "Changes in velocity influence forces and energy requirements",
        "It increases energy losses and can produce vibration or erosion"
      ],
      a: 1
    },

    {
      id: "PGP121-Q31",
      cat: "Concepts",
      q: "What is a flow field?",
      o: [
        "Spatial description of flow properties such as velocity",
        "Flow whose significant variation occurs in two spatial directions",
        "Volumetric flow measures volume/time; mass flow measures mass/time",
        "Magnitude and direction of velocity"
      ],
      a: 0
    },

    {
      id: "PGP121-Q32",
      cat: "Concepts",
      q: "What is one-dimensional flow?",
      o: [
        "Spatial description of flow properties such as velocity",
        "The locus of particles that have passed through a particular point",
        "Flow approximated as varying significantly in only one spatial direction",
        "Volumetric flow measures volume/time; mass flow measures mass/time"
      ],
      a: 2
    },

    {
      id: "PGP121-Q33",
      cat: "Concepts",
      q: "What is two-dimensional flow?",
      o: [
        "Spatial description of flow properties such as velocity",
        "Mass per unit volume",
        "Particles that have passed through a particular point",
        "Flow whose significant variation occurs in two spatial directions"
      ],
      a: 3
    },

    {
      id: "PGP121-Q34",
      cat: "Concepts",
      q: "What is three-dimensional flow?",
      o: [
        "Particles that have passed through a particular point",
        "Flow in which fluid elements rotate",
        "A small representative element of fluid used to describe flow behaviour",
        "Flow varying significantly in three spatial directions"
      ],
      a: 3
    },

    {
      id: "PGP121-Q35",
      cat: "Concepts",
      q: "Give two examples of equipment where fluid motion is important.",
      o: [
        "Kinematics describes motion; dynamics considers forces",
        "Flow during startup of a pump",
        "Pumps and pipelines",
        "Flow properties change with time at a fixed point"
      ],
      a: 2
    },

    {
      id: "PGP121-Q36",
      cat: "Concepts",
      q: "Explain why velocity may increase in a narrowing pipe.",
      o: [
        "Continuity requires the same mass/volume flow to pass through the smaller area",
        "Incompressible flow",
        "Petroleum processing involves movement of liquids and gases through pipes and equipment, so understanding their motion is fundamental",
        "At a fixed point in the pipeline, velocity and other flow properties remain constant with time"
      ],
      a: 0
    },

    {
      id: "PGP121-Q37",
      cat: "Concepts",
      q: "State two differences between laminar and turbulent flow.",
      o: [
        "Pipeline transport and flow through processing equipment",
        "Laminar flow is orderly and layered; turbulent flow is irregular and highly mixed",
        "Conservation of mass",
        "It helps describe and predict fluid motion in petroleum-processing equipment and pipelines"
      ],
      a: 1
    },

    {
      id: "PGP121-Q38",
      cat: "Concepts",
      q: "What type of flow has approximately constant density?",
      o: [
        "Flow in which fluid elements rotate",
        "Magnitude and direction of velocity",
        "Incompressible flow",
        "Average fluid velocity"
      ],
      a: 2
    },

    {
      id: "PGP121-Q39",
      cat: "Concepts",
      q: "What type of flow is commonly associated with strong mixing?",
      o: [
        "m/s²",
        "m/s",
        "Turbulent flow",
        "m³/s"
      ],
      a: 2
    },

    {
      id: "PGP121-Q40",
      cat: "Concepts",
      q: "What does a velocity vector provide?",
      o: [
        "Magnitude and direction of velocity",
        "Kinematics describes motion; dynamics considers forces",
        "The locus of particles that have passed through a particular point",
        "Flow properties remain constant from one location to another"
      ],
      a: 0
    },

    {
      id: "PGP121-Q41",
      cat: "Concepts",
      q: "What is the SI unit of velocity?",
      o: [
        "Turbulent flow",
        "m³/s",
        "m/s",
        "m/s²"
      ],
      a: 2
    },

    {
      id: "PGP121-Q42",
      cat: "Concepts",
      q: "What is the SI unit of acceleration?",
      o: [
        "m³/s",
        "Turbulent flow",
        "m/s",
        "m/s²"
      ],
      a: 3
    },

    {
      id: "PGP121-Q43",
      cat: "Concepts",
      q: "What is the SI unit of volumetric flow rate?",
      o: [
        "m/s",
        "m³/s",
        "m/s²",
        "Turbulent flow"
      ],
      a: 1
    },

    {
      id: "PGP121-Q44",
      cat: "Concepts",
      q: "What is the SI unit of mass flow rate?",
      o: [
        "kg/s",
        "Turbulent flow",
        "m³/s",
        "m/s²"
      ],
      a: 0
    },

    {
      id: "PGP121-Q45",
      cat: "Concepts",
      q: "What is density?",
      o: [
        "Flow in which fluid elements rotate",
        "Volumetric flow measures volume/time; mass flow measures mass/time",
        "Mass per unit volume",
        "Velocity decreases"
      ],
      a: 2
    },

    {
      id: "PGP121-Q46",
      cat: "Concepts",
      q: "If density increases while Q remains constant, what happens to mass flow rate?",
      o: [
        "It increases",
        "kg/s",
        "m³/s",
        "m/s"
      ],
      a: 0
    },

    {
      id: "PGP121-Q47",
      cat: "Calculations",
      q: "If Q = 4 m³/s and density = 800 kg/m³, find mass flow rate.",
      o: [
        "1600 kg/s",
        "6400 kg/s",
        "3200 kg/s",
        "2400 kg/s"
      ],
      a: 2
    },

    {
      id: "PGP121-Q48",
      cat: "Concepts",
      q: "Explain steady flow using a pipeline example.",
      o: [
        "Continuity requires the same mass/volume flow to pass through the smaller area",
        "At a fixed point in the pipeline, velocity and other flow properties remain constant with time",
        "Petroleum processing involves movement of liquids and gases through pipes and equipment, so understanding their motion is fundamental",
        "Direction of the velocity vector at a particular point and time"
      ],
      a: 1
    },

    {
      id: "PGP121-Q49",
      cat: "Concepts",
      q: "Give one example of unsteady flow.",
      o: [
        "Flow during startup of a pump",
        "Mass flowing through a section per unit time",
        "A line tangent to the instantaneous velocity direction at every point",
        "Pumps and pipelines"
      ],
      a: 0
    },

    {
      id: "PGP121-Q50",
      cat: "Concepts",
      q: "What is the difference between flow description and force analysis?",
      o: [
        "To show how velocity varies across a flow section",
        "Cross-sectional flow area",
        "Flow in which fluid elements rotate",
        "Kinematics describes motion; dynamics considers forces"
      ],
      a: 3
    },

    {
      id: "PGP121-Q51",
      cat: "Concepts",
      q: "Why are streamlines useful?",
      o: [
        "They help control material balance and process operation",
        "Changes in velocity influence forces and energy requirements",
        "They show instantaneous flow direction",
        "It increases energy losses and can produce vibration or erosion"
      ],
      a: 2
    },

    {
      id: "PGP121-Q52",
      cat: "Concepts",
      q: "Can streamlines cross in a normal flow field?",
      o: [
        "No",
        "Yes"
      ],
      a: 0
    },

    {
      id: "PGP121-Q53",
      cat: "Concepts",
      q: "What does a pathline describe?",
      o: [
        "A line tangent to the instantaneous velocity direction at every point",
        "Flow in which fluid elements rotate",
        "To show how velocity varies across a flow section",
        "The trajectory of an individual fluid particle"
      ],
      a: 3
    },

    {
      id: "PGP121-Q54",
      cat: "Concepts",
      q: "What does a streakline describe?",
      o: [
        "Volume flowing per unit time",
        "Kinematics describes motion; dynamics considers forces",
        "Flow approximated as varying significantly in only one spatial direction",
        "Particles that have passed through a particular point"
      ],
      a: 3
    },

    {
      id: "PGP121-Q55",
      cat: "Concepts",
      q: "What happens to velocity if pipe diameter decreases while flow remains constant?",
      o: [
        "A small representative element of fluid used to describe flow behaviour",
        "Flow whose significant variation occurs in two spatial directions",
        "Spatial description of flow properties such as velocity",
        "Velocity increases"
      ],
      a: 3
    },

    {
      id: "PGP121-Q56",
      cat: "Concepts",
      q: "What happens if pipe diameter increases?",
      o: [
        "Flow in which fluid elements have no net rotation",
        "To show how velocity varies across a flow section",
        "Flow whose significant variation occurs in two spatial directions",
        "Velocity decreases"
      ],
      a: 3
    },

    {
      id: "PGP121-Q57",
      cat: "Concepts",
      q: "Why is density important in fluid calculations?",
      o: [
        "Changes in velocity influence forces and energy requirements",
        "It increases energy losses and can produce vibration or erosion",
        "It helps describe and predict fluid motion in petroleum-processing equipment and pipelines",
        "It connects volume flow to mass flow"
      ],
      a: 3
    },

    {
      id: "PGP121-Q58",
      cat: "Concepts",
      q: "What is the purpose of a velocity profile?",
      o: [
        "Study of fluids at rest",
        "Flow properties vary spatially",
        "Average fluid velocity",
        "To show how velocity varies across a flow section"
      ],
      a: 3
    },

    {
      id: "PGP121-Q59",
      cat: "Concepts",
      q: "Why can turbulent flow be useful?",
      o: [
        "It connects volume flow to mass flow",
        "It promotes mixing and heat/mass transfer",
        "Changes in velocity influence forces and energy requirements",
        "They help control material balance and process operation"
      ],
      a: 1
    },

    {
      id: "PGP121-Q60",
      cat: "Concepts",
      q: "Why can turbulent flow also cause problems?",
      o: [
        "It connects volume flow to mass flow",
        "They help control material balance and process operation",
        "It helps describe and predict fluid motion in petroleum-processing equipment and pipelines",
        "It increases energy losses and can produce vibration or erosion"
      ],
      a: 3
    },

    {
      id: "PGP121-Q61",
      cat: "Concepts",
      q: "Define conservation of mass.",
      o: [
        "Mass cannot be created or destroyed in a closed system",
        "Flow properties change with time at a fixed point",
        "Mass flowing through a section per unit time",
        "Study of fluid motion together with the forces producing the motion"
      ],
      a: 0
    },

    {
      id: "PGP121-Q62",
      cat: "Concepts",
      q: "What is the relationship between density, volume and mass?",
      o: [
        "ṁ = ρAV",
        "m = ρ V",
        "Q = AV",
        "A1V1 = A2V2"
      ],
      a: 1
    },

    {
      id: "PGP121-Q63",
      cat: "Calculations",
      q: "If density = 900 kg/m³ and V = 5 m³, find mass.",
      o: [
        "2700 kg",
        "5625 kg",
        "9000 kg",
        "4500 kg"
      ],
      a: 3
    },

    {
      id: "PGP121-Q64",
      cat: "Concepts",
      q: "What is the difference between volumetric and mass flow rate?",
      o: [
        "Kinematics describes motion; dynamics considers forces",
        "Direction of the velocity vector at a particular point and time",
        "Volumetric flow measures volume/time; mass flow measures mass/time",
        "A small representative element of fluid used to describe flow behaviour"
      ],
      a: 2
    },

    {
      id: "PGP121-Q65",
      cat: "Concepts",
      q: "Why are flow measurements important in a refinery?",
      o: [
        "They help control material balance and process operation",
        "It increases energy losses and can produce vibration or erosion",
        "It helps describe and predict fluid motion in petroleum-processing equipment and pipelines",
        "Changes in velocity influence forces and energy requirements"
      ],
      a: 0
    },

    {
      id: "PGP121-Q66",
      cat: "Concepts",
      q: "State two petroleum applications of fluid kinematics.",
      o: [
        "Pipeline transport and flow through processing equipment",
        "Mass flowing through a section per unit time",
        "Conservation of mass",
        "Laminar flow is orderly and layered; turbulent flow is irregular and highly mixed"
      ],
      a: 0
    },

    {
      id: "PGP121-Q67",
      cat: "Concepts",
      q: "What is a fluid particle?",
      o: [
        "Direction of the velocity vector at a particular point and time",
        "Flow in which fluid elements have no net rotation",
        "A small representative element of fluid used to describe flow behaviour",
        "Mass per unit volume"
      ],
      a: 2
    },

    {
      id: "PGP121-Q68",
      cat: "Concepts",
      q: "Why is acceleration important in fluid flow?",
      o: [
        "Changes in velocity influence forces and energy requirements",
        "It promotes mixing and heat/mass transfer",
        "It increases energy losses and can produce vibration or erosion",
        "It helps describe and predict fluid motion in petroleum-processing equipment and pipelines"
      ],
      a: 0
    },

    {
      id: "PGP121-Q69",
      cat: "Concepts",
      q: "What is meant by instantaneous flow direction?",
      o: [
        "Particles that have passed through a particular point",
        "Flow in which fluid elements have no net rotation",
        "Direction of the velocity vector at a particular point and time",
        "Flow in which fluid elements rotate"
      ],
      a: 2
    },

    {
      id: "PGP121-Q70",
      cat: "Concepts",
      q: "Explain why PGP 121 is important to PNGPD.",
      o: [
        "Petroleum processing involves movement of liquids and gases through pipes and equipment, so understanding their motion is fundamental",
        "Continuity requires the same mass/volume flow to pass through the smaller area",
        "At a fixed point in the pipeline, velocity and other flow properties remain constant with time",
        "They help control material balance and process operation"
      ],
      a: 0
    }

  ]
};
// ============================================================
// PNGPD LIFE 2.0 — PGP 122
// SEPARATION PROCESS I
// ============================================================
// Course location: Library
// Reward per completed quiz: 10 coins
//
// Question format:
// id  = question ID
// cat = question category
// q   = question
// o   = answer options
// a   = correct answer index (starts from 0)
// ============================================================

window.COURSES["PGP 122"] = {

  title: "PGP 122 - Separation Process I",
  place: "library",
  reward: 10,

  // ==========================================================
  // SHORT NOTES
  // ==========================================================

  notes: [

    "Separation - division of a mixture into distinct components/phases.",

    "Separation process - operation used to distribute a mixture into separate phases.",

    "Process - change from one equilibrium condition to another.",

    "Why separation matters - chemical plants use separators before and after reactors.",

    "Mixing - random distribution of initially separate phases.",

    "Purpose of mixing - achieve uniformity and promote heat/mass transfer.",

    "Liquid mixing - mixing involving fluids.",

    "Solid mixing - mixing involving powders or solid particles.",

    "Agitation vessel - tank in which fluid is mechanically agitated.",

    "Baffle - wall-mounted strip used mainly to reduce vortexing.",

    "Impeller - rotating component that imparts motion to fluid.",

    "Axial-flow impeller - produces flow parallel to shaft.",

    "Radial-flow impeller - produces radial/tangential flow.",

    "Propeller - high-speed axial-flow impeller suitable for low-viscosity liquids.",

    "Paddle - common impeller for mixing applications.",

    "Turbine - versatile impeller type used in industrial mixing.",

    "Vortex - rotating depression/free-surface motion caused by agitation.",

    "Filtration - mechanical separation of solids from fluids.",

    "Filter medium - porous material through which fluid passes.",

    "Filter cake - accumulated solids on the filter medium.",

    "Filtrate - clarified fluid passing through filter.",

    "Filtration rate - volume of filtrate per unit time (dV/dt).",

    "Cake resistance - resistance produced by deposited solids.",

    "Medium resistance - resistance offered by filter medium.",

    "Overall pressure drop: ΔP = ΔPc + ΔPm",

    "Membrane - thin selective barrier between phases.",

    "Leaching - removal of soluble material from a solid using a solvent.",

    "Extraction - transfer of a component between phases.",

    "Evaporation - concentration by vaporizing solvent.",

    "Separation cost - separation can represent a major portion of chemical plant capital and operating cost."
  ],

  // ==========================================================
  // QUIZ
  // ==========================================================

  quiz: [

    {
      id: "PGP122-Q01",
      cat: "Concepts",
      q: "Define separation.",
      o: [
        "Random distribution of two or more initially separate phases through one another",
        "Transfer of soluble material from a solid into a liquid solvent",
        "Division of a mixture into distinct components or phases",
        "Transfer of a desired component from one phase into another phase"
      ],
      a: 2
    },

    {
      id: "PGP122-Q02",
      cat: "Concepts",
      q: "What is a separation process?",
      o: [
        "Vaporization of solvent to concentrate a solution",
        "A process that divides or distributes a mixture into separate phases",
        "Liquid/fluid mixing and solid/powder mixing",
        "Layer of retained solids formed on the filter"
      ],
      a: 1
    },

    {
      id: "PGP122-Q03",
      cat: "Concepts",
      q: "Why are separation processes important?",
      o: [
        "To improve circulation and mixing in deeper vessels",
        "It provides the driving force for filtration",
        "They purify raw materials, separate products and enable recycling",
        "Plugging reduces filtration performance"
      ],
      a: 2
    },

    {
      id: "PGP122-Q04",
      cat: "Concepts",
      q: "Define mixing.",
      o: [
        "Transfer of a desired component from one phase into another phase",
        "Random distribution of two or more initially separate phases through one another",
        "Transfer of soluble material from a solid into a liquid solvent",
        "Removal of solids from a fluid through a filter medium"
      ],
      a: 1
    },

    {
      id: "PGP122-Q05",
      cat: "Concepts",
      q: "State two purposes of mixing.",
      o: [
        "To reduce gross vortexing",
        "Wastewater treatment and oil dewaxing",
        "Uniformity and promotion of heat/mass transfer",
        "To recover desired products and recycle unreacted materials"
      ],
      a: 2
    },

    {
      id: "PGP122-Q06",
      cat: "Concepts",
      q: "What are the two broad types of mixing?",
      o: [
        "Liquid/fluid mixing and solid/powder mixing",
        "It generally increases",
        "A membrane that allows some species to pass while retaining others",
        "A process that divides or distributes a mixture into separate phases"
      ],
      a: 0
    },

    {
      id: "PGP122-Q07",
      cat: "Concepts",
      q: "What are the three main parts of agitation equipment?",
      o: [
        "Vessel, baffles and impeller",
        "Resistance to flow caused by deposited filter solids",
        "Liquid/fluid mixing and solid/powder mixing",
        "A process that divides or distributes a mixture into separate phases"
      ],
      a: 0
    },

    {
      id: "PGP122-Q08",
      cat: "Concepts",
      q: "What is the function of an impeller?",
      o: [
        "Resistance caused by the filter medium itself",
        "Retain solids and produce a reasonably clear filtrate",
        "To impart motion to the fluid",
        "To separate and purify hydrocarbon/process streams"
      ],
      a: 2
    },

    {
      id: "PGP122-Q09",
      cat: "Concepts",
      q: "What is the purpose of baffles?",
      o: [
        "Pressure drop, area, viscosity, cake resistance and medium resistance",
        "To reduce gross vortexing",
        "Resistance to flow caused by deposited filter solids",
        "A vessel equipped to mechanically mix its contents"
      ],
      a: 1
    },

    {
      id: "PGP122-Q10",
      cat: "Concepts",
      q: "Why is vortexing undesirable?",
      o: [
        "It improves transfer of heat or mass",
        "It can reduce effective mixing and promote unwanted surface rotation",
        "It improves contact between phases",
        "Impurities can interfere with reactions and damage catalysts/equipment"
      ],
      a: 1
    },

    {
      id: "PGP122-Q11",
      cat: "Concepts",
      q: "What is an axial-flow impeller?",
      o: [
        "Liquid from which suspended solids have been removed",
        "Properties such as size, charge and molecular interactions",
        "One producing flow parallel to the shaft axis",
        "Liquid/fluid mixing and solid/powder mixing"
      ],
      a: 2
    },

    {
      id: "PGP122-Q12",
      cat: "Concepts",
      q: "What is a radial-flow impeller?",
      o: [
        "A process that divides or distributes a mixture into separate phases",
        "One producing radial/tangential flow",
        "Filtration capacity/rate generally increases under comparable conditions",
        "Solid retained by the filter"
      ],
      a: 1
    },

    {
      id: "PGP122-Q13",
      cat: "Concepts",
      q: "Name three major impeller types.",
      o: [
        "Propellers, paddles and turbines",
        "Petroleum plants continuously separate, purify and concentrate process streams",
        "High-speed axial-flow impeller",
        "Evaporation removes solvent by vaporization; filtration separates solids from fluids mechanically"
      ],
      a: 0
    },

    {
      id: "PGP122-Q14",
      cat: "Concepts",
      q: "What is a propeller?",
      o: [
        "High-speed axial-flow impeller",
        "A process that divides or distributes a mixture into separate phases",
        "Solid retained by the filter",
        "A vessel equipped to mechanically mix its contents"
      ],
      a: 0
    },

    {
      id: "PGP122-Q15",
      cat: "Concepts",
      q: "For what type of liquid is a propeller particularly suitable?",
      o: [
        "It is especially important during early filtration",
        "Low-viscosity liquids",
        "Pressure drop, area, viscosity, cake resistance and medium resistance",
        "To recover desired products and recycle unreacted materials"
      ],
      a: 1
    },

    {
      id: "PGP122-Q16",
      cat: "Concepts",
      q: "What is pitch of a propeller?",
      o: [
        "Resistance to flow caused by deposited filter solids",
        "It is especially important during early filtration",
        "Ratio of longitudinal distance moved per revolution to propeller diameter",
        "Propeller pitch equal to one"
      ],
      a: 2
    },

    {
      id: "PGP122-Q17",
      cat: "Concepts",
      q: "What is square pitch?",
      o: [
        "Properties such as size, charge and molecular interactions",
        "Propeller pitch equal to one",
        "A membrane that allows some species to pass while retaining others",
        "One producing flow parallel to the shaft axis"
      ],
      a: 1
    },

    {
      id: "PGP122-Q18",
      cat: "Concepts",
      q: "Define filtration.",
      o: [
        "Separation using a selective membrane barrier",
        "Removal of solids from a fluid through a filter medium",
        "Transfer of a desired component from one phase into another phase",
        "Division of a mixture into distinct components or phases"
      ],
      a: 1
    },

    {
      id: "PGP122-Q19",
      cat: "Concepts",
      q: "What is the filter medium?",
      o: [
        "Propeller pitch equal to one",
        "A membrane that allows some species to pass while retaining others",
        "One producing flow parallel to the shaft axis",
        "Permeable material used to retain particles"
      ],
      a: 3
    },

    {
      id: "PGP122-Q20",
      cat: "Concepts",
      q: "What is filter cake?",
      o: [
        "Liquid from which suspended solids have been removed",
        "Driving force for filtration increases",
        "An impeller with blades used for industrial agitation",
        "Layer of retained solids formed on the filter"
      ],
      a: 3
    },

    {
      id: "PGP122-Q21",
      cat: "Concepts",
      q: "What is filtrate?",
      o: [
        "Fluid passing through the filter",
        "Accumulation of unwanted material on/in a membrane that reduces performance",
        "Solid retained by the filter",
        "To separate and purify hydrocarbon/process streams"
      ],
      a: 0
    },

    {
      id: "PGP122-Q22",
      cat: "Concepts",
      q: "What is residue?",
      o: [
        "An impeller with blades used for industrial agitation",
        "Retain solids and produce a reasonably clear filtrate",
        "It is especially important during early filtration",
        "Solid retained by the filter"
      ],
      a: 3
    },

    {
      id: "PGP122-Q23",
      cat: "Concepts",
      q: "What is filtration rate?",
      o: [
        "A more concentrated solution or solids depending on the operation",
        "dV/dt",
        "Layer of retained solids formed on the filter",
        "Mixture containing solid particles dispersed in a liquid"
      ],
      a: 1
    },

    {
      id: "PGP122-Q24",
      cat: "Concepts",
      q: "State two applications of filtration.",
      o: [
        "To impart motion to the fluid",
        "Wastewater treatment and oil dewaxing",
        "Vaporization of solvent to concentrate a solution",
        "Uniformity and promotion of heat/mass transfer"
      ],
      a: 1
    },

    {
      id: "PGP122-Q25",
      cat: "Concepts",
      q: "What should a good filter medium do?",
      o: [
        "Filtration capacity/rate generally increases under comparable conditions",
        "Retain solids and produce a reasonably clear filtrate",
        "A membrane that allows some species to pass while retaining others",
        "Vessel, baffles and impeller"
      ],
      a: 1
    },

    {
      id: "PGP122-Q26",
      cat: "Concepts",
      q: "Why must filter media resist plugging?",
      o: [
        "It improves contact between phases",
        "Plugging reduces filtration performance",
        "To improve circulation and mixing in deeper vessels",
        "Cylindrical vessels provide useful mechanical and flow characteristics"
      ],
      a: 1
    },

    {
      id: "PGP122-Q27",
      cat: "Concepts",
      q: "What is cake resistance?",
      o: [
        "To separate and purify hydrocarbon/process streams",
        "Resistance to flow caused by deposited filter solids",
        "One producing flow parallel to the shaft axis",
        "Vessel, baffles and impeller"
      ],
      a: 1
    },

    {
      id: "PGP122-Q28",
      cat: "Concepts",
      q: "What is medium resistance?",
      o: [
        "Resistance caused by the filter medium itself",
        "A membrane that allows some species to pass while retaining others",
        "Layer of retained solids formed on the filter",
        "A vessel equipped to mechanically mix its contents"
      ],
      a: 0
    },

    {
      id: "PGP122-Q29",
      cat: "Concepts",
      q: "State the relationship for overall pressure drop.",
      o: [
        "Wastewater treatment and oil dewaxing",
        "ΔP = ΔPc + ΔPm",
        "Removal of solids from a fluid through a filter medium",
        "Uniformity and promotion of heat/mass transfer"
      ],
      a: 1
    },

    {
      id: "PGP122-Q30",
      cat: "Concepts",
      q: "What factors affect filtration rate?",
      o: [
        "Liquid/fluid mixing and solid/powder mixing",
        "Liquid from which suspended solids have been removed",
        "Pressure drop, area, viscosity, cake resistance and medium resistance",
        "Fluid passing through the filter"
      ],
      a: 2
    },

    {
      id: "PGP122-Q31",
      cat: "Concepts",
      q: "What happens to cake resistance as filtration progresses?",
      o: [
        "To reduce gross vortexing",
        "Fluid passing through the filter",
        "It generally increases",
        "An impeller with paddle-like blades for moving fluid"
      ],
      a: 2
    },

    {
      id: "PGP122-Q32",
      cat: "Concepts",
      q: "What happens to filter-medium resistance during cake filtration?",
      o: [
        "A membrane that allows some species to pass while retaining others",
        "It is especially important during early filtration",
        "Solid retained by the filter",
        "Propeller pitch equal to one"
      ],
      a: 1
    },

    {
      id: "PGP122-Q33",
      cat: "Calculations",
      q: "A filter produces 20 m³ in 5 s. Find filtration rate.",
      o: [
        "5 m³/s",
        "7 m³/s",
        "6 m³/s",
        "4 m³/s"
      ],
      a: 3
    },

    {
      id: "PGP122-Q34",
      cat: "Concepts",
      q: "Define membrane separation.",
      o: [
        "Separation using a selective membrane barrier",
        "Transfer of soluble material from a solid into a liquid solvent",
        "Removal of solids from a fluid through a filter medium",
        "Transfer of a desired component from one phase into another phase"
      ],
      a: 0
    },

    {
      id: "PGP122-Q35",
      cat: "Concepts",
      q: "What determines membrane selectivity?",
      o: [
        "Resistance to flow caused by deposited filter solids",
        "High-speed axial-flow impeller",
        "Vaporization of solvent to concentrate a solution",
        "Properties such as size, charge and molecular interactions"
      ],
      a: 3
    },

    {
      id: "PGP122-Q36",
      cat: "Concepts",
      q: "What is a semipermeable membrane?",
      o: [
        "Fluid passing through the filter",
        "A more concentrated solution or solids depending on the operation",
        "A membrane that allows some species to pass while retaining others",
        "Permeable material used to retain particles"
      ],
      a: 2
    },

    {
      id: "PGP122-Q37",
      cat: "Concepts",
      q: "Why can membranes separate very small particles?",
      o: [
        "Cylindrical vessels provide useful mechanical and flow characteristics",
        "They purify raw materials, separate products and enable recycling",
        "To prevent degradation and loss of performance",
        "Their selective barriers can operate at molecular and ionic scales"
      ],
      a: 3
    },

    {
      id: "PGP122-Q38",
      cat: "Concepts",
      q: "What is size exclusion?",
      o: [
        "Liquid/fluid mixing and solid/powder mixing",
        "Separation based on differences in molecular/particle size",
        "Mixture containing solid particles dispersed in a liquid",
        "It generally increases"
      ],
      a: 1
    },

    {
      id: "PGP122-Q39",
      cat: "Concepts",
      q: "Define leaching.",
      o: [
        "Separation using a selective membrane barrier",
        "Transfer of soluble material from a solid into a liquid solvent",
        "Random distribution of two or more initially separate phases through one another",
        "Removal of solids from a fluid through a filter medium"
      ],
      a: 1
    },

    {
      id: "PGP122-Q40",
      cat: "Concepts",
      q: "Give one petroleum-related example where extraction/separation concepts can be relevant.",
      o: [
        "To impart motion to the fluid",
        "To reduce gross vortexing",
        "Recovery or purification of selected components from process streams",
        "One producing radial/tangential flow"
      ],
      a: 2
    },

    {
      id: "PGP122-Q41",
      cat: "Concepts",
      q: "Define extraction.",
      o: [
        "Removal of solids from a fluid through a filter medium",
        "Division of a mixture into distinct components or phases",
        "Transfer of a desired component from one phase into another phase",
        "Separation using a selective membrane barrier"
      ],
      a: 2
    },

    {
      id: "PGP122-Q42",
      cat: "Concepts",
      q: "What is evaporation?",
      o: [
        "Vessel, baffles and impeller",
        "Ratio of longitudinal distance moved per revolution to propeller diameter",
        "Properties such as size, charge and molecular interactions",
        "Vaporization of solvent to concentrate a solution"
      ],
      a: 3
    },

    {
      id: "PGP122-Q43",
      cat: "Concepts",
      q: "What remains after evaporation?",
      o: [
        "Resistance to flow caused by deposited filter solids",
        "To reduce gross vortexing",
        "A more concentrated solution or solids depending on the operation",
        "Driving force for filtration increases"
      ],
      a: 2
    },

    {
      id: "PGP122-Q44",
      cat: "Concepts",
      q: "Differentiate evaporation and filtration.",
      o: [
        "Evaporation removes solvent by vaporization; filtration separates solids from fluids mechanically",
        "Properties such as size, charge and molecular interactions",
        "Leaching removes soluble material from a solid; extraction transfers a component between phases",
        "To impart motion to the fluid"
      ],
      a: 0
    },

    {
      id: "PGP122-Q45",
      cat: "Concepts",
      q: "Differentiate leaching and extraction.",
      o: [
        "Evaporation removes solvent by vaporization; filtration separates solids from fluids mechanically",
        "Leaching removes soluble material from a solid; extraction transfers a component between phases",
        "Separation based on differences in molecular/particle size",
        "In highly viscous systems where shear suppresses gross rotation"
      ],
      a: 1
    },

    {
      id: "PGP122-Q46",
      cat: "Concepts",
      q: "Why is mixing important before some separation operations?",
      o: [
        "To recover desired products and recycle unreacted materials",
        "It improves contact between phases",
        "Their selective barriers can operate at molecular and ionic scales",
        "To prevent degradation and loss of performance"
      ],
      a: 1
    },

    {
      id: "PGP122-Q47",
      cat: "Concepts",
      q: "Why is contact between phases important?",
      o: [
        "It provides the driving force for filtration",
        "It improves transfer of heat or mass",
        "Impurities can interfere with reactions and damage catalysts/equipment",
        "To recover desired products and recycle unreacted materials"
      ],
      a: 1
    },

    {
      id: "PGP122-Q48",
      cat: "Concepts",
      q: "What is an agitation vessel?",
      o: [
        "A vessel equipped to mechanically mix its contents",
        "Resistance to flow caused by deposited filter solids",
        "Permeable material used to retain particles",
        "Properties such as size, charge and molecular interactions"
      ],
      a: 0
    },

    {
      id: "PGP122-Q49",
      cat: "Concepts",
      q: "Why are tanks often cylindrical?",
      o: [
        "They purify raw materials, separate products and enable recycling",
        "Cylindrical vessels provide useful mechanical and flow characteristics",
        "It can reduce effective mixing and promote unwanted surface rotation",
        "Plugging reduces filtration performance"
      ],
      a: 1
    },

    {
      id: "PGP122-Q50",
      cat: "Concepts",
      q: "Why may multiple impellers be used?",
      o: [
        "Higher viscosity generally makes fluid flow through the filter more difficult",
        "Their selective barriers can operate at molecular and ionic scales",
        "To improve circulation and mixing in deeper vessels",
        "Impurities can interfere with reactions and damage catalysts/equipment"
      ],
      a: 2
    },

    {
      id: "PGP122-Q51",
      cat: "Concepts",
      q: "When may baffles be unnecessary?",
      o: [
        "To prevent degradation and loss of performance",
        "In highly viscous systems where shear suppresses gross rotation",
        "Plugging reduces filtration performance",
        "Random distribution of two or more initially separate phases through one another"
      ],
      a: 1
    },

    {
      id: "PGP122-Q52",
      cat: "Concepts",
      q: "What is a turbine impeller?",
      o: [
        "An impeller with blades used for industrial agitation",
        "A vessel equipped to mechanically mix its contents",
        "High-speed axial-flow impeller",
        "Layer of retained solids formed on the filter"
      ],
      a: 0
    },

    {
      id: "PGP122-Q53",
      cat: "Concepts",
      q: "What is a paddle impeller?",
      o: [
        "An impeller with paddle-like blades for moving fluid",
        "Pressure drop, area, viscosity, cake resistance and medium resistance",
        "Solid retained by the filter",
        "Driving force for filtration increases"
      ],
      a: 0
    },

    {
      id: "PGP122-Q54",
      cat: "Concepts",
      q: "What is a clarified liquid?",
      o: [
        "Liquid from which suspended solids have been removed",
        "Resistance caused by the filter medium itself",
        "An impeller with blades used for industrial agitation",
        "Permeable material used to retain particles"
      ],
      a: 0
    },

    {
      id: "PGP122-Q55",
      cat: "Concepts",
      q: "What is a slurry?",
      o: [
        "Properties such as size, charge and molecular interactions",
        "Accumulation of unwanted material on/in a membrane that reduces performance",
        "Mixture containing solid particles dispersed in a liquid",
        "Fluid passing through the filter"
      ],
      a: 2
    },

    {
      id: "PGP122-Q56",
      cat: "Concepts",
      q: "Why is viscosity important in filtration?",
      o: [
        "Petroleum plants continuously separate, purify and concentrate process streams",
        "Higher viscosity generally makes fluid flow through the filter more difficult",
        "To recover desired products and recycle unreacted materials",
        "It improves contact between phases"
      ],
      a: 1
    },

    {
      id: "PGP122-Q57",
      cat: "Concepts",
      q: "What happens if filtration area increases?",
      o: [
        "Increasing cake thickness generally increases resistance",
        "Filtration capacity/rate generally increases under comparable conditions",
        "Vaporization of solvent to concentrate a solution",
        "Accumulation of unwanted material on/in a membrane that reduces performance"
      ],
      a: 1
    },

    {
      id: "PGP122-Q58",
      cat: "Concepts",
      q: "What happens if pressure difference increases?",
      o: [
        "Driving force for filtration increases",
        "Ratio of longitudinal distance moved per revolution to propeller diameter",
        "A more concentrated solution or solids depending on the operation",
        "High-speed axial-flow impeller"
      ],
      a: 0
    },

    {
      id: "PGP122-Q59",
      cat: "Concepts",
      q: "Why is pressure drop important?",
      o: [
        "It improves transfer of heat or mass",
        "It provides the driving force for filtration",
        "To recover desired products and recycle unreacted materials",
        "Their selective barriers can operate at molecular and ionic scales"
      ],
      a: 1
    },

    {
      id: "PGP122-Q60",
      cat: "Calculations",
      q: "Calculate Q if A = 0.5 m² and velocity = 2 m/s.",
      o: [
        "1 m³/s",
        "4 m³/s",
        "3 m³/s",
        "2 m³/s"
      ],
      a: 0
    },

    {
      id: "PGP122-Q61",
      cat: "Concepts",
      q: "What is the main purpose of separation in a refinery?",
      o: [
        "One producing radial/tangential flow",
        "Driving force for filtration increases",
        "To separate and purify hydrocarbon/process streams",
        "Solid retained by the filter"
      ],
      a: 2
    },

    {
      id: "PGP122-Q62",
      cat: "Concepts",
      q: "Why must raw materials sometimes be purified before reaction?",
      o: [
        "Impurities can interfere with reactions and damage catalysts/equipment",
        "Plugging reduces filtration performance",
        "It improves transfer of heat or mass",
        "It provides the driving force for filtration"
      ],
      a: 0
    },

    {
      id: "PGP122-Q63",
      cat: "Concepts",
      q: "Why are products separated after reaction?",
      o: [
        "To prevent degradation and loss of performance",
        "It improves transfer of heat or mass",
        "To recover desired products and recycle unreacted materials",
        "Plugging reduces filtration performance"
      ],
      a: 2
    },

    {
      id: "PGP122-Q64",
      cat: "Concepts",
      q: "What is the relationship between cake thickness and resistance?",
      o: [
        "Mixture containing solid particles dispersed in a liquid",
        "Increasing cake thickness generally increases resistance",
        "To separate and purify hydrocarbon/process streams",
        "Vessel, baffles and impeller"
      ],
      a: 1
    },

    {
      id: "PGP122-Q65",
      cat: "Concepts",
      q: "What is membrane fouling?",
      o: [
        "Accumulation of unwanted material on/in a membrane that reduces performance",
        "To impart motion to the fluid",
        "Mixture containing solid particles dispersed in a liquid",
        "Solid retained by the filter"
      ],
      a: 0
    },

    {
      id: "PGP122-Q66",
      cat: "Concepts",
      q: "Why should membrane material be chemically compatible with the feed?",
      o: [
        "Impurities can interfere with reactions and damage catalysts/equipment",
        "To improve circulation and mixing in deeper vessels",
        "It can reduce effective mixing and promote unwanted surface rotation",
        "To prevent degradation and loss of performance"
      ],
      a: 3
    },

    {
      id: "PGP122-Q67",
      cat: "Concepts",
      q: "Explain why evaporation can concentrate a solution.",
      o: [
        "Feed purification and product recovery require separation before and after reaction",
        "Wastewater treatment and oil dewaxing",
        "Solid retained by the filter",
        "Solvent is removed as vapour while less volatile dissolved material remains"
      ],
      a: 3
    },

    {
      id: "PGP122-Q68",
      cat: "Concepts",
      q: "Explain why separation equipment is common around reactors.",
      o: [
        "Layer of retained solids formed on the filter",
        "Solvent is removed as vapour while less volatile dissolved material remains",
        "Feed purification and product recovery require separation before and after reaction",
        "Vaporization of solvent to concentrate a solution"
      ],
      a: 2
    },

    {
      id: "PGP122-Q69",
      cat: "Concepts",
      q: "Give two mechanical separation operations.",
      o: [
        "One producing flow parallel to the shaft axis",
        "Separation based on differences in molecular/particle size",
        "It generally increases",
        "Filtration and screening"
      ],
      a: 3
    },

    {
      id: "PGP122-Q70",
      cat: "Concepts",
      q: "Why is PGP 122 important to petroleum processing?",
      o: [
        "It can reduce effective mixing and promote unwanted surface rotation",
        "Their selective barriers can operate at molecular and ionic scales",
        "It improves contact between phases",
        "Petroleum plants continuously separate, purify and concentrate process streams"
      ],
      a: 3
    }

  ]
};
// ============================================================
// PNGPD LIFE 2.0 — PGP 123
// WASTEWATER, STEAM AND ENERGY
// ============================================================
// Course location: Library
// Reward per completed quiz: 10 coins
//
// Question format:
// id  = question ID
// cat = question category
// q   = question
// o   = answer options
// a   = correct answer index (starts at 0)
// ============================================================

window.COURSES["PGP 123"] = {

  title: "PGP 123 - Wastewater, Steam and Energy",
  place: "library",
  reward: 10,

  // ==========================================================
  // SHORT NOTES
  // ==========================================================

  notes: [

    // ---------------------- WASTEWATER -----------------------

    "Wastewater - water contaminated by domestic, industrial or other activities.",
    "Industrial wastewater - wastewater generated by industrial processes.",
    "Untreated wastewater can damage aquatic ecosystems and human health.",
    "Excess nutrients can cause algal blooms.",
    "Algal blooms can reduce dissolved oxygen.",

    // ---------------- WASTEWATER TREATMENT -------------------

    "Preliminary treatment removes large debris.",
    "Screening traps large materials.",
    "Grit removal removes sand and heavy particles.",
    "Flow equalization balances incoming flow.",
    "Primary treatment removes settleable and floating solids.",
    "Sedimentation allows solids to settle by gravity.",
    "Sludge is the solid by-product of treatment.",

    // ---------------- SECONDARY TREATMENT --------------------

    "Secondary treatment biologically removes dissolved/colloidal organics.",
    "Activated sludge uses microorganisms in aerated tanks.",
    "Trickling filters use microbial biofilms.",
    "Aerated lagoons are biological treatment ponds.",
    "Oxidation ditches are continuously mixed and aerated channels.",

    // ----------------- TERTIARY TREATMENT --------------------

    "Tertiary treatment removes remaining contaminants.",
    "Filtration removes fine particles.",
    "Disinfection destroys pathogens.",
    "Reverse osmosis uses a semipermeable membrane.",
    "Adsorption removes contaminants by attachment to a surface.",

    // ---------------- SLUDGE MANAGEMENT ---------------------

    "Thickening reduces sludge water content.",
    "Anaerobic digestion occurs without oxygen and can produce methane.",
    "Aerobic digestion uses oxygen.",
    "Dewatering further removes water from sludge.",
    "Treated sludge can sometimes be reused as biosolids if safe.",

    // ------------------- WATER REUSE -------------------------

    "Treated wastewater can be reused industrially or agriculturally.",

    // ----------------------- STEAM ---------------------------

    "Steam is vaporized water carrying thermal energy.",

    // ----------------------- ENERGY --------------------------

    "Energy is the capacity to do work."
  ],

  // ==========================================================
  // QUIZ
  // ==========================================================

  quiz: [

    // ========================================================
    // WASTEWATER BASICS
    // ========================================================

    {
      id: "PGP123-Q01",
      cat: "Concepts",
      q: "Define wastewater.",
      o: [
        "Vaporized water containing thermal energy",
        "Shallow pond where microorganisms decompose organics with aeration",
        "Biological treatment of dissolved and colloidal organic matter",
        "Contaminated water resulting from human or industrial activities"
      ],
      a: 3
    },

    {
      id: "PGP123-Q02",
      cat: "Concepts",
      q: "What is industrial wastewater?",
      o: [
        "Heat absorbed/released during phase change",
        "Wastewater produced from industrial processes",
        "Biological removal of organic pollutants",
        "Further removal of water from stabilized sludge"
      ],
      a: 1
    },

    {
      id: "PGP123-Q03",
      cat: "Concepts",
      q: "State two environmental effects of untreated wastewater.",
      o: [
        "Biological removal of organic pollutants",
        "It rejects dissolved salts through a semipermeable membrane",
        "Heat causing temperature change without phase change",
        "Aquatic ecosystem disruption and thermal pollution"
      ],
      a: 3
    },

    {
      id: "PGP123-Q04",
      cat: "Concepts",
      q: "What can excessive nutrients cause?",
      o: [
        "Using treated water again for suitable applications",
        "It may be reused, landfilled or incinerated depending on standards",
        "Removal of settleable and floating materials",
        "Algal blooms"
      ],
      a: 3
    },

    {
      id: "PGP123-Q05",
      cat: "Concepts",
      q: "Why are algal blooms harmful?",
      o: [
        "They can reduce dissolved oxygen and harm aquatic organisms",
        "To reduce volume, stabilize organic matter and enable safe disposal/reuse",
        "It can cause abrasion and operational problems",
        "Petroleum processing requires environmental protection and large quantities of process energy"
      ],
      a: 0
    },

    // ========================================================
    // PRELIMINARY AND PRIMARY TREATMENT
    // ========================================================

    {
      id: "PGP123-Q06",
      cat: "Concepts",
      q: "What is preliminary treatment?",
      o: [
        "Methane-rich biogas",
        "Heat causing temperature change without phase change",
        "Reduce sludge volume and water content",
        "Initial removal of large solids and debris"
      ],
      a: 3
    },

    {
      id: "PGP123-Q07",
      cat: "Concepts",
      q: "What does screening remove?",
      o: [
        "National Environmental Standards and Regulations Enforcement Agency",
        "Removal of settleable and floating materials",
        "Large debris such as plastics, rags and wood",
        "Using treated water again for suitable applications"
      ],
      a: 2
    },

    {
      id: "PGP123-Q08",
      cat: "Concepts",
      q: "What is grit removal?",
      o: [
        "Removal of heavy particles such as sand and gravel",
        "Higher-quality effluent and removal of remaining contaminants",
        "Stabilization of sludge using microorganisms in the presence of oxygen",
        "Advanced treatment and reuse of wastewater for drinking purposes"
      ],
      a: 0
    },

    {
      id: "PGP123-Q09",
      cat: "Concepts",
      q: "What is flow equalization?",
      o: [
        "Aerobic digestion requires oxygen; anaerobic digestion occurs without oxygen",
        "It may be reused, landfilled or incinerated depending on standards",
        "Balancing incoming wastewater flow",
        "Shallow pond where microorganisms decompose organics with aeration"
      ],
      a: 2
    },

    {
      id: "PGP123-Q10",
      cat: "Concepts",
      q: "What is primary treatment?",
      o: [
        "Using treated water again for suitable applications",
        "Removal of settleable and floating materials",
        "Steam containing moisture",
        "Separation by allowing particles to settle under gravity"
      ],
      a: 1
    },

    {
      id: "PGP123-Q11",
      cat: "Concepts",
      q: "What is sedimentation?",
      o: [
        "Circular channel providing continuous mixing and aeration",
        "Separation by allowing particles to settle under gravity",
        "Steam heated beyond its saturation temperature",
        "Total suspended solids"
      ],
      a: 1
    },

    {
      id: "PGP123-Q12",
      cat: "Concepts",
      q: "What is sludge?",
      o: [
        "Capacity to do work",
        "Advanced treatment and reuse of wastewater for drinking purposes",
        "Using treated water again for suitable applications",
        "Solid by-product of wastewater treatment"
      ],
      a: 3
    },

    // ========================================================
    // SECONDARY / BIOLOGICAL TREATMENT
    // ========================================================

    {
      id: "PGP123-Q13",
      cat: "Concepts",
      q: "Define secondary treatment.",
      o: [
        "Contaminated water resulting from human or industrial activities",
        "Biological treatment of dissolved and colloidal organic matter",
        "Steam heated beyond its saturation temperature",
        "Vaporized water containing thermal energy"
      ],
      a: 1
    },

    {
      id: "PGP123-Q14",
      cat: "Concepts",
      q: "What is activated sludge?",
      o: [
        "Methane-rich biogas",
        "Shallow pond where microorganisms decompose organics with aeration",
        "Biological removal of organic pollutants",
        "Biological treatment using microorganisms in an aerated tank"
      ],
      a: 3
    },

    {
      id: "PGP123-Q15",
      cat: "Concepts",
      q: "What is a trickling filter?",
      o: [
        "Balancing incoming wastewater flow",
        "National Environmental Standards and Regulations Enforcement Agency",
        "Total suspended solids",
        "Biological treatment system where wastewater contacts microbial biofilm on media"
      ],
      a: 3
    },

    {
      id: "PGP123-Q16",
      cat: "Concepts",
      q: "What is an aerated lagoon?",
      o: [
        "Shallow pond where microorganisms decompose organics with aeration",
        "Balancing incoming wastewater flow",
        "Large debris such as plastics, rags and wood",
        "Biological treatment system where wastewater contacts microbial biofilm on media"
      ],
      a: 0
    },

    {
      id: "PGP123-Q17",
      cat: "Concepts",
      q: "What is an oxidation ditch?",
      o: [
        "Capacity to do work",
        "Circular channel providing continuous mixing and aeration",
        "SI unit of energy",
        "Advanced treatment and reuse of wastewater for drinking purposes"
      ],
      a: 1
    },

    // ========================================================
    // TERTIARY TREATMENT
    // ========================================================

    {
      id: "PGP123-Q18",
      cat: "Concepts",
      q: "What is tertiary treatment?",
      o: [
        "Advanced treatment and reuse of wastewater for drinking purposes",
        "Attachment of contaminants onto a solid surface",
        "Separation by allowing particles to settle under gravity",
        "Advanced treatment for remaining contaminants"
      ],
      a: 3
    },

    {
      id: "PGP123-Q19",
      cat: "Concepts",
      q: "Why is disinfection performed?",
      o: [
        "It prevents harmful discharge and enables water reuse",
        "To destroy pathogens",
        "It can cause abrasion and operational problems",
        "It prevents hydraulic overloading"
      ],
      a: 1
    },

    {
      id: "PGP123-Q20",
      cat: "Concepts",
      q: "Name three disinfection methods.",
      o: [
        "Contaminated water resulting from human or industrial activities",
        "Chlorination, UV and ozonation",
        "Further removal of water from stabilized sludge",
        "Attachment of contaminants onto a solid surface"
      ],
      a: 1
    },

    {
      id: "PGP123-Q21",
      cat: "Concepts",
      q: "What is reverse osmosis?",
      o: [
        "Heat causing temperature change without phase change",
        "Membrane process used to remove salts and contaminants from water",
        "Attachment of contaminants onto a solid surface",
        "Initial removal of large solids and debris"
      ],
      a: 1
    },

    {
      id: "PGP123-Q22",
      cat: "Concepts",
      q: "What is adsorption?",
      o: [
        "Attachment of contaminants onto a solid surface",
        "Concentration of sludge by reducing water content",
        "Steam containing moisture",
        "Using treated water again for suitable applications"
      ],
      a: 0
    },

    // ========================================================
    // SLUDGE MANAGEMENT
    // ========================================================

    {
      id: "PGP123-Q23",
      cat: "Concepts",
      q: "What is sludge thickening?",
      o: [
        "Concentration of sludge by reducing water content",
        "Discharge of heated water that raises receiving-water temperature",
        "Separation by allowing particles to settle under gravity",
        "Removal of settleable and floating materials"
      ],
      a: 0
    },

    {
      id: "PGP123-Q24",
      cat: "Concepts",
      q: "What is anaerobic digestion?",
      o: [
        "Steam containing moisture",
        "Capacity to do work",
        "Shallow pond where microorganisms decompose organics with aeration",
        "Biological decomposition without oxygen"
      ],
      a: 3
    },

    {
      id: "PGP123-Q25",
      cat: "Concepts",
      q: "What gas can anaerobic digestion produce?",
      o: [
        "Large debris such as plastics, rags and wood",
        "SI unit of energy",
        "Methane-rich biogas",
        "Further removal of water from stabilized sludge"
      ],
      a: 2
    },

    {
      id: "PGP123-Q26",
      cat: "Concepts",
      q: "What is aerobic digestion?",
      o: [
        "Total suspended solids",
        "Capacity to do work",
        "Stabilization of sludge using microorganisms in the presence of oxygen",
        "Advanced treatment and reuse of wastewater for drinking purposes"
      ],
      a: 2
    },

    {
      id: "PGP123-Q27",
      cat: "Concepts",
      q: "What is dewatering?",
      o: [
        "Advanced treatment and reuse of wastewater for drinking purposes",
        "Further removal of water from stabilized sludge",
        "Aerobic digestion requires oxygen; anaerobic digestion occurs without oxygen",
        "Initial removal of large solids and debris"
      ],
      a: 1
    },

    {
      id: "PGP123-Q28",
      cat: "Concepts",
      q: "Give two methods of sludge dewatering.",
      o: [
        "Aerobic digestion requires oxygen; anaerobic digestion occurs without oxygen",
        "Petroleum and natural gas",
        "Cooling water and process water",
        "Belt press and centrifuge"
      ],
      a: 3
    },

    // ========================================================
    // WATER REUSE
    // ========================================================

    {
      id: "PGP123-Q29",
      cat: "Concepts",
      q: "What is treated wastewater reuse?",
      o: [
        "Advanced treatment for remaining contaminants",
        "Aerobic digestion requires oxygen; anaerobic digestion occurs without oxygen",
        "Measure of vapour content in steam",
        "Using treated water again for suitable applications"
      ],
      a: 3
    },

    {
      id: "PGP123-Q30",
      cat: "Concepts",
      q: "Give two industrial uses of treated wastewater.",
      o: [
        "Advanced treatment and reuse of wastewater for drinking purposes",
        "Belt press and centrifuge",
        "Cooling water and process water",
        "Petroleum and natural gas"
      ],
      a: 2
    },

    {
      id: "PGP123-Q31",
      cat: "Concepts",
      q: "What is potable reuse?",
      o: [
        "Concentration of sludge by reducing water content",
        "Capacity to do work",
        "Advanced treatment and reuse of wastewater for drinking purposes",
        "Using treated water again for suitable applications"
      ],
      a: 2
    },

    {
      id: "PGP123-Q32",
      cat: "Concepts",
      q: "What is NESREA?",
      o: [
        "National Environmental Standards and Regulations Enforcement Agency",
        "Methane-rich biogas",
        "Circular channel providing continuous mixing and aeration",
        "Concentration of sludge by reducing water content"
      ],
      a: 0
    },

    {
      id: "PGP123-Q33",
      cat: "Concepts",
      q: "What pollutants may be regulated in wastewater?",
      o: [
        "BOD, TSS, nutrients, heavy metals and pathogens",
        "SI unit of energy",
        "Removal of settleable and floating materials",
        "Large debris such as plastics, rags and wood"
      ],
      a: 0
    },

    // ========================================================
    // STEAM
    // ========================================================

    {
      id: "PGP123-Q34",
      cat: "Concepts",
      q: "Define steam.",
      o: [
        "Vaporized water containing thermal energy",
        "Contaminated water resulting from human or industrial activities",
        "Further removal of water from stabilized sludge",
        "Biological treatment of dissolved and colloidal organic matter"
      ],
      a: 0
    },

    {
      id: "PGP123-Q35",
      cat: "Concepts",
      q: "What is sensible heat?",
      o: [
        "Membrane process used to remove salts and contaminants from water",
        "Heat causing temperature change without phase change",
        "Biological treatment using microorganisms in an aerated tank",
        "Solid by-product of wastewater treatment"
      ],
      a: 1
    },

    {
      id: "PGP123-Q36",
      cat: "Concepts",
      q: "What is latent heat?",
      o: [
        "Total suspended solids",
        "Balancing incoming wastewater flow",
        "Heat absorbed/released during phase change",
        "Biological removal of organic pollutants"
      ],
      a: 2
    },

    {
      id: "PGP123-Q37",
      cat: "Concepts",
      q: "Give the sensible heat equation.",
      o: [
        "Petroleum and natural gas",
        "Solar and wind",
        "Q = mCp(Tf - Ti)",
        "Q = mHv"
      ],
      a: 2
    },

    {
      id: "PGP123-Q38",
      cat: "Concepts",
      q: "Give the latent heat equation.",
      o: [
        "Q = mCp(Tf - Ti)",
        "Solar and wind",
        "Petroleum and natural gas",
        "Q = mHv"
      ],
      a: 3
    },

    {
      id: "PGP123-Q39",
      cat: "Concepts",
      q: "What is saturated steam?",
      o: [
        "Steam produced from water heated to its boiling point",
        "It may be reused, landfilled or incinerated depending on standards",
        "Solid by-product of wastewater treatment",
        "Further removal of water from stabilized sludge"
      ],
      a: 0
    },

    {
      id: "PGP123-Q40",
      cat: "Concepts",
      q: "What is steam quality?",
      o: [
        "Sensible heat changes temperature; latent heat changes phase",
        "Attachment of contaminants onto a solid surface",
        "Removal of heavy particles such as sand and gravel",
        "Measure of vapour content in steam"
      ],
      a: 3
    },

    {
      id: "PGP123-Q41",
      cat: "Concepts",
      q: "What is wet steam?",
      o: [
        "Further removal of water from stabilized sludge",
        "Using treated water again for suitable applications",
        "Steam containing moisture",
        "Biological decomposition without oxygen"
      ],
      a: 2
    },

    {
      id: "PGP123-Q42",
      cat: "Concepts",
      q: "What is superheated steam?",
      o: [
        "BOD, TSS, nutrients, heavy metals and pathogens",
        "Shallow pond where microorganisms decompose organics with aeration",
        "Steam heated beyond its saturation temperature",
        "Removal of settleable and floating materials"
      ],
      a: 2
    },

    // ========================================================
    // ENERGY
    // ========================================================

    {
      id: "PGP123-Q43",
      cat: "Concepts",
      q: "What is energy?",
      o: [
        "Steam containing moisture",
        "Steam heated beyond its saturation temperature",
        "Steam produced from water heated to its boiling point",
        "Capacity to do work"
      ],
      a: 3
    },

    {
      id: "PGP123-Q44",
      cat: "Concepts",
      q: "Give two renewable energy sources.",
      o: [
        "Q = mCp(Tf - Ti)",
        "Cooling water and process water",
        "Q = mHv",
        "Solar and wind"
      ],
      a: 3
    },

    {
      id: "PGP123-Q45",
      cat: "Concepts",
      q: "Give two non-renewable energy sources.",
      o: [
        "Contaminated water resulting from human or industrial activities",
        "Belt press and centrifuge",
        "Petroleum and natural gas",
        "Cooling water and process water"
      ],
      a: 2
    },

    {
      id: "PGP123-Q46",
      cat: "Concepts",
      q: "What is a joule?",
      o: [
        "Total suspended solids",
        "Attachment of contaminants onto a solid surface",
        "SI unit of energy",
        "Reduce sludge volume and water content"
      ],
      a: 2
    },

    // ========================================================
    // PETROLEUM / INDUSTRIAL APPLICATIONS
    // ========================================================

    {
      id: "PGP123-Q47",
      cat: "Concepts",
      q: "Why is wastewater treatment important to petroleum industries?",
      o: [
        "It indicates oxygen demand associated with biodegradable organic matter",
        "It prevents harmful discharge and enables water reuse",
        "It rejects dissolved salts through a semipermeable membrane",
        "It prevents hydraulic overloading"
      ],
      a: 1
    },

    {
      id: "PGP123-Q48",
      cat: "Concepts",
      q: "Why is sludge treated?",
      o: [
        "To remove finer particles",
        "It rejects dissolved salts through a semipermeable membrane",
        "It can cause abrasion and operational problems",
        "To reduce volume, stabilize organic matter and enable safe disposal/reuse"
      ],
      a: 3
    },

    {
      id: "PGP123-Q49",
      cat: "Concepts",
      q: "What is the purpose of primary treatment?",
      o: [
        "Removal of settleable and floating materials",
        "Steam heated beyond its saturation temperature",
        "Circular channel providing continuous mixing and aeration",
        "Further removal of water from stabilized sludge"
      ],
      a: 0
    },

    {
      id: "PGP123-Q50",
      cat: "Concepts",
      q: "What is the purpose of secondary treatment?",
      o: [
        "Total suspended solids",
        "Aerobic digestion requires oxygen; anaerobic digestion occurs without oxygen",
        "Biological removal of organic pollutants",
        "Attachment of contaminants onto a solid surface"
      ],
      a: 2
    },

    {
      id: "PGP123-Q51",
      cat: "Concepts",
      q: "What is the purpose of tertiary treatment?",
      o: [
        "Steam containing moisture",
        "SI unit of energy",
        "Biological treatment system where wastewater contacts microbial biofilm on media",
        "Higher-quality effluent and removal of remaining contaminants"
      ],
      a: 3
    },

    {
      id: "PGP123-Q52",
      cat: "Concepts",
      q: "Which treatment stage uses activated sludge?",
      o: [
        "Circular channel providing continuous mixing and aeration",
        "Attachment of contaminants onto a solid surface",
        "Secondary treatment",
        "Preliminary treatment"
      ],
      a: 2
    },

    {
      id: "PGP123-Q53",
      cat: "Concepts",
      q: "Which stage normally comes first?",
      o: [
        "Petroleum and natural gas",
        "Preliminary treatment",
        "Balancing incoming wastewater flow",
        "Secondary treatment"
      ],
      a: 1
    },

    {
      id: "PGP123-Q54",
      cat: "Concepts",
      q: "Which stage normally follows primary treatment?",
      o: [
        "Large debris such as plastics, rags and wood",
        "Heat absorbed/released during phase change",
        "Adequately treated water can provide a controlled water source when standards are met",
        "Secondary treatment"
      ],
      a: 3
    },

    // ========================================================
    // TREATMENT PERFORMANCE / APPLICATIONS
    // ========================================================

    {
      id: "PGP123-Q55",
      cat: "Concepts",
      q: "Why is flow equalization useful?",
      o: [
        "It prevents hydraulic overloading",
        "They can reduce dissolved oxygen and harm aquatic organisms",
        "To destroy pathogens",
        "Adequately treated water can provide a controlled water source when standards are met"
      ],
      a: 0
    },

    {
      id: "PGP123-Q56",
      cat: "Concepts",
      q: "Why is grit dangerous to equipment?",
      o: [
        "It prevents harmful discharge and enables water reuse",
        "To remove finer particles",
        "It can cause abrasion and operational problems",
        "Adequately treated water can provide a controlled water source when standards are met"
      ],
      a: 2
    },

    {
      id: "PGP123-Q57",
      cat: "Concepts",
      q: "Why is filtration used in tertiary treatment?",
      o: [
        "It rejects dissolved salts through a semipermeable membrane",
        "It can cause abrasion and operational problems",
        "To remove finer particles",
        "They can reduce dissolved oxygen and harm aquatic organisms"
      ],
      a: 2
    },

    {
      id: "PGP123-Q58",
      cat: "Concepts",
      q: "Why is RO useful for desalination?",
      o: [
        "It rejects dissolved salts through a semipermeable membrane",
        "To reduce volume, stabilize organic matter and enable safe disposal/reuse",
        "Adequately treated water can provide a controlled water source when standards are met",
        "To remove finer particles"
      ],
      a: 0
    },

    {
      id: "PGP123-Q59",
      cat: "Concepts",
      q: "Why can treated wastewater be used for irrigation?",
      o: [
        "It can cause abrasion and operational problems",
        "It indicates oxygen demand associated with biodegradable organic matter",
        "It rejects dissolved salts through a semipermeable membrane",
        "Adequately treated water can provide a controlled water source when standards are met"
      ],
      a: 3
    },

    {
      id: "PGP123-Q60",
      cat: "Concepts",
      q: "What is the difference between aerobic and anaerobic digestion?",
      o: [
        "Heat causing temperature change without phase change",
        "SI unit of energy",
        "Aerobic digestion requires oxygen; anaerobic digestion occurs without oxygen",
        "Removal of settleable and floating materials"
      ],
      a: 2
    },

    {
      id: "PGP123-Q61",
      cat: "Concepts",
      q: "What is the purpose of dewatering?",
      o: [
        "Reduce sludge volume and water content",
        "Heat causing temperature change without phase change",
        "Solid by-product of wastewater treatment",
        "Sensible heat changes temperature; latent heat changes phase"
      ],
      a: 0
    },

    {
      id: "PGP123-Q62",
      cat: "Concepts",
      q: "What happens to sludge after treatment?",
      o: [
        "Shallow pond where microorganisms decompose organics with aeration",
        "Biological decomposition without oxygen",
        "Balancing incoming wastewater flow",
        "It may be reused, landfilled or incinerated depending on standards"
      ],
      a: 3
    },

    {
      id: "PGP123-Q63",
      cat: "Concepts",
      q: "What is thermal pollution?",
      o: [
        "Separation by allowing particles to settle under gravity",
        "Steam containing moisture",
        "Methane-rich biogas",
        "Discharge of heated water that raises receiving-water temperature"
      ],
      a: 3
    },

    {
      id: "PGP123-Q64",
      cat: "Concepts",
      q: "Why can wastewater harm humans?",
      o: [
        "To destroy pathogens",
        "It may contain pathogens and toxic substances",
        "It prevents hydraulic overloading",
        "It rejects dissolved salts through a semipermeable membrane"
      ],
      a: 1
    },

    {
      id: "PGP123-Q65",
      cat: "Concepts",
      q: "Why is BOD important?",
      o: [
        "Adequately treated water can provide a controlled water source when standards are met",
        "It indicates oxygen demand associated with biodegradable organic matter",
        "It prevents harmful discharge and enables water reuse",
        "It prevents hydraulic overloading"
      ],
      a: 1
    },

    {
      id: "PGP123-Q66",
      cat: "Concepts",
      q: "What is TSS?",
      o: [
        "Total suspended solids",
        "Removal of settleable and floating materials",
        "Reduce sludge volume and water content",
        "SI unit of energy"
      ],
      a: 0
    },

    // ========================================================
    // STEAM / ENERGY APPLICATIONS
    // ========================================================

    {
      id: "PGP123-Q67",
      cat: "Concepts",
      q: "Why is steam important industrially?",
      o: [
        "It supplies thermal energy for heating and process operations",
        "Adequately treated water can provide a controlled water source when standards are met",
        "It can cause abrasion and operational problems",
        "It rejects dissolved salts through a semipermeable membrane"
      ],
      a: 0
    },

    {
      id: "PGP123-Q68",
      cat: "Calculations",
      q: "Calculate sensible heat if m = 10 kg, Cp = 4 kJ/kgK and ΔT = 20 K.",
      o: [
        "1000 kJ",
        "1600 kJ",
        "800 kJ",
        "480 kJ"
      ],
      a: 2
    },

    {
      id: "PGP123-Q69",
      cat: "Concepts",
      q: "What is the difference between sensible and latent heat?",
      o: [
        "Concentration of sludge by reducing water content",
        "SI unit of energy",
        "Sensible heat changes temperature; latent heat changes phase",
        "Total suspended solids"
      ],
      a: 2
    },

    {
      id: "PGP123-Q70",
      cat: "Concepts",
      q: "Why are wastewater treatment and energy concepts important to PNGPD?",
      o: [
        "Petroleum processing requires environmental protection and large quantities of process energy",
        "To reduce volume, stabilize organic matter and enable safe disposal/reuse",
        "To destroy pathogens",
        "It supplies thermal energy for heating and process operations"
      ],
      a: 0
    }

  ]
};