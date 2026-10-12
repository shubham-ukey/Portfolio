// Replace each `github` value with the direct repository URL.
// Project descriptions are subject to final implementation (see BRD section 9.4).
const GITHUB = 'https://github.com/shubham-ukey'

export const projects = [
  {
    name: 'Excel Student Upload & Validation API',
    status: null,
    problem: 'Student records collected in Excel sheets need to be checked before they reach the database.',
    solution:
      'A REST endpoint accepts an Excel upload, extracts each student record and validates the name, email and mobile number.',
    features: ['Excel upload through a REST endpoint', 'Student data extraction', 'Name, email and mobile validation', 'Endpoints tested with Postman'],
    tech: ['Java', 'Spring Boot', 'Apache POI', 'REST', 'Postman'],
    github: GITHUB,
    demo: null,
  },
  {
    name: 'WorkSphere',
    status: null,
    problem: 'Organisations need one system to manage employees, departments and their managers.',
    solution:
      'A REST backend models the relationships between employees, departments and managers and returns data through DTOs.',
    features: ['Employee, department and manager management', 'Entity relationships with Spring Data JPA', 'DTO-based data transfer', 'REST API backend'],
    tech: ['Java', 'Spring Boot', 'Spring Data JPA', 'MySQL'],
    github: GITHUB,
    demo: null,
  },
  {
    name: 'Customer Relationship Management',
    status: null,
    problem: 'Customer records need to be created, found and updated in a reliable, consistent way.',
    solution: 'A Spring Boot service exposes REST operations for customer records and stores them in MySQL.',
    features: ['Customer record management', 'REST operations', 'Spring Boot and MySQL integration'],
    tech: ['Java', 'Spring Boot', 'REST', 'MySQL'],
    github: GITHUB,
    demo: null,
  },
  {
    name: 'AI Document Question Answering API',
    status: 'In Progress',
    problem: 'Finding an answer inside a long document takes time when you have to read all of it.',
    solution: 'An API that answers questions from the contents of an uploaded document using Spring AI and Gemini.',
    features: ['Document-based question answering', 'Spring AI and Gemini integration', 'MySQL where appropriate'],
    tech: ['Java', 'Spring Boot', 'Spring AI', 'Gemini', 'MySQL'],
    github: GITHUB,
    demo: null,
  },
]
