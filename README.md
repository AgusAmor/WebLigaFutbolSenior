# 🏆 Liga de Fútbol Senior - Landing Page

Una landing page moderna y responsive para una **Liga de Fútbol Senior avalada por la AFA**. Diseñada para que equipos de fútbol senior se inscriban y compitan por el derecho de participar en la Copa Argentina.

## 📋 Descripción del Proyecto

Liga de Fútbol Senior es un torneo profesional que ofrece a equipos de jugadores veteranos la oportunidad de competir al máximo nivel. Los campeones y subcampeones obtienen un **cupo directo para la Copa Argentina**, el torneo más federal del país.

### ✨ Características Principales

- **Banner Inicial Impactante**: Con call-to-action directo a inscripción
- **Sección de Información**: Destaca los beneficios y ventajas competitivas
- **Formulario de Inscripción**: Pre-inscripción de equipos con datos esenciales
- **Formulario de Contacto**: Para consultas generales sobre el torneo
- **Header Profesional**: Con navegación fluida y datos de contacto
- **Footer**: Con enlaces a redes sociales

### 🎨 Diseño & Estética

- **Paleta de Colores Personalizada**: 
  - Azul Marino (#0F213E) - Profesionalismo
  - Dorado (#D8B964) - Trofeos y premios
  - Celeste (#6BA8C4) - Dinamismo deportivo
  - Fondo claro (#F0F4F8)

- **Totalmente Responsive**: Optimizado para móviles, tablets y desktops
- **Minimalista y Profesional**: Interfaz limpia y enfocada en el usuario
- **Scroll Suave**: Navegación fluida entre secciones

## 🛠️ Stack Tecnológico

- **React 19.2** - Framework UI
- **Vite 7.2** - Build tool
- **Tailwind CSS 4** - Estilos y responsive design
- **react-icons 5.5** - Iconografía profesional
- **@tailwindcss/vite** - Plugin de Tailwind para Vite

## 📦 Instalación

```bash
# Clonar repositorio
git clone <tu-repo>
cd LigaFutbolSenior

# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm run dev

# Build para producción
pnpm run build

# Preview del build
pnpm run preview
```

## 📂 Estructura del Proyecto

```
src/
├── components/
│   ├── Header.jsx          # Navegación y contacto
│   ├── Hero.jsx            # Banner principal
│   ├── InfoSection.jsx     # Beneficios del torneo
│   ├── RegistrationForm.jsx # Formulario de inscripción
│   ├── ContactForm.jsx     # Formulario de contacto
│   └── Footer.jsx          # Pie de página
├── App.jsx                 # Componente principal
├── index.css              # Estilos globales y variables de color
└── main.jsx               # Punto de entrada
```

## 🚀 Despliegue

### Vercel (Recomendado)
```bash
pnpm install -D vercel
vercel
```

### Netlify
Conecta tu repositorio GitHub directamente en [Netlify](https://netlify.com)

## 📧 Funcionalidades Futuras

- [ ] Integración con EmailJS para envío de mails
- [ ] Panel de administración
- [ ] Sistema de pagos para inscripción
- [ ] Estadísticas y tabla de posiciones en vivo
- [ ] Gestión de jugadores por equipo

## 📝 Variables de Entorno

Crear archivo `.env.local` (cuando se agregue funcionalidad de mails):

```env
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
VITE_EMAILJS_PUBLIC_KEY=tu_public_key
```

## 🤝 Contribución

Este proyecto está en desarrollo activo. Para cambios o mejoras, contactar al equipo de desarrollo.

## 📞 Contacto

- **Email**: info@ligasenior.com
- **Teléfono**: +54 11 1234-5678

---

**Desarrollado con ❤️ para Liga de Fútbol Senior** ⚽
