export type Lang = "es" | "en";

export type Item = {
  period: string;
  title: string;
  org: string;
  sub?: string;
  desc: string;
};

// Para usar fotos reales: coloca las imágenes en /public/fotos y cambia `null` por la ruta, p. ej. "/fotos/perfil.jpg".
export const photos = {
  profile: null as string | null,
  gallery: [null, null, null, null] as (string | null)[],
};

export const email = "macarena.leyton@estudiante.ugm.cl";
export const phone = "+56 9 5775 8366";

const UGM = "Universidad Gabriela Mistral";

export const content = {
  es: {
    nav: { perfil: "Perfil", trayectoria: "Trayectoria", formacion: "Formación", contacto: "Contacto" },
    hero: {
      eyebrow: "Estudiante de Derecho · IV año",
      intro:
        "Estudiante de Derecho en la Universidad Gabriela Mistral. Juez del Tribunal Calificador de Elecciones y ayudante de Derecho Internacional Público y Derecho Civil.",
      ctaMail: "Escribir un correo",
      ctaPath: "Ver trayectoria",
      photo: "Foto de perfil",
    },
    current: {
      label: "Actualmente",
      items: [
        { title: "Ayudante de Derecho Internacional Público", org: UGM },
        { title: "Ayudante de Derecho Civil", org: UGM },
        { title: "Juez, Tribunal Calificador de Elecciones", org: UGM },
        { title: "Miembro, Directorio Juvenil", org: "Club Palestino" },
      ],
    },
    profile: {
      title: "Perfil",
      text: "Estudiante de Derecho de cuarto año, con interés en Derecho Internacional Público, derechos humanos, Derecho Civil, Derecho Penal y Derecho Procesal. Se caracteriza por su liderazgo, responsabilidad institucional, habilidades comunicativas, compromiso social y motivación constante por aprender y desarrollarse profesionalmente.",
      areasLabel: "Áreas de interés",
      areas: [
        "Derecho Internacional Público",
        "Derechos Humanos",
        "Derecho Civil",
        "Derecho Penal",
        "Derecho Procesal",
        "Desarrollo sostenible",
        "Participación ciudadana",
      ],
    },
    path: {
      title: "Trayectoria",
      groups: [
        {
          label: "Docencia y función institucional",
          items: [
            { period: "2026 – actualidad", title: "Ayudante de Derecho Civil", org: UGM, desc: "Apoyo académico en la asignatura, fortaleciendo habilidades de investigación, análisis jurídico y acompañamiento a estudiantes." },
            { period: "2026 – actualidad", title: "Ayudante de Derecho Internacional Público", org: UGM, desc: "Apoyo académico con énfasis en análisis de fuentes jurídicas, temas internacionales, derechos humanos y cooperación internacional." },
            { period: "2025 – 2026", title: "Juez, Tribunal Calificador de Elecciones", org: UGM, desc: "Funciones de análisis, imparcialidad, responsabilidad institucional y toma de decisiones en procesos electorales universitarios." },
          ],
        },
        {
          label: "Derecho internacional y derechos humanos",
          items: [
            { period: "2026", title: "Participante, Foro de los Países de América Latina y el Caribe sobre el Desarrollo Sostenible", org: "", desc: "Instancia regional sobre desarrollo sostenible, cooperación internacional y desafíos de política pública en América Latina y el Caribe." },
            { period: "2025", title: "Participante, Comité para el Ejercicio de los Derechos Inalienables del Pueblo Palestino", org: "Consultas con organizaciones de la sociedad civil", desc: "Consultas sobre derechos humanos, Derecho Internacional y derechos del pueblo palestino." },
            { period: "2025 – actualidad", title: "Miembro, Directorio Juvenil", org: "Club Palestino", desc: "Iniciativas juveniles, comunitarias y culturales, promoviendo liderazgo, identidad y compromiso social." },
          ],
        },
        {
          label: "Experiencia profesional",
          items: [
            { period: "2025", title: "Procuradora", org: "Estudio Jurídico", desc: "Apoyo en tareas jurídicas y administrativas, con experiencia práctica en un entorno profesional legal." },
            { period: "2025", title: "Captadora de clientes", org: "Lex O'Higgins", desc: "Comunicación, organización, atención a personas y gestión de relaciones con clientes." },
            { period: "2024 – 2025", title: "Servicio al cliente en cafetería", org: "Pantiaguina", desc: "Atención a clientes, trabajo en equipo y resolución de problemas." },
          ],
        },
        {
          label: "Voluntariado",
          items: [
            { period: "2026", title: "Voluntariado Parque Mahuida", org: UGM, desc: "Servicio comunitario y compromiso ambiental." },
            { period: "2025", title: "Cápsula Educativa", org: "Colegio Marista La Pintana", desc: "Iniciativa educativa para estudiantes sobre nociones básicas de Derecho y normas de convivencia." },
            { period: "2025", title: "Reforestación Parque Metropolitano", org: UGM, desc: "Actividades de reforestación y compromiso medioambiental." },
            { period: "2024", title: "Reconstrucción de viviendas en Valparaíso", org: UGM, desc: "Labores de reconstrucción y apoyo comunitario." },
          ],
        },
      ] as { label: string; items: Item[] }[],
    },
    field: {
      title: "En terreno",
      text: "Voluntariados y actividades de servicio comunitario.",
      photo: "Foto",
      captions: ["Parque Mahuida · 2026", "Cápsula Educativa · 2025", "Reforestación Parque Metropolitano · 2025", "Reconstrucción en Valparaíso · 2024"],
    },
    education: {
      title: "Formación",
      items: [
        { period: "2023 – actualidad", title: "Derecho", org: UGM, desc: "Estudiante de IV año." },
        { period: "2010 – 2022", title: "Educación Básica y Media", org: "Colegio Inmaculada Concepción de Vitacura", desc: "Formación escolar completa." },
      ] as Item[],
    },
    skills: {
      title: "Idiomas y habilidades",
      languages: [
        { name: "Español · nativo", desc: "" },
        { name: "Inglés · C1 Advanced", desc: "EF SET Certificate, 70/100. Reading: C2 Proficient (72) · Listening: C1 Advanced (68). Certificado otorgado el 27 de abril de 2026." },
      ],
      label: "Habilidades",
      list: ["Análisis jurídico", "Liderazgo", "Habilidades comunicativas", "Resolución de problemas", "Trabajo en equipo", "Responsabilidad institucional", "Creatividad e innovación", "Facilidad para aprender"],
    },
    contact: {
      label: "Contacto",
      title: "Conversemos",
      text: "Disponible para conversar sobre oportunidades, colaboraciones y proyectos.",
    },
    footer: { name: "Macarena Alejandra Leyton Vega", place: "Santiago, Chile" },
  },

  en: {
    nav: { perfil: "Profile", trayectoria: "Experience", formacion: "Education", contacto: "Contact" },
    hero: {
      eyebrow: "Law Student · 4th year",
      intro:
        "Law student at Universidad Gabriela Mistral. Judge of the Electoral Tribunal and teaching assistant in Public International Law and Civil Law.",
      ctaMail: "Send an email",
      ctaPath: "View experience",
      photo: "Profile photo",
    },
    current: {
      label: "Currently",
      items: [
        { title: "Teaching Assistant, Public International Law", org: UGM },
        { title: "Teaching Assistant, Civil Law", org: UGM },
        { title: "Judge, Electoral Tribunal", org: UGM },
        { title: "Member, Youth Board", org: "Club Palestino" },
      ],
    },
    profile: {
      title: "Profile",
      text: "Fourth-year law student with a strong interest in Public International Law, human rights, Civil Law, Criminal Law and Procedural Law. Recognised for leadership, institutional responsibility, communication skills, social commitment and a constant drive to learn and grow professionally.",
      areasLabel: "Areas of interest",
      areas: [
        "Public International Law",
        "Human Rights",
        "Civil Law",
        "Criminal Law",
        "Procedural Law",
        "Sustainable development",
        "Civic participation",
      ],
    },
    path: {
      title: "Experience",
      groups: [
        {
          label: "Teaching and institutional roles",
          items: [
            { period: "2026 – present", title: "Teaching Assistant, Civil Law", org: UGM, desc: "Academic support for the course, strengthening research skills, legal analysis and student mentoring." },
            { period: "2026 – present", title: "Teaching Assistant, Public International Law", org: UGM, desc: "Academic support focused on legal sources, international affairs, human rights and international cooperation." },
            { period: "2025 – 2026", title: "Judge, Electoral Tribunal", org: UGM, desc: "Analysis, impartiality, institutional responsibility and decision-making in university electoral processes." },
          ],
        },
        {
          label: "International law and human rights",
          items: [
            { period: "2026", title: "Participant, Forum of the Countries of Latin America and the Caribbean on Sustainable Development", org: "", desc: "Regional forum on sustainable development, international cooperation and public policy challenges in Latin America and the Caribbean." },
            { period: "2025", title: "Participant, Committee on the Exercise of the Inalienable Rights of the Palestinian People", org: "Consultations with civil society organisations", desc: "Consultations on human rights, International Law and the rights of the Palestinian people." },
            { period: "2025 – present", title: "Member, Youth Board", org: "Club Palestino", desc: "Youth, community and cultural initiatives promoting leadership, identity and social commitment." },
          ],
        },
        {
          label: "Professional experience",
          items: [
            { period: "2025", title: "Legal Clerk (Procuradora)", org: "Law firm", desc: "Support with legal and administrative tasks, gaining hands-on experience in a professional legal setting." },
            { period: "2025", title: "Client Acquisition", org: "Lex O'Higgins", desc: "Communication, organisation, customer care and client relationship management." },
            { period: "2024 – 2025", title: "Café Customer Service", org: "Pantiaguina", desc: "Customer service, teamwork and problem solving." },
          ],
        },
        {
          label: "Volunteering",
          items: [
            { period: "2026", title: "Parque Mahuida Volunteering", org: UGM, desc: "Community service and environmental commitment." },
            { period: "2025", title: "Educational Capsule", org: "Colegio Marista La Pintana", desc: "Educational initiative introducing students to basic legal concepts and rules of coexistence." },
            { period: "2025", title: "Parque Metropolitano Reforestation", org: UGM, desc: "Reforestation activities and environmental commitment." },
            { period: "2024", title: "Housing Reconstruction in Valparaíso", org: UGM, desc: "Reconstruction work and community support." },
          ],
        },
      ] as { label: string; items: Item[] }[],
    },
    field: {
      title: "In the field",
      text: "Volunteering and community service activities.",
      photo: "Photo",
      captions: ["Parque Mahuida · 2026", "Educational Capsule · 2025", "Parque Metropolitano Reforestation · 2025", "Reconstruction in Valparaíso · 2024"],
    },
    education: {
      title: "Education",
      items: [
        { period: "2023 – present", title: "Law", org: UGM, desc: "4th-year student." },
        { period: "2010 – 2022", title: "Primary and Secondary Education", org: "Colegio Inmaculada Concepción de Vitacura", desc: "Full school education." },
      ] as Item[],
    },
    skills: {
      title: "Languages & skills",
      languages: [
        { name: "Spanish · native", desc: "" },
        { name: "English · C1 Advanced", desc: "EF SET Certificate, 70/100. Reading: C2 Proficient (72) · Listening: C1 Advanced (68). Awarded on 27 April 2026." },
      ],
      label: "Skills",
      list: ["Legal analysis", "Leadership", "Communication skills", "Problem solving", "Teamwork", "Institutional responsibility", "Creativity and innovation", "Quick learner"],
    },
    contact: {
      label: "Contact",
      title: "Let's talk",
      text: "Open to conversations about opportunities, collaborations and projects.",
    },
    footer: { name: "Macarena Alejandra Leyton Vega", place: "Santiago, Chile" },
  },
};
